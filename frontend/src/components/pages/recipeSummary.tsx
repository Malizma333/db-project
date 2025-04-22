import SlDialog from "@shoelace-style/shoelace/dist/react/dialog/index.js";
import { useAppStore, VIEW } from "../../store";
import TagPicker from "../widgets/tagPicker";

const styles = {
  summaryField: {
    marginBottom: "1em",
  },
};

export default function RecipeSummary() {
  const { view, setMainView, selectedRecipe } = useAppStore();

  function onCloseDialog() {
    setMainView();
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.RECIPE_SUMMARY}
      onSlHide={() => onCloseDialog()}
      label={selectedRecipe.name}
    >
      <strong>Author(s)</strong>
      <div style={styles.summaryField}>{selectedRecipe.authors.join(",")}</div>
      <strong>Reference</strong>
      <div style={styles.summaryField}>{selectedRecipe.reference}</div>
      <strong>Allergens</strong>
      <TagPicker
        variant="primary"
        selected={selectedRecipe.allergens}
        viewMode
      ></TagPicker>
      <strong>Ingredients</strong>
      <TagPicker
        variant="primary"
        selected={selectedRecipe.ingredients}
        viewMode
      ></TagPicker>
    </SlDialog>
  );
}
