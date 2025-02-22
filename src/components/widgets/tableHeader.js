import { SlCard, SlTooltip, SlIconButton } from '@shoelace-style/shoelace/dist/react';

export default function TableHeader({ editMode }) {
  return (
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
  )
}