import {
  SlCard,
  SlTooltip,
  SlIconButton,
} from "@shoelace-style/shoelace/dist/react";
import TagPicker from "./tagPicker";
import { COLUMN_MASK, useAppStore } from "../../store";

import { Recipe, removeRecipe } from "../../api/recipe";
import { useQueryClient } from "@tanstack/react-query";
import { useFilterCollection } from "src/api/recipeCollection";
import { useParams } from "react-router";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "10",
    overflowX: "hidden",
  },
  header: {
    fontSize: "large",
    fontWeight: "bold",
    position: "sticky",
    top: "0",
    zIndex: "1",
  },
  row: {
    display: "flex",
    alignItems: "center",
    height: "30px",
    position: "relative",
  },
  cell: {
    alignItems: "center",
    display: "flex",
    flex: "3",
    justifyContent: "start",
    overflow: "auto hidden",
  },
  end: {
    alignItems: "center",
    display: "flex",
    flex: "1",
    justifyContent: "end",
  },
};

function TableRow({
  editMode,
  rowData,
}: {
  editMode: boolean;
  rowData: Recipe;
}) {
  const {
    getColumnVisible,
    setUpdateRecipeView,
    setRecipeSummaryView,
    setSelectedRecipe,
  } = useAppStore();

  const queryClient = useQueryClient();

  function onViewRecipe() {
    setSelectedRecipe(rowData);
    setRecipeSummaryView();
  }

  function onEditRecipe() {
    setSelectedRecipe(rowData);
    setUpdateRecipeView();
  }

  async function onDeleteRecipe() {
    await removeRecipe(rowData.name);
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  }

  return (
    <SlCard style={{ "--border-radius": "0" }}>
      <div style={styles.row}>
        {getColumnVisible(COLUMN_MASK.NAME) && (
          <div style={styles.cell}>{rowData.name}</div>
        )}
        {getColumnVisible(COLUMN_MASK.AUTHOR) && (
          <div style={styles.cell}>{rowData.authors.join(",")}</div>
        )}
        {getColumnVisible(COLUMN_MASK.ALLERGENS) && (
          <div style={styles.cell}>
            <TagPicker
              variant="warning"
              selected={rowData.allergens}
              viewMode
            ></TagPicker>
          </div>
        )}
        {getColumnVisible(COLUMN_MASK.REFERENCE) && (
          <div style={styles.cell}>{rowData.reference}</div>
        )}
        {getColumnVisible(COLUMN_MASK.INGREDIENTS) && (
          <div style={styles.cell}>
            <TagPicker
              variant="primary"
              selected={rowData.ingredients}
              viewMode
            ></TagPicker>
          </div>
        )}
        <div style={styles.end}>
          <SlTooltip content="View Recipe">
            <SlIconButton
              name="eye"
              label="View Recipe"
              onClick={() => onViewRecipe()}
            ></SlIconButton>
          </SlTooltip>
          {editMode && (
            <>
              <SlTooltip content="Edit Recipe">
                <SlIconButton
                  name="pencil"
                  label="Edit Recipe"
                  onClick={() => onEditRecipe()}
                ></SlIconButton>
              </SlTooltip>
              <SlTooltip content="Delete Recipe">
                <SlIconButton
                  name="trash"
                  label="Delete Recipe"
                  onClick={() => {
                    void onDeleteRecipe();
                  }}
                ></SlIconButton>
              </SlTooltip>
            </>
          )}
        </div>
      </div>
    </SlCard>
  );
}

export default function Table({ editMode }: { editMode: boolean }) {
  const {
    page,
    numRowsPerPage,
    getColumnVisible,
    setNewRecipeView,
    setSelectedRecipe,
  } = useAppStore();

  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");

  const { data: pageData } = useFilterCollection({
    collection_id: collectionId,
    recipe_name: "",
    include_allergens: [],
    exclude_allergens: [],
    include_ingredients: [],
    exclude_ingredients: [],
    authors: [],
    view_min: page * numRowsPerPage,
    view_max: (page + 1) * numRowsPerPage,
  });

  function onCreateRecipe() {
    setSelectedRecipe({
      name: "",
      reference: "",
      authors: [],
      allergens: [],
      ingredients: [],
    });
    setNewRecipeView();
  }

  return (
    <div style={styles.root}>
      <SlCard style={{ ...styles.header, "--border-radius": "0" }}>
        <div style={styles.row}>
          {getColumnVisible(COLUMN_MASK.NAME) && (
            <div style={styles.cell}>Recipe Name</div>
          )}
          {getColumnVisible(COLUMN_MASK.AUTHOR) && (
            <div style={styles.cell}>Author</div>
          )}
          {getColumnVisible(COLUMN_MASK.ALLERGENS) && (
            <div style={styles.cell}>Allergens</div>
          )}
          {getColumnVisible(COLUMN_MASK.REFERENCE) && (
            <div style={styles.cell}>Reference</div>
          )}
          {getColumnVisible(COLUMN_MASK.INGREDIENTS) && (
            <div style={styles.cell}>Ingredients</div>
          )}
          <div style={{ ...styles.end, fontSize: "2em" }}>
            {editMode && (
              <SlTooltip content="Create Recipe" placement="left">
                <SlIconButton
                  name="plus"
                  label="Create Recipe"
                  onClick={() => onCreateRecipe()}
                ></SlIconButton>
              </SlTooltip>
            )}
          </div>
        </div>
      </SlCard>
      {pageData !== undefined &&
        pageData.map((row) => {
          return <TableRow editMode={editMode} rowData={row}></TableRow>;
        })}
    </div>
  );
}
