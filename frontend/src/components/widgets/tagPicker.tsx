import "./tagPicker.css";

import SlTag from "@shoelace-style/shoelace/dist/react/tag/index.js";
import SlIconButton from "@shoelace-style/shoelace/dist/react/icon-button/index.js";
import SlDropdown from "@shoelace-style/shoelace/dist/react/dropdown/index.js";
import SlMenu from "@shoelace-style/shoelace/dist/react/menu/index.js";
import SlMenuItem from "@shoelace-style/shoelace/dist/react/menu-item/index.js";
import SlInput from "@shoelace-style/shoelace/dist/react/input/index.js";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";

import { useQueryClient } from "@tanstack/react-query";
import { useState } from "preact/hooks";

import { createAllergen, createIngredient } from "src/api/recipe";
import { AUTH_ERROR } from "src/api/api";
import { useAppStore } from "src/store";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1em",
  },
  menu: {
    height: "8em",
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.25em",
    marginBottom: "1em",
  },
  tagContent: {
    overflow: "hidden",
    whitespace: "nowrap",
    textOverflow: "ellipsis",
  },
};

export enum TagType {
  Allergen = "Allergen",
  Ingredient = "Ingredient",
}

export default function TagPicker({
  variant,
  selected,
  available = [],
  setSelected = undefined,
  viewMode = false,
  tagType = undefined,
}: {
  variant: "success" | "warning" | "danger" | "primary";
  selected: string[];
  available?: string[];
  setSelected?: (s: string[]) => void;
  viewMode?: boolean;
  tagType?: TagType;
}) {
  const { loadedCollectionId, setSessionAlert } = useAppStore();
  const [newTag, setNewTag] = useState("");
  const queryClient = useQueryClient();

  function onRemoveTag(i: number) {
    if (setSelected !== undefined) {
      setSelected(selected.slice(0, i).concat(selected.slice(i + 1)));
    }
  }

  function onAddTag(name: string) {
    if (setSelected !== undefined) {
      setSelected(selected.concat([name]));
    }
  }

  async function onCreateTag() {
    if (newTag === "") return;

    try {
      if (tagType === TagType.Allergen) {
        await createAllergen(newTag, loadedCollectionId);
        await queryClient.invalidateQueries({
          queryKey: ["collectionAllergens"],
        });
      } else if (tagType === TagType.Ingredient) {
        await createIngredient(newTag, loadedCollectionId);
        await queryClient.invalidateQueries({
          queryKey: ["collectionIngredients"],
        });
      }
      if (!selected.includes(newTag)) {
        onAddTag(newTag);
      }
      setNewTag("");
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

  return (
    <div style={styles.root}>
      <div style={styles.tagContainer}>
        {selected.map((tag, index) => (
          <SlTag
            className={"pickedTag"}
            key={index}
            variant={variant}
            removable={!viewMode}
            size="small"
            onSlRemove={() => onRemoveTag(index)}
          >
            <p style={styles.tagContent}>{tag}</p>
          </SlTag>
        ))}
        {!viewMode && available.length > selected.length && (
          <SlDropdown>
            <SlIconButton slot="trigger" name="plus"></SlIconButton>
            <SlMenu
              style={styles.menu}
              onSlSelect={(e) => onAddTag(e.detail.item.value)}
            >
              {available
                .filter((tag) => !selected.includes(tag))
                .map((tag) => {
                  return <SlMenuItem value={tag}>{tag}</SlMenuItem>;
                })}
            </SlMenu>
          </SlDropdown>
        )}
      </div>
      {!viewMode && tagType !== undefined && (
        <SlInput
          size="small"
          placeholder={"New " + tagType}
          value={newTag}
          onSlChange={(e) => setNewTag((e.target as SlInputElement).value)}
        >
          <SlIconButton
            slot="suffix"
            name="plus"
            label="Create Tag"
            onClick={() => {
              void onCreateTag();
            }}
          ></SlIconButton>
        </SlInput>
      )}
    </div>
  );
}
