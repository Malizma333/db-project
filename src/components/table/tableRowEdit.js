import { SlCard, SlTooltip, SlIconButton, SlTag } from '@shoelace-style/shoelace/dist/react';

export default function TableRowEdit() {
  return (
    <SlCard>
      <div class="table-row">
        <div class="table-cell">
          <sl-input value="Recipe Name" />
        </div>
        <div class="table-cell">
          <sl-input value="Author Name" />
        </div>
        <div class="table-cell">
          <SlTag variant="warning" class="allergen-box">
            Allergen 1
            <SlTooltip content="Remove Allergen">
              <SlIconButton name="x" label="Remove Allergen" />
            </SlTooltip>
          </SlTag>
          <SlTag variant="warning" class="allergen-box">
            Allergen 2
            <SlTooltip content="Remove Allergen">
              <SlIconButton name="x" label="Remove Allergen" />
            </SlTooltip>
          </SlTag>
          <SlTooltip content="Add Allergen">
            <SlIconButton name="plus" label="Add Allergen" />
          </SlTooltip>
        </div>
        <div class="table-cell">
          <sl-input value="Example Reference" />
          <sl-input value="http://www.example.com/" />
        </div>
        <div class="table-end">
          <SlTooltip content="Remove Recipe">
            <SlIconButton name="trash" label="Remove Recipe" />
          </SlTooltip>
        </div>
      </div>
    </SlCard>
  )
}