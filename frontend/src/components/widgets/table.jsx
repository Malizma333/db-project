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
    alignItems: "start",
    display: "flex",
    flex: "1",
    justifyContent: "start",
  },
  end: {
    position: "absolute",
    right: "0",
  },
}

function TableRow({name, author, allergens, reference}) {
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
          {allergens.map((allergen, index) => {
            return (
              <SlTag key={index} variant="warning" size="small">
                {allergen}
              </SlTag>
            )
          })}
        </div>}
        {getColumnVisible(COLUMN_MASK.REFERENCE) && <div style={styles.cell}>
          {reference}
        </div>}
      </div>
    </SlCard>
  )
}

function TableRowEdit({name, author, allergens, reference}) {
  const { getColumnVisible } = useAppStore();

  return (
    <SlCard style={{"--border-radius": "0"}}>
      <div style={styles.row}>
        {getColumnVisible(COLUMN_MASK.NAME) && <div style={styles.cell}>
          <SlInput value={name} placeholder="Recipe Name" />
        </div>}
        {getColumnVisible(COLUMN_MASK.AUTHOR) && <div style={styles.cell}>
          <SlInput value={author} placeholder="Author Name" />
        </div>}
        {getColumnVisible(COLUMN_MASK.ALLERGENS) && <div style={styles.cell}>
          <TagPicker variant="warning" available={DB_DATA.allAllergens} selected={allergens} setSelected={(val) => console.log(val)}/>
        </div>}
        {getColumnVisible(COLUMN_MASK.REFERENCE) &&<div style={styles.cell}>
          <SlInput value={reference} placeholder="Reference" />
        </div>}
        <div style={styles.end}>
          <SlTooltip content="Remove Recipe">
            <SlIconButton name="trash" label="Remove Recipe" />
          </SlTooltip>
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
          {editMode && <div style={{...styles.end, fontSize: "2em"}}>
            <SlTooltip content="Create Recipe">
              <SlIconButton name="plus" label="Create Recipe" />
            </SlTooltip>
          </div>}
        </div>
      </SlCard>
      {pageData.map((row) => {
        return editMode ?
          <TableRowEdit name={row.name} author={row.author} allergens={row.allergens} reference={row.reference} /> :
          <TableRow name={row.name} author={row.author} allergens={row.allergens} reference={row.reference} />
      })}
    </div>
  )
}
