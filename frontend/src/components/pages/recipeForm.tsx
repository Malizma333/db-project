import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useRef } from 'preact/hooks';
import { useAppStore, VIEW } from '../../store';
import { SlNotification } from '../widgets/notification';
import TagPicker from '../widgets/tagPicker';
import { useParams } from 'react-router';
import { addRecipe, removeRecipe } from '../../api/recipe';
import { useCollectionAllergens, useCollectionIngredients } from '../../api/recipeCollection';
import { SlHideEvent } from '@shoelace-style/shoelace';
import { useQueryClient } from '@tanstack/react-query';

const styles = {
  inputField: {
    marginBottom: "1em",
  },
}

export default function RecipeForm(
  { formTitle, submitLabel, submitMessage, viewState } :
  { formTitle: string, submitLabel: string, submitMessage: string, viewState: VIEW }
) {
  const {
    view,
    setMainView,
    setSelectedRecipe,
    selectedRecipeName,
    selectedRecipeReference,
    selectedRecipeAllergens,
    selectedRecipeIngredients,
    selectedRecipeAuthors,
  } = useAppStore();

  const selectedRecipe = {
    recipeName: selectedRecipeName,
    reference: selectedRecipeReference,
    allergens: selectedRecipeAllergens,
    ingredients: selectedRecipeIngredients,
    authors: selectedRecipeAuthors,
  };

  const queryClient = useQueryClient();

  const submitAlert = useRef(null);
  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");

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

  async function onAddRecipe(e: any) {
    try {
      if (viewState === VIEW.UPDATE_RECIPE_FORM) {
        await removeRecipe(selectedRecipeName);
      }
      await addRecipe(
        collectionId,
        selectedRecipe.recipeName,
        selectedRecipe.reference,
        selectedRecipe.authors,
        selectedRecipe.ingredients,
        selectedRecipe.allergens
      );
      await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
      onCloseDialog(e);
      if (submitAlert.current !== null) {
        // @ts-expect-error Not sure what to type this ref as
        submitAlert.current.base.toast();
      }
    } catch(e) {
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
      {/* @ts-expect-error React refs not well supported by Shoelace */}
      <SlNotification message={submitMessage} variant="success" ref={submitAlert}></SlNotification>
      <SlInput
        style={styles.inputField}
        type="text"
        value={selectedRecipeName}
        onSlChange={(e) => setSelectedRecipe({ ...selectedRecipe, recipeName: (e.target as any).value })}
        placeholder="Recipe Name"
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="text"
        value={selectedRecipeAuthors.join(",")}
        onSlChange={(e) => setSelectedRecipe({ ...selectedRecipe, authors: (e.target as any).value.split(",") })}
        placeholder="Authors"
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="text"
        value={selectedRecipeReference}
        onSlChange={(e) => setSelectedRecipe({ ...selectedRecipe, reference: (e.target as any).value })}
        placeholder="Reference"
      ></SlInput>
      <TagPicker
        variant="primary"
        available={allAllergens}
        selected={selectedRecipeAllergens}
        setSelected={(allergens) => setSelectedRecipe({ ...selectedRecipe, allergens })}
      ></TagPicker>
      <TagPicker
        variant="primary"
        available={allIngredients}
        selected={selectedRecipeIngredients}
        setSelected={(ingredients) => setSelectedRecipe({ ...selectedRecipe, ingredients })}
      ></TagPicker>
      <SlButton onClick={(e) => {void onAddRecipe(e)}}>
        {submitLabel}
      </SlButton>
    </SlDialog>
  )
}

