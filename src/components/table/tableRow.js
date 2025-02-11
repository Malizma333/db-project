import { SlCard, SlTag } from '@shoelace-style/shoelace/dist/react';

export default function TableRow() {
  return (
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
  )
}
