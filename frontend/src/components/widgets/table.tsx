import SlTooltip from "@shoelace-style/shoelace/dist/react/tooltip/index.js";
import SlIconButton from "@shoelace-style/shoelace/dist/react/icon-button/index.js";
import SlCard from "@shoelace-style/shoelace/dist/react/card/index.js";
import SlSkeleton from "@shoelace-style/shoelace/dist/react/skeleton/index.js";

import { useQueryClient } from "@tanstack/react-query";

import TagPicker from "./tagPicker";
import { COLUMN_MASK, useAppStore } from "../../store";
import { Recipe, removeRecipe } from "../../api/recipe";
import { useFilterCollection } from "src/api/recipeCollection";

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

function TemplateRow({ editMode }: { editMode: boolean }) {
  const { getColumnVisible } = useAppStore();

  return (
    <SlCard style={{ "--border-radius": "0" }}>
      <div style={styles.row}>
        {getColumnVisible(COLUMN_MASK.NAME) && (
          <div style={styles.cell}>
            <SlSkeleton style={{ width: "10em", height: "1em" }}></SlSkeleton>
          </div>
        )}
        {getColumnVisible(COLUMN_MASK.AUTHOR) && (
          <div style={styles.cell}>
            <SlSkeleton style={{ width: "8em", height: "1em" }}></SlSkeleton>
          </div>
        )}
        {getColumnVisible(COLUMN_MASK.ALLERGENS) && (
          <div style={styles.cell}>
            {Array(2)
              .fill(0)
              .map(() => (
                <SlSkeleton
                  style={{ width: "5em", height: "1em", marginLeft: "1em" }}
                ></SlSkeleton>
              ))}
          </div>
        )}
        {getColumnVisible(COLUMN_MASK.REFERENCE) && (
          <div style={styles.cell}>
            <SlSkeleton style={{ width: "14em", height: "1em" }}></SlSkeleton>
          </div>
        )}
        {getColumnVisible(COLUMN_MASK.INGREDIENTS) && (
          <div style={styles.cell}>
            {Array(3)
              .fill(0)
              .map(() => (
                <SlSkeleton
                  style={{ width: "4em", height: "1em", marginLeft: "1em" }}
                ></SlSkeleton>
              ))}
          </div>
        )}
        <div style={styles.end}>
          <SlSkeleton style={{ width: "1.5em", height: "1.5em" }}></SlSkeleton>
          {editMode && (
            <>
              <SlSkeleton
                style={{ width: "1.5em", height: "1.5em", marginLeft: "0.5em" }}
              ></SlSkeleton>
              <SlSkeleton
                style={{ width: "1.5em", height: "1.5em", marginLeft: "0.5em" }}
              ></SlSkeleton>
            </>
          )}
        </div>
      </div>
    </SlCard>
  );
}

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
    await queryClient.invalidateQueries({
      queryKey: ["filterCollectionCount"],
    });
    await queryClient.invalidateQueries({
      queryKey: ["recipeCount"],
    });
  }

  return (
    <SlCard style={{ "--border-radius": "0" }}>
      {rowData ? (
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
      ) : (
        <div style={styles.row}></div>
      )}
    </SlCard>
  );
}

export default function Table({ editMode }: { editMode: boolean }) {
  const {
    page,
    numRowsPerPage,
    filterProps,
    loadedCollectionId,
    getColumnVisible,
    setNewRecipeView,
    setSelectedRecipe,
  } = useAppStore();

  const { data: pageData, isFetching } = useFilterCollection({
    ...filterProps,
    collection_id: loadedCollectionId,
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
      {Array(numRowsPerPage)
        .fill(0)
        .map((_, i) => {
          if (!isFetching && pageData !== undefined) {
            return (
              <TableRow editMode={editMode} rowData={pageData[i]}></TableRow>
            );
          } else {
            return <TemplateRow editMode={editMode}></TemplateRow>;
          }
        })}
    </div>
  );
}
