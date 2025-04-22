import "./collectionCard.css";

import SlCard from "@shoelace-style/shoelace/dist/react/card/index.js";
import SlCopyButton from "@shoelace-style/shoelace/dist/react/copy-button/index.js";
import SlInput from "@shoelace-style/shoelace/dist/react/input/index.js";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon/index.js";
import SlIconButton from "@shoelace-style/shoelace/dist/react/icon-button/index.js";
import SlTooltip from "@shoelace-style/shoelace/dist/react/tooltip/index.js";
import SlProgressRing from "@shoelace-style/shoelace/dist/react/progress-ring/index.js";
import SlSkeleton from "@shoelace-style/shoelace/dist/react/skeleton/index.js";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";

import { useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "preact/hooks";

import {
  removeRecipeCollection,
  renameRecipeCollection,
  useCollectionName,
  useRecipeCount,
} from "src/api/recipeCollection";
import { AUTH_ERROR } from "src/api/api";
import { useAppStore } from "src/store";

const styles = {
  collectionTitle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  collectionCard: {
    marginBottom: "1em",
    flex: 1,
    width: "100%",
  },
};

function CollectionCardSkeleton() {
  return (
    <SlCard style={styles.collectionCard}>
      <div slot="header" style={styles.collectionTitle}>
        <SlSkeleton style={{ width: "14.5em", height: "1.5em" }}></SlSkeleton>
        <SlSkeleton style={{ width: "1.5em", height: "1.5em" }}></SlSkeleton>
        <SlSkeleton style={{ width: "1.5em", height: "1.5em" }}></SlSkeleton>
        <SlSkeleton style={{ width: "1.5em", height: "1.5em" }}></SlSkeleton>
      </div>
      <SlSkeleton style={{ width: "10em", height: "1em" }}></SlSkeleton>
    </SlCard>
  );
}

export default function CollectionCard({
  collectionId,
  searchTerm,
}: {
  collectionId: number;
  searchTerm: string;
}) {
  const { setSessionAlert } = useAppStore();
  const queryClient = useQueryClient();

  const { data: collectionName } = useCollectionName(collectionId);
  const { data: recipeCount } = useRecipeCount(collectionId);

  const collectionUrl = window.location.origin + "/collection/" + collectionId;

  const holdTime = 2000;
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  function updateProgress() {
    startTimeRef.current = Date.now();
    intervalRef.current = window.setInterval(() => {
      if (startTimeRef.current) {
        const elapsed = Date.now() - startTimeRef.current;
        const percent = Math.min((elapsed / holdTime) * 100, 100);
        setProgress(percent);
      }
    }, 50);
  }

  function startHold() {
    updateProgress();

    timeoutRef.current = window.setTimeout(async () => {
      void (await onDeleteCollection());
      cancelHold();
    }, holdTime);
  }

  function cancelHold() {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
    startTimeRef.current = null;
    setProgress(0);
  }

  async function onDeleteCollection() {
    try {
      await removeRecipeCollection(collectionId);
      await queryClient.invalidateQueries({ queryKey: ["ownedCollections"] });
    } catch (e) {
      if (e instanceof Error) {
        if (e.message === AUTH_ERROR) {
          setSessionAlert();
        } else {
          console.error(e.message);
        }
      }
    }
  }

  async function onRenameCollection(id: number, newName: string) {
    try {
      await renameRecipeCollection(id, newName);
      await queryClient.invalidateQueries({ queryKey: ["collectionName"] });
    } catch (e) {
      if (e instanceof Error) {
        if (e.message === AUTH_ERROR) {
          setSessionAlert();
        } else {
          console.error(e.message);
        }
      }
    }
  }

  return collectionName === undefined ? (
    <CollectionCardSkeleton></CollectionCardSkeleton>
  ) : !collectionName
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase()) ? null : (
    <SlCard style={styles.collectionCard}>
      <div slot="header" style={styles.collectionTitle}>
        <SlInput
          className="collectionsName"
          filled
          value={collectionName}
          onSlBlur={(e) => {
            void onRenameCollection(
              collectionId,
              (e.target as SlInputElement).value,
            );
          }}
        ></SlInput>
        <SlTooltip content="Open Collection">
          <SlIconButton
            name="box-arrow-up-right"
            label="Go to Recipe"
            onClick={() => {
              window.location.assign(collectionUrl);
            }}
          ></SlIconButton>
        </SlTooltip>
        <SlCopyButton
          value={collectionUrl}
          copyLabel="Share Collection"
          successLabel="Copied"
          errorLabel="Failed to copy"
        >
          <SlIcon name="share" slot="copy-icon"></SlIcon>
        </SlCopyButton>
        <SlTooltip content="Delete Collection (Hold)">
          <SlProgressRing
            value={progress}
            style="
              --size: 35px;
              --track-width: 2px;
              --track-color: none;
              --indicator-transition-duration: 2;
            "
          >
            <SlIconButton
              name="trash"
              label="Delete Collection (Hold)"
              onMouseDown={() => startHold()}
              onMouseUp={() => cancelHold()}
              onMouseLeave={() => cancelHold()}
              onTouchStart={() => startHold()}
              onTouchEnd={() => cancelHold()}
              onTouchCancel={() => cancelHold()}
            ></SlIconButton>
          </SlProgressRing>
        </SlTooltip>
      </div>
      Included recipes: {recipeCount}
    </SlCard>
  );
}
