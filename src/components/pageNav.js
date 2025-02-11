import { SlTooltip, SlIconButton } from '@shoelace-style/shoelace/dist/react';

const numPages = 10 // arbitrary test value

export default function PageNav({ pageNumber, setPageNumber }) {
  const gotoNextPage = () => setPageNumber(Math.min(numPages - 1, pageNumber + 1))
  const gotoPrevPage = () => setPageNumber(Math.max(0, pageNumber - 1))
  const gotoFirstPage = () => setPageNumber(0)
  const gotoLastPage = () => setPageNumber(numPages - 1)

  return (
    <div class="page-buttons">
      <SlTooltip content="First Page">
        <SlIconButton
          disabled={pageNumber === 0}
          name="chevron-double-left"
          onClick={gotoFirstPage}
          label="First Page"
        />
      </SlTooltip>
      <SlTooltip content="Previous Page">
        <SlIconButton
          disabled={pageNumber === 0}
          name="chevron-left"
          onClick={gotoPrevPage}
          label="Previous Page"
        />
      </SlTooltip>
      {pageNumber + 1}
      <SlTooltip content="Next Page">
        <SlIconButton
          disabled={pageNumber === numPages - 1}
          name="chevron-right"
          onClick={gotoNextPage}
          label="Next Page"
        />
      </SlTooltip>
      <SlTooltip content="Last Page">
        <SlIconButton
          disabled={pageNumber === numPages - 1}
          name="chevron-double-right"
          onClick={gotoLastPage}
          label="Last Page"
        />
      </SlTooltip>
    </div>
  )
}