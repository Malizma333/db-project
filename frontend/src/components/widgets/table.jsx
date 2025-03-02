import { SlCard, SlTooltip, SlIconButton, SlTag, SlInput, SlInclude } from '@shoelace-style/shoelace/dist/react';
import TagPicker from './tagPicker';
import { DB_DATA } from '../../api/temp';
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

function TableRow({ name, author, allergens, reference, ingredients }) {
  const { editMode, getColumnVisible, setUpdateRecipeView, setRecipeSummaryView } = useAppStore();

  return (
    <SlCard style={{"--border-radius": "0"}}>
      <div style={styles.row}>
        {getColumnVisible(COLUMN_MASK.NAME) && <div style={styles.cell}>
          {name}
        </div>}
        {getColumnVisible(COLUMN_MASK.AUTHOR) && <div style={styles.cell}>
          {author}
        </div>}
        {getColumnVisible(COLUMN_MASK.ALLERGENS) && <div style={styles.cell}>
          <TagPicker variant="warning" selected={allergens} viewMode></TagPicker>
        </div>}
        {getColumnVisible(COLUMN_MASK.REFERENCE) && <div style={styles.cell}>
          {reference}
        </div>}
        {getColumnVisible(COLUMN_MASK.INGREDIENTS) && <div style={styles.cell}>
          <TagPicker variant="primary" selected={ingredients} viewMode></TagPicker>
        </div>}
        <div style={styles.end}>
          {editMode && <>
            <SlTooltip content="View Recipe">
              <SlIconButton name="eye" label="View Recipe" onClick={() => setRecipeSummaryView()}></SlIconButton>
            </SlTooltip>
            <SlTooltip content="Edit Recipe">
              <SlIconButton name="pencil" label="Edit Recipe" onClick={() => setUpdateRecipeView()}></SlIconButton>
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

export default function Table({ pageData }) {
  const { editMode, getColumnVisible, setNewRecipeView } = useAppStore();

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
                <SlIconButton name="plus" label="Create Recipe" onClick={() => setNewRecipeView()}></SlIconButton>
              </SlTooltip>
            }
          </div>
        </div>
      </SlCard>
      {pageData.map((row) => {
        return <TableRow editMode={editMode} {...row}></TableRow>;
      })}
    </div>
  )
}
