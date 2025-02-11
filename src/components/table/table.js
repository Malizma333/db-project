// import { SlTooltip, SlIconButton } from '@shoelace-style/shoelace/dist/react';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import TableRowEdit from './tableRowEdit';

export default function Table() {
  return (
    <div class="table-contents">
      <TableHeader />
      <TableRow />
      <TableRowEdit />
      {/* <div class="table-row">
        <SlTooltip content="Create New Recipe">
          <SlIconButton name="plus" label="Create New Recipe" class="add-recipe-button" />
        </SlTooltip>
      </div> */}
    </div>
  )
}
