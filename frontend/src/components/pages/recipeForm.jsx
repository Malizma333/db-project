import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useRef } from 'preact/hooks';
import { useAppStore, VIEW } from '../../store';
import { SlNotification } from '../widgets/notification';
import TagPicker from '../widgets/tagPicker';
import { useParams } from 'react-router';

import { addRecipe, removeRecipe } from '../../api/recipe';
import { useCollectionAllergens, useCollectionIngredients } from '../../api/recipeCollection';

const styles = {
  inputField: {
    marginBottom: "1em",
  },
}

export default function RecipeForm({ formTitle, submitLabel, submitMessage, viewState, recipeData, setRecipeData }) {
  const { view, setMainView } = useAppStore();

  const submitAlert = useRef(null);
  const params = useParams();

  const { data: allAllergens } = useCollectionAllergens(params["id"]);
  const { data: allIngredients } = useCollectionIngredients(params["id"]);

  function onCloseDialog(e) {
    // Prevent event bubbling caused by inner menu elements
    if (e.eventPhase !== Event.AT_TARGET) {
      e.preventDefault();
      return;
    }

    setMainView();
  }

  async function onAddRecipe(e) {
    try {
      if (viewState === VIEW.UPDATE_RECIPE_FORM) {
        await removeRecipe(recipeData.recipeName);
      }
      await addRecipe(params["id"], recipeData.recipeName, recipeData.reference, recipeData.authors, recipeData.ingredients, recipeData.allergens);
      onCloseDialog(e);
      submitAlert.current.base.toast();
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
      <SlNotification message={submitMessage} variant="success" ref={submitAlert}></SlNotification>
      <SlInput
        style={styles.inputField}
        type="text"
        value={recipeData.recipeName}
        onSlChange={(e) => setRecipeData.setRecipeName(e.target.value)}
        placeholder="Recipe Name"
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="text"
        value={recipeData.authors.join(",")}
        onSlChange={(e) => setRecipeData.setAuthors(e.target.value.split(","))}
        placeholder="Authors"
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="text"
        value={recipeData.reference}
        onSlChange={(e) => setRecipeData.setReference(e.target.value)}
        placeholder="Reference"
      ></SlInput>
      <TagPicker
        variant="primary"
        available={allAllergens}
        selected={recipeData.allergens}
        setSelected={setRecipeData.setAllergens}
      ></TagPicker>
      <TagPicker
        variant="primary"
        available={allIngredients}
        selected={recipeData.ingredients}
        setSelected={setRecipeData.setIngredients}
      ></TagPicker>
      <SlButton onClick={(e) => onAddRecipe(e)}>
        {submitLabel}
      </SlButton>
    </SlDialog>
  )
}

