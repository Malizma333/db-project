import SlTooltip from "@shoelace-style/shoelace/dist/react/tooltip/index.js";
import SlIconButton from "@shoelace-style/shoelace/dist/react/icon-button/index.js";

import { useQueryClient } from "@tanstack/react-query";

import { useAppStore } from "../../store";
import { useCountRecipesInFilter } from "../../api/recipeCollection";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },
};

export default function PageNav() {
  const {
    page,
    numRowsPerPage,
    filterProps,
    loadedCollectionId,
    gotoFirstPage,
    gotoPrevPage,
    gotoNextPage,
    gotoLastPage,
  } = useAppStore();

  const queryClient = useQueryClient();

  const { data: numRecipesInCollection } = useCountRecipesInFilter({
    ...filterProps,
    collection_id: loadedCollectionId,
  });

  const numPages = Math.ceil((numRecipesInCollection || 0) / numRowsPerPage);

  const onNavigateFirstPage = async () => {
    gotoFirstPage();
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  };

  const onNavigatePrevPage = async () => {
    gotoPrevPage();
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  };

  const onNavigateNextPage = async () => {
    gotoNextPage(numPages);
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  };

  const onNavigateLastPage = async () => {
    gotoLastPage(numPages);
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  };

  return (
    <div style={styles.root}>
      <SlTooltip content="First Page">
        <SlIconButton
          disabled={numPages === 0 || page === 0}
          name="chevron-double-left"
          onClick={() => {
            void onNavigateFirstPage();
          }}
          label="First Page"
        ></SlIconButton>
      </SlTooltip>
      <SlTooltip content="Previous Page">
        <SlIconButton
          disabled={numPages === 0 || page === 0}
          name="chevron-left"
          onClick={() => {
            void onNavigatePrevPage();
          }}
          label="Previous Page"
        ></SlIconButton>
      </SlTooltip>
      {page + 1}
      <SlTooltip content="Next Page">
        <SlIconButton
          disabled={numPages === 0 || page === numPages - 1}
          name="chevron-right"
          onClick={() => {
            void onNavigateNextPage();
          }}
          label="Next Page"
        ></SlIconButton>
      </SlTooltip>
      <SlTooltip content="Last Page">
        <SlIconButton
          disabled={numPages === 0 || page === numPages - 1}
          name="chevron-double-right"
          onClick={() => {
            void onNavigateLastPage();
          }}
          label="Last Page"
        ></SlIconButton>
      </SlTooltip>
    </div>
  );
}
