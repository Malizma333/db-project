import { SlTooltip, SlIconButton } from '@shoelace-style/shoelace/dist/react';
import { useAppStore } from '../../store';
import { useRecipeCount } from '../../api/recipeCollection';
import { useParams } from 'react-router';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  }
}

// For some reason, the disabled property causes a second re-render that lit complains about in the console
export default function PageNav() {
  const { page, numRowsPerPage, gotoFirstPage, gotoPrevPage, gotoNextPage, gotoLastPage } = useAppStore();

  const params = useParams();

  const { data: numRecipesInCollection } = useRecipeCount(params["id"]);

  const numPages = Math.ceil((numRecipesInCollection || 0) / numRowsPerPage);

  return numPages == 0 ? <div style={styles.root}></div> : (
    <div style={styles.root}>
      <SlTooltip content="First Page">
        <SlIconButton
          disabled={page === 0}
          name="chevron-double-left"
          onClick={gotoFirstPage}
          label="First Page"
        ></SlIconButton>
      </SlTooltip>
      <SlTooltip content="Previous Page">
        <SlIconButton
          disabled={page === 0}
          name="chevron-left"
          onClick={gotoPrevPage}
          label="Previous Page"
        ></SlIconButton>
      </SlTooltip>
      {page + 1}
      <SlTooltip content="Next Page">
        <SlIconButton
          disabled={page === numPages - 1}
          name="chevron-right"
          onClick={() => gotoNextPage(numPages)}
          label="Next Page"
        ></SlIconButton>
      </SlTooltip>
      <SlTooltip content="Last Page">
        <SlIconButton
          disabled={page === numPages - 1}
          name="chevron-double-right"
          onClick={() => gotoLastPage(numPages)}
          label="Last Page"
        ></SlIconButton>
      </SlTooltip>
    </div>
  )
}