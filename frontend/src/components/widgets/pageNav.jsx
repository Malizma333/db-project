import { SlTooltip, SlIconButton } from '@shoelace-style/shoelace/dist/react';
import { useAppStore } from '../../store';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  }
}

export default function PageNav() {
  const { page, numPages, gotoFirstPage, gotoPrevPage, gotoNextPage, gotoLastPage } = useAppStore();

  return (
    <div style={styles.root}>
      <SlTooltip content="First Page">
        <SlIconButton
          disabled={page === 0}
          name="chevron-double-left"
          onClick={gotoFirstPage}
          label="First Page"
        />
      </SlTooltip>
      <SlTooltip content="Previous Page">
        <SlIconButton
          disabled={page === 0}
          name="chevron-left"
          onClick={gotoPrevPage}
          label="Previous Page"
        />
      </SlTooltip>
      {page + 1}
      <SlTooltip content="Next Page">
        <SlIconButton
          disabled={page === numPages - 1}
          name="chevron-right"
          onClick={gotoNextPage}
          label="Next Page"
        />
      </SlTooltip>
      <SlTooltip content="Last Page">
        <SlIconButton
          disabled={page === numPages - 1}
          name="chevron-double-right"
          onClick={gotoLastPage}
          label="Last Page"
        />
      </SlTooltip>
    </div>
  )
}