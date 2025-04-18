import {
  SlInput,
  SlDialog,
  SlButton,
} from "@shoelace-style/shoelace/dist/react";
import { useRef } from "preact/hooks";
import { useAppStore, VIEW } from "../../store";
import { SlNotification } from "../widgets/notification";
import TagPicker, { TagType } from "../widgets/tagPicker";
import { useParams } from "react-router";
import { addRecipe, removeRecipe } from "../../api/recipe";
import {
  useCollectionAllergens,
  useCollectionIngredients,
} from "../../api/recipeCollection";
import { SlHideEvent } from "@shoelace-style/shoelace";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

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
    setMainView,
    setSelectedRecipe,
  } = useAppStore();

  const queryClient = useQueryClient();

  const submitAlert = useRef(null);
  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");
  const [newName, setNewName] = useState(selectedRecipeName);

  const { data: allAllergens } = useCollectionAllergens(collectionId);
  const { data: allIngredients } = useCollectionIngredients(collectionId);

  function onCloseDialog(e: SlHideEvent) {
    // Prevent event bubbling caused by inner menu elements
    if (e.eventPhase !== Event.AT_TARGET) {
      e.preventDefault();
      return;
    }

    setMainView();
  }

  async function onAddRecipe(hideEvent: SlHideEvent) {
    try {
      if (viewState === VIEW.UPDATE_RECIPE_FORM) {
        await removeRecipe(selectedRecipe.name);
      }
      await addRecipe(
        collectionId,
        newName,
        selectedRecipe.reference,
        selectedRecipe.authors,
        selectedRecipe.ingredients,
        selectedRecipe.allergens,
      );
      await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
      onCloseDialog(hideEvent);
      if (submitAlert.current !== null) {
        submitAlert.current.base.toast();
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === viewState}
      onSlHide={(e) => onCloseDialog(e)}
      label={formTitle}
    >
      <SlNotification
        message={submitMessage}
        variant="success"
        ref={submitAlert}
      ></SlNotification>
      <SlInput
        style={styles.inputField}
        type="text"
        value={newName}
        onSlChange={(e) => setNewName((e.target as any).value)}
        placeholder="Recipe Name"
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="text"
        value={selectedRecipe.authors.join(",")}
        onSlChange={(e) =>
          setSelectedRecipe({
            ...selectedRecipe,
            authors: (e.target as any).value.split(","),
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
            reference: (e.target as any).value,
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
        onClick={(e) => {
          void onAddRecipe(e);
        }}
      >
        {submitLabel}
      </SlButton>
    </SlDialog>
  );
}
