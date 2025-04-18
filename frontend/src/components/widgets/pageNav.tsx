import { SlTooltip, SlIconButton } from "@shoelace-style/shoelace/dist/react";
import { useAppStore } from "../../store";
import { useRecipeCount } from "../../api/recipeCollection";
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
    gotoFirstPage,
    gotoPrevPage,
    gotoNextPage,
    gotoLastPage,
  } = useAppStore();

  const queryClient = useQueryClient();
  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");

  const { data: numRecipesInCollection } = useRecipeCount(collectionId);

  const numPages = Math.ceil((numRecipesInCollection || 0) / numRowsPerPage);

  const onNavigateFirstPage = async () => {
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
    gotoFirstPage();
  };

  const onNavigatePrevPage = async () => {
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
    gotoPrevPage();
  };

  const onNavigateNextPage = async () => {
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
    gotoNextPage(numPages);
  };

  const onNavigateLastPage = async () => {
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
    gotoLastPage(numPages);
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
