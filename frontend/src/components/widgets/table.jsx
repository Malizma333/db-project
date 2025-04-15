import { SlCard, SlTooltip, SlIconButton } from '@shoelace-style/shoelace/dist/react';
import TagPicker from './tagPicker';
import { COLUMN_MASK, useAppStore } from '../../store';

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "10",
    overflowX: "hidden",
  },
  header: {
    fontSize: "large",
    fontWeight: "bold",
    position: "sticky",
    top: "0",
    zIndex: "1",
  },
  row: {
    display: "flex",
    alignItems: "center",
    height: "30px",
    position: "relative",
  },
  cell: {
    alignItems: "center",
    display: "flex",
    flex: "3",
    justifyContent: "start",
    overflow: "auto hidden",
  },
  end: {
    alignItems: "center",
    display: "flex",
    flex: "1",
    justifyContent: "end",
  },
}

function TableRow({ setRecipeData, editMode, id, rowData }) {
  const {
    getColumnVisible,
    setUpdateRecipeView,
    setRecipeSummaryView,
    setActiveRecipeId,
  } = useAppStore();

  function onViewRecipe() {
    setRecipeData.setRecipeName(rowData.recipeName);
    setRecipeData.setAuthors(rowData.authors);
    setRecipeData.setReference(rowData.reference);
    setRecipeData.setAllergens(rowData.allergens);
    setRecipeData.setIngredients(rowData.ingredients);
    setRecipeSummaryView();
    setActiveRecipeId(id);
  }

  function onEditRecipe() {
    setRecipeData.setRecipeName(rowData.recipeName);
    setRecipeData.setAuthors(rowData.authors);
    setRecipeData.setReference(rowData.reference);
    setRecipeData.setAllergens(rowData.allergens);
    setRecipeData.setIngredients(rowData.ingredients);
    setUpdateRecipeView();
    setActiveRecipeId(id);
  }

  return (
    <SlCard style={{"--border-radius": "0"}}>
      <div style={styles.row}>
        {getColumnVisible(COLUMN_MASK.NAME) && <div style={styles.cell}>
          {rowData.recipeName}
        </div>}
        {getColumnVisible(COLUMN_MASK.AUTHOR) && <div style={styles.cell}>
          {rowData.authors.join(",")}
        </div>}
        {getColumnVisible(COLUMN_MASK.ALLERGENS) && <div style={styles.cell}>
          <TagPicker variant="warning" selected={rowData.allergens} viewMode></TagPicker>
        </div>}
        {getColumnVisible(COLUMN_MASK.REFERENCE) && <div style={styles.cell}>
          {rowData.reference}
        </div>}
        {getColumnVisible(COLUMN_MASK.INGREDIENTS) && <div style={styles.cell}>
          <TagPicker variant="primary" selected={rowData.ingredients} viewMode></TagPicker>
        </div>}
        <div style={styles.end}>
            <SlTooltip content="View Recipe">
              <SlIconButton name="eye" label="View Recipe" onClick={() => onViewRecipe()}></SlIconButton>
            </SlTooltip>
          {editMode && <>
            <SlTooltip content="Edit Recipe">
              <SlIconButton name="pencil" label="Edit Recipe" onClick={() => onEditRecipe()}></SlIconButton>
            </SlTooltip>
            <SlTooltip content="Delete Recipe">
              <SlIconButton name="trash" label="Delete Recipe"></SlIconButton>
            </SlTooltip>
          </>}
        </div>
      </div>
    </SlCard>
  )
}

export default function Table({ pageData, setRecipeData }) {
  const { editMode, getColumnVisible, setNewRecipeView } = useAppStore();

  function onCreateRecipe() {
    setRecipeData.setRecipeName("");
    setRecipeData.setAuthors([]);
    setRecipeData.setReference("");
    setRecipeData.setAllergens([]);
    setRecipeData.setIngredients([]);
    setNewRecipeView();
  }

  return (
    <div style={styles.root}>
      <SlCard style={{...styles.header, "--border-radius": "0"}}>
        <div style={styles.row}>
          {getColumnVisible(COLUMN_MASK.NAME) && <div style={styles.cell}>Recipe Name</div>}
          {getColumnVisible(COLUMN_MASK.AUTHOR) && <div style={styles.cell}>Author</div>}
          {getColumnVisible(COLUMN_MASK.ALLERGENS) && <div style={styles.cell}>Allergens</div>}
          {getColumnVisible(COLUMN_MASK.REFERENCE) && <div style={styles.cell}>Reference</div>}
          {getColumnVisible(COLUMN_MASK.INGREDIENTS) && <div style={styles.cell}>Ingredients</div>}
          <div style={{...styles.end, fontSize: "2em"}}>
            {editMode &&
              <SlTooltip content="Create Recipe" placement="left">
                <SlIconButton name="plus" label="Create Recipe" onClick={() => onCreateRecipe()}></SlIconButton>
              </SlTooltip>
            }
          </div>
        </div>
      </SlCard>
      {pageData.map((row, id) => {
        return <TableRow setRecipeData={setRecipeData} editMode={editMode} id={id} rowData={row}></TableRow>;
      })}
    </div>
  )
}
