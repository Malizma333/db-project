import SlInput from "@shoelace-style/shoelace/dist/react/input/index.js";
import SlDialog from "@shoelace-style/shoelace/dist/react/dialog/index.js";
import SlButton from "@shoelace-style/shoelace/dist/react/button/index.js";
import { SlHideEvent } from "@shoelace-style/shoelace";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";
import type SlAlertElement from "@shoelace-style/shoelace/dist/components/alert/alert.js";

import { useRef, useState, useEffect } from "preact/hooks";
import { useQueryClient } from "@tanstack/react-query";

import { useAppStore, VIEW } from "../../store";
import { Notification } from "../widgets/notification";
import TagPicker, { TagType } from "../widgets/tagPicker";
import { addRecipe, removeRecipe } from "../../api/recipe";
import {
  useCollectionAllergens,
  useCollectionIngredients,
} from "../../api/recipeCollection";
import { AUTH_ERROR } from "src/api/api";

const styles = {
  inputField: {
    marginBottom: "1em",
  },
};

export default function RecipeForm({
  formTitle,
  submitLabel,
  submitMessage,
  viewState,
}: {
  formTitle: string;
  submitLabel: string;
  submitMessage: string;
  viewState: VIEW;
}) {
  const {
    view,
    selectedRecipe,
    selectedRecipeName,
    loadedCollectionId,
    setMainView,
    setSelectedRecipe,
    setSessionAlert,
  } = useAppStore();

  const queryClient = useQueryClient();

  const submitAlert = useRef<null | SlAlertElement>(null);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    setNewName(selectedRecipeName);
  }, [selectedRecipeName]);

  const { data: allAllergens } = useCollectionAllergens(loadedCollectionId);
  const { data: allIngredients } = useCollectionIngredients(loadedCollectionId);

  function onCloseDialog(e: SlHideEvent) {
    // Prevent event bubbling caused by inner menu elements being closed
    if (e.eventPhase !== Event.AT_TARGET) {
      e.preventDefault();
      return;
    }

    setMainView();
  }

  async function onAddRecipe() {
    if (newName === "") return;

    try {
      if (viewState === VIEW.UPDATE_RECIPE_FORM) {
        await removeRecipe(selectedRecipe.name);
      }
      await addRecipe(
        loadedCollectionId,
        newName,
        selectedRecipe.reference,
        selectedRecipe.authors,
        selectedRecipe.ingredients,
        selectedRecipe.allergens,
      );
      await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
      await queryClient.invalidateQueries({
        queryKey: ["filterCollectionCount"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["recipeCount"],
      });
      setMainView();
      if (submitAlert.current !== null) {
        await submitAlert.current.toast();
      }
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
    <SlDialog
      class="dialog-overview"
      open={view === viewState}
      onSlHide={(e) => onCloseDialog(e)}
      label={formTitle}
    >
      <Notification
        message={submitMessage}
        variant="success"
        childRef={submitAlert}
      ></Notification>
      <SlInput
        style={styles.inputField}
        type="text"
        value={newName}
        onSlChange={(e) => setNewName((e.target as SlInputElement).value)}
        placeholder="Recipe Name"
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="text"
        value={selectedRecipe.authors.join(",")}
        onSlChange={(e) =>
          setSelectedRecipe({
            ...selectedRecipe,
            authors: (e.target as SlInputElement).value.split(","),
          })
        }
        placeholder="Authors"
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="text"
        value={selectedRecipe.reference}
        onSlChange={(e) =>
          setSelectedRecipe({
            ...selectedRecipe,
            reference: (e.target as SlInputElement).value,
          })
        }
        placeholder="Reference"
      ></SlInput>
      <TagPicker
        variant="primary"
        available={allAllergens}
        selected={selectedRecipe.allergens}
        setSelected={(allergens) =>
          setSelectedRecipe({ ...selectedRecipe, allergens })
        }
        tagType={TagType.Allergen}
      ></TagPicker>
      <TagPicker
        variant="primary"
        available={allIngredients}
        selected={selectedRecipe.ingredients}
        setSelected={(ingredients) =>
          setSelectedRecipe({ ...selectedRecipe, ingredients })
        }
        tagType={TagType.Ingredient}
      ></TagPicker>
      <SlButton
        onClick={() => {
          void onAddRecipe();
        }}
      >
        {" "}
        {submitLabel}
      </SlButton>
    </SlDialog>
  );
}
