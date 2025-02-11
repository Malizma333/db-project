import { SlCard, SlTooltip, SlIconButton, SlTag } from '@shoelace-style/shoelace/dist/react';

export default function Table() {
  return (
    <div class="table-contents">
      <SlCard class="table-header">
        <div class="table-row">
          <div class="table-cell">Recipe</div>
          <div class="table-cell">Author</div>
          <div class="table-cell">Allergens</div>
          <div class="table-cell">Reference</div>
        </div>
      </SlCard>
      <SlCard>
        <div class="table-row">
          <div class="table-cell">
            Recipe Name
          </div>
          <div class="table-cell">
            Author Name
          </div>
          <div class="table-cell">
            <SlTag variant="warning">Allergen 1</SlTag>
            <SlTag variant="warning">Allergen 2</SlTag>
          </div>
          <div class="table-cell">
            <a href="http://www.example.com/" target="_blank" rel="noreferrer">
              Example Reference
            </a>
          </div>
        </div>
      </SlCard>
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
      <SlCard>
        <div class="table-row">
          <div class="table-cell">
            <sl-input placeholder="Recipe" />
          </div>
          <div class="table-cell">
            <sl-input placeholder="Author" />
          </div>
          <div class="table-cell">
            <SlTooltip content="Add Allergen">
              <SlIconButton name="plus" label="Add Allergen" />
            </SlTooltip>
          </div>
          <div class="table-cell">
            <sl-input placeholder="Resource Label" />
            <sl-input placeholder="Resource Link" />
          </div>
          <div class="table-end">
            <SlTooltip content="Remove Recipe">
              <SlIconButton name="trash" label="Remove Recipe" />
            </SlTooltip>
          </div>
        </div>
      </SlCard>
      <div class="table-row">
        <SlTooltip content="Create New Recipe">
          <SlIconButton name="plus" label="Create New Recipe" class="add-recipe-button" />
        </SlTooltip>
      </div>
    </div>
  )
}
