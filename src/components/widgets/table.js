import TableRow from './tableRow';
import TableRowEdit from './tableRowEdit';
import { SlCard, SlTooltip, SlIconButton } from '@shoelace-style/shoelace/dist/react';

export default function Table({ editMode, pageData }) {
  return (
    <div class="table-contents">
      <SlCard class="table-header">
        <div class="table-row">
          <div class="table-cell">Recipe</div>
          <div class="table-cell">Author</div>
          <div class="table-cell">Allergens</div>
          <div class="table-cell">Reference</div>
          {editMode && <div class="table-end add-recipe-button">
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
