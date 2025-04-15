import { SlDialog } from '@shoelace-style/shoelace/dist/react';
import { useAppStore, VIEW } from '../../store';
import TagPicker from '../widgets/tagPicker';

const styles = {
  summaryField: {
    marginBottom: "1em",
  },
}

export default function RecipeSummary({ recipeData }) {
  const { view, setMainView } = useAppStore();

  function onCloseDialog() {
    setMainView();
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.RECIPE_SUMMARY}
      onSlHide={(e) => onCloseDialog(e)}
      label={recipeData.recipeName}
    >
      <strong>Author(s)</strong>
      <div style={styles.summaryField}>{recipeData.authors.join(",")}</div>
      <strong>Reference</strong>
      <div style={styles.summaryField}>{recipeData.reference}</div>
      <strong>Allergens</strong>
      <TagPicker
        variant="primary"
        selected={recipeData.allergens}
        viewMode
      ></TagPicker>
      <strong>Ingredients</strong>
      <TagPicker
        variant="primary"
        selected={recipeData.ingredients}
        viewMode
      ></TagPicker>
    </SlDialog>
  )
}

