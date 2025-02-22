import { SlCard, SlTooltip, SlIconButton, SlTag, SlInput } from '@shoelace-style/shoelace/dist/react';

export default function TableRowEdit({name, author, allergens, reference}) {
  return (
    <SlCard>
      <div class="table-row">
        <div class="table-cell">
          <SlInput value={name} placeholder="Recipe Name" />
        </div>
        <div class="table-cell">
          <SlInput value={author} placeholder="Author Name" />
        </div>
        <div class="table-cell">
          {allergens.map((allergen, index) => {
            return (
              <SlTag key={index} variant="warning" class="allergen-box">
                {allergen}
                <SlTooltip content="Remove Allergen">
                  <SlIconButton name="x" label="Remove Allergen" />
                </SlTooltip>
              </SlTag>
            )
          })}
          <SlTooltip content="Add Allergen">
            <SlIconButton name="plus" label="Add Allergen" />
          </SlTooltip>
        </div>
        <div class="table-cell">
          <SlInput value={reference} placeholder="Reference" />
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