import { SlDialog } from '@shoelace-style/shoelace/dist/react';
import { useAppStore, VIEW } from '../../store';
import TagPicker from '../widgets/tagPicker';

const styles = {
  summaryField: {
    marginBottom: "1em",
  },
}

export default function RecipeSummary() {
  const {
    view,
    setMainView,
    selectedRecipeName,
    selectedRecipeReference,
    selectedRecipeAllergens,
    selectedRecipeIngredients,
    selectedRecipeAuthors,
  } = useAppStore();

  function onCloseDialog() {
    setMainView();
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.RECIPE_SUMMARY}
      onSlHide={() => onCloseDialog()}
      label={selectedRecipeName}
    >
      <strong>Author(s)</strong>
      <div style={styles.summaryField}>{selectedRecipeAuthors.join(",")}</div>
      <strong>Reference</strong>
      <div style={styles.summaryField}>{selectedRecipeReference}</div>
      <strong>Allergens</strong>
      <TagPicker
        variant="primary"
        selected={selectedRecipeAllergens}
        viewMode
      ></TagPicker>
      <strong>Ingredients</strong>
      <TagPicker
        variant="primary"
        selected={selectedRecipeIngredients}
        viewMode
      ></TagPicker>
    </SlDialog>
  )
}

