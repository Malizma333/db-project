import TableHeader from './tableHeader';
import TableRow from './tableRow';
import TableRowEdit from './tableRowEdit';

export default function Table({ editMode, pageData }) {
  return (
    <div class="table-contents">
      <TableHeader editMode={editMode} />
      {pageData.map((row) => {
        return editMode ?
          <TableRowEdit name={row.name} author={row.author} allergens={row.allergens} reference={row.reference} /> :
          <TableRow name={row.name} author={row.author} allergens={row.allergens} reference={row.reference} />
      })}
    </div>
  )
}
