import {
  SlTag,
  SlIconButton,
  SlDropdown,
  SlMenu,
  SlMenuItem,
  SlInput,
} from "@shoelace-style/shoelace/dist/react";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import { createAllergen, createIngredient } from "src/api/recipe";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";

const styles = {
  root: {
    alignItems: "center",
    display: "flex",
    height: "2em",
    justifyContent: "start",
    position: "relative",
  },
  menu: {
    height: "8em",
  },
  addNew: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
  },
};

export enum TagType {
  Allergen = "Allergy",
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
  const [newTag, setNewTag] = useState("");
  const queryClient = useQueryClient();
  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");

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
        await createAllergen(newTag, collectionId);
        await queryClient.invalidateQueries({
          queryKey: ["collectionAllergens"],
        });
        if (!selected.includes(newTag)) {
          onAddTag(newTag);
        }
      } else if (tagType === TagType.Ingredient) {
        await createIngredient(newTag, collectionId);
        await queryClient.invalidateQueries({
          queryKey: ["collectionIngredients"],
        });
        if (!selected.includes(newTag)) {
          onAddTag(newTag);
        }
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }

  return (
    <div style={styles.root}>
      {selected.map((tag, index) => (
        <SlTag
          key={index}
          variant={variant}
          removable={!viewMode}
          size="small"
          onSlRemove={() => onRemoveTag(index)}
        >
          {tag}
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
      {!viewMode && tagType !== undefined && (
        <SlInput
          style={styles.addNew}
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
