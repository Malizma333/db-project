import { SlTooltip, SlIconButton } from "@shoelace-style/shoelace/dist/react";
import { useAppStore } from "../../store";
import { useCountRecipesInFilter } from "../../api/recipeCollection";
import { useParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },
};

// For some reason, the disabled property causes a second re-render that lit complains about in the console
export default function PageNav() {
  const {
    page,
    numRowsPerPage,
    filterProps,
    gotoFirstPage,
    gotoPrevPage,
    gotoNextPage,
    gotoLastPage,
  } = useAppStore();

  const queryClient = useQueryClient();
  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");

  const { data: numRecipesInCollection } = useCountRecipesInFilter({
    ...filterProps,
    collection_id: collectionId,
  });

  const numPages = Math.ceil((numRecipesInCollection || 0) / numRowsPerPage);

  const onNavigateFirstPage = async () => {
    gotoFirstPage();
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  };

  const onNavigatePrevPage = async () => {
    gotoPrevPage();
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  };

  const onNavigateNextPage = async () => {
    gotoNextPage(numPages);
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  };

  const onNavigateLastPage = async () => {
    gotoLastPage(numPages);
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  };

  return numPages == 0 ? (
    <div style={styles.root}></div>
  ) : (
    <div style={styles.root}>
      <SlTooltip content="First Page">
        <SlIconButton
          disabled={page === 0}
          name="chevron-double-left"
          onClick={() => {
            void onNavigateFirstPage();
          }}
          label="First Page"
        ></SlIconButton>
      </SlTooltip>
      <SlTooltip content="Previous Page">
        <SlIconButton
          disabled={page === 0}
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
          disabled={page === numPages - 1}
          name="chevron-right"
          onClick={() => {
            void onNavigateNextPage();
          }}
          label="Next Page"
        ></SlIconButton>
      </SlTooltip>
      <SlTooltip content="Last Page">
        <SlIconButton
          disabled={page === numPages - 1}
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
