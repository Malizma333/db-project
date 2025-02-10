import './style';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import { SlCard, SlDialog, SlDrawer, SlIconButton, SlInput, SlTag, SlTooltip } from '@shoelace-style/shoelace/dist/react';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { useState } from 'preact/hooks';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/');

export default function App() {
  const [settingsOpen, setOpen] = useState(false);
  const [dialogOpen, setDiaOpen] = useState(false);

  return (
    <div class="sl-theme-dark">
      <SlDrawer open={settingsOpen} onSlAfterHide={() => setOpen(false)} label="Settings" placement="top" class="drawer-placement-top">
        These are some settings
      </SlDrawer>
      <SlDialog open={dialogOpen} onSlAfterHide={() => setDiaOpen(false)} label="Random Recipe" class="dialog-overview">
        Recipe Name
      </SlDialog>
      <div class="search-bar">
        <SlInput type="text" placeholder="Search" />
        <SlIconButton name="search" label="Run Search" />
        <SlIconButton name="pencil" label="Edit Mode" />
        <SlIconButton name="gear" label="Search Settings" onClick={() => setOpen(true)} />
        <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => setDiaOpen(true)} />
      </div>
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
      <div class="page-buttons">
        <SlTooltip content="First Page">
          <SlIconButton disabled name="chevron-double-left" label="First Page" />
        </SlTooltip>
        <SlTooltip content="Previous Page">
          <SlIconButton disabled name="chevron-left" label="Previous Page" />
        </SlTooltip>
        1
        <SlTooltip content="Next Page">
          <SlIconButton name="chevron-right" label="Next Page" />
        </SlTooltip>
        <SlTooltip content="Last Page">
          <SlIconButton name="chevron-double-right" label="Last Page" />
        </SlTooltip>
      </div>
    </div>
  );
}
