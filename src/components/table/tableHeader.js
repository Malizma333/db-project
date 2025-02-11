import { SlCard } from '@shoelace-style/shoelace/dist/react';

export default function TableHeader() {
  return (
    <SlCard class="table-header">
      <div class="table-row">
        <div class="table-cell">Recipe</div>
        <div class="table-cell">Author</div>
        <div class="table-cell">Allergens</div>
        <div class="table-cell">Reference</div>
      </div>
    </SlCard>
  )
}