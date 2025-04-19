import {
  SlCard,
  SlCopyButton,
  SlInput,
  SlIcon,
  SlIconButton,
  SlTooltip,
  SlProgressRing,
} from "@shoelace-style/shoelace/dist/react";
import { useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import {
  removeRecipeCollection,
  renameRecipeCollection,
  useCollectionName,
  useRecipeCount,
} from "src/api/recipeCollection";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";

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

export default function CollectionCard({
  collectionId,
  searchTerm,
}: {
  collectionId: number;
  searchTerm: string;
}) {
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
      console.error(e);
    }
  }

  async function onRenameCollection(id: number, newName: string) {
    try {
      await renameRecipeCollection(id, newName);
      await queryClient.invalidateQueries({ queryKey: ["collectionName"] });
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }

  return collectionName === undefined ||
    !collectionName
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
        <SlTooltip content="Delete Collection">
          <SlProgressRing
            value={progress}
            style="
              --size: 35px;
              --track-width: 2px;
              --indicator-color: red;
              --track-color: none;
              --indicator-transition-duration: 2;
            "
          >
            <SlIconButton
              name="trash"
              label="Delete Collection"
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
