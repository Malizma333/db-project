import { SlCard, SlTag } from '@shoelace-style/shoelace/dist/react';

export default function TableRow({name, author, allergens, reference}) {
  return (
    <SlCard>
      <div class="table-row">
        <div class="table-cell">
          {name}
        </div>
        <div class="table-cell">
          {author}
        </div>
        <div class="table-cell">
          {allergens.map((allergen, index) => {
            return (
              <SlTag key={index} variant="warning">{allergen}</SlTag>
            )
          })}
        </div>
        <div class="table-cell">
          {reference}
        </div>
      </div>
    </SlCard>
  )
}
