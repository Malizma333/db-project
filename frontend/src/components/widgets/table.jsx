import { SlCard, SlTooltip, SlIconButton, SlTag, SlInput } from '@shoelace-style/shoelace/dist/react';
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
  const { getColumnVisible } = useAppStore();

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
        <div style={styles.end}></div>
      </div>
    </SlCard>
  )
}

function TableRowEdit({ name, author, allergens, reference, ingredients }) {
  const { getColumnVisible } = useAppStore();

  return (
    <SlCard style={{"--border-radius": "0"}}>
      <div style={styles.row}>
        {getColumnVisible(COLUMN_MASK.NAME) && <div style={styles.cell}>
          <SlInput value={name} placeholder="Recipe Name"></SlInput>
        </div>}
        {getColumnVisible(COLUMN_MASK.AUTHOR) && <div style={styles.cell}>
          <SlInput value={author} placeholder="Author Name"></SlInput>
        </div>}
        {getColumnVisible(COLUMN_MASK.ALLERGENS) && <div style={styles.cell}>
          <TagPicker variant="warning" available={DB_DATA.allAllergens} selected={allergens} setSelected={(val) => console.log(val)}></TagPicker>
        </div>}
        {getColumnVisible(COLUMN_MASK.REFERENCE) && <div style={styles.cell}>
          <SlInput value={reference} placeholder="Reference"></SlInput>
        </div>}
        {getColumnVisible(COLUMN_MASK.INGREDIENTS) && <div style={styles.cell}>
          <TagPicker variant="primary" available={DB_DATA.allIngredients} selected={ingredients} setSelected={(val) => console.log(val)}></TagPicker>
        </div>}
        <div style={styles.end}>
          <SlIconButton name="trash" label="Delete Recipe"></SlIconButton>
        </div>
      </div>
    </SlCard>
  )
}

export default function Table({ pageData }) {
  const { editMode, getColumnVisible } = useAppStore();

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
            {editMode && <SlIconButton name="plus" label="New Recipe"></SlIconButton>}
          </div>
        </div>
      </SlCard>
      {pageData.map((row) => {
        return editMode ? <TableRowEdit {...row}></TableRowEdit> : <TableRow {...row}></TableRow>
      })}
    </div>
  )
}
