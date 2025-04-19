import {
  SlDrawer,
  SlInput,
  SlIconButton,
  SlTooltip,
} from "@shoelace-style/shoelace/dist/react";
import { useAppStore, VIEW } from "../../store";
import {
  addRecipeCollection,
  useOwnedCollections,
} from "../../api/recipeCollection";
import { useState } from "preact/hooks";
import { SlHideEvent } from "@shoelace-style/shoelace";
import CollectionCard from "../widgets/collectionCard";
import { useQueryClient } from "@tanstack/react-query";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";

const styles = {
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  collectionCard: {
    marginBottom: "1em",
    flex: 1,
    width: "100%",
  },
};

export default function CollectionsDrawer() {
  const queryClient = useQueryClient();

  const { view, setMainView } = useAppStore();
  const { data: collectionIds } = useOwnedCollections();
  const [searchTerm, setSearchTerm] = useState("");

  function onHide(e: SlHideEvent) {
    // Prevent event bubbling caused by inner menu elements
    if (e.eventPhase === Event.AT_TARGET) {
      setMainView();
    } else {
      e.preventDefault();
    }
  }

  async function onCreateCollection() {
    try {
      await addRecipeCollection("New Collection");
      await queryClient.invalidateQueries({ queryKey: ["ownedCollections"] });
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }

  return (
    <SlDrawer
      class="drawer-placement-start"
      open={view === VIEW.COLLECTIONS_LIST}
      onSlHide={(e) => onHide(e)}
      placement="start"
      label="Collections"
    >
      {collectionIds !== undefined && (
        <div style={styles.root}>
          <SlInput
            style={styles.collectionCard}
            clearable
            type="search"
            placeholder="Find a collection..."
            value={searchTerm}
            onSlChange={(e) =>
              setSearchTerm((e.target as SlInputElement).value)
            }
          ></SlInput>
          {collectionIds.map((collectionId) => (
            <CollectionCard
              collectionId={collectionId}
              searchTerm={searchTerm}
            ></CollectionCard>
          ))}
          <SlTooltip content="Add Collection">
            <SlIconButton
              name="plus"
              label="Add Collection"
              style={{ fontSize: "2em" }}
              onClick={() => {
                void onCreateCollection();
              }}
            ></SlIconButton>
          </SlTooltip>
        </div>
      )}
    </SlDrawer>
  );
}
