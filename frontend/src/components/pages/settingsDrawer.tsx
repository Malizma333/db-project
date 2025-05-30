import SlInput from "@shoelace-style/shoelace/dist/react/input/index.js";
import SlButton from "@shoelace-style/shoelace/dist/react/button/index.js";
import SlDrawer from "@shoelace-style/shoelace/dist/react/drawer/index.js";
import SlCheckbox from "@shoelace-style/shoelace/dist/react/checkbox/index.js";
import { SlHideEvent } from "@shoelace-style/shoelace";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";

import { useQueryClient } from "@tanstack/react-query";

import TagPicker from "../widgets/tagPicker";
import { useAppStore, VIEW, COLUMN_MASK } from "../../store";
import {
  useCollectionAllergens,
  useCollectionAuthors,
  useCollectionIngredients,
} from "../../api/recipeCollection";

const styles = {
  settingContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1em",
  },
  filterContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
};

function FilterPicker({
  columnName,
  included,
  excluded,
  setIncluded,
  setExcluded,
  columnOptions = [],
}: {
  columnName: string;
  included: string[];
  excluded?: string[];
  setIncluded: (v: string[]) => void;
  setExcluded?: (v: string[]) => void;
  columnOptions?: string[];
}) {
  return (
    <div style={styles.settingContainer}>
      <div style={styles.filterContainer}>
        Include {columnName}
        <TagPicker
          variant="success"
          available={columnOptions.filter(
            (tag) => excluded !== undefined && !excluded.includes(tag),
          )}
          selected={included}
          setSelected={setIncluded}
        ></TagPicker>
      </div>
      {excluded !== undefined && (
        <div style={styles.filterContainer}>
          Exclude {columnName}
          <TagPicker
            variant="danger"
            available={columnOptions.filter((tag) => !included.includes(tag))}
            selected={excluded}
            setSelected={setExcluded}
          ></TagPicker>
        </div>
      )}
    </div>
  );
}

export default function SettingsDrawer() {
  const {
    view,
    numRowsPerPage,
    includeAllergensFilter,
    excludeAllergensFilter,
    includeAuthorsFilter,
    includeIngredientsFilter,
    excludeIngredientsFilter,
    loadedCollectionId,
    getColumnVisible,
    toggleColumn,
    setMainView,
    setRowsPerPage,
    gotoFirstPage,
    setIncludeAllergensFilter,
    setExcludeAllergensFilter,
    setIncludeAuthorsFilter,
    setIncludeIngredientsFilter,
    setExcludeIngredientsFilter,
  } = useAppStore();

  const queryClient = useQueryClient();

  const { data: allAuthors } = useCollectionAuthors(loadedCollectionId);
  const { data: allAllergens } = useCollectionAllergens(loadedCollectionId);
  const { data: allIngredients } = useCollectionIngredients(loadedCollectionId);

  const minRowsPerPage = 1;
  const maxRowsPerPage = 20;

  async function onSetRowsPerPage(value: number) {
    if (isNaN(value)) {
      return;
    }

    setRowsPerPage(Math.min(maxRowsPerPage, Math.max(minRowsPerPage, value)));
    gotoFirstPage();
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
    await queryClient.invalidateQueries({
      queryKey: ["filterCollectionCount"],
    });
  }

  function onHide(e: SlHideEvent) {
    // Prevent event bubbling caused by inner menu elements being closed
    if (e.eventPhase !== Event.AT_TARGET) {
      e.preventDefault();
      return;
    }

    setMainView();
  }

  async function onApplySearch() {
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  }

  return (
    <SlDrawer
      class="drawer-placement-top"
      open={view === VIEW.SEARCH_SETTINGS}
      onSlHide={(e) => onHide(e)}
      placement="top"
      label="Search Settings"
    >
      <div style={styles.settingContainer}>
        <div style={styles.filterContainer}>
          Recipes Per Page
          <SlInput
            type="number"
            value={numRowsPerPage.toString()}
            min={minRowsPerPage}
            max={maxRowsPerPage}
            onSlBlur={(e) => {
              void onSetRowsPerPage(
                parseInt((e.target as SlInputElement).value),
              );
            }}
          ></SlInput>
        </div>
      </div>
      <div style={styles.settingContainer}>
        <div style={styles.filterContainer}>
          Visible Columns
          <SlCheckbox
            size="small"
            checked={getColumnVisible(COLUMN_MASK.NAME)}
            onSlChange={() => toggleColumn(COLUMN_MASK.NAME)}
          >
            Recipe Name
          </SlCheckbox>
          <SlCheckbox
            size="small"
            checked={getColumnVisible(COLUMN_MASK.AUTHOR)}
            onSlChange={() => toggleColumn(COLUMN_MASK.AUTHOR)}
          >
            Author
          </SlCheckbox>
          <SlCheckbox
            size="small"
            checked={getColumnVisible(COLUMN_MASK.ALLERGENS)}
            onSlChange={() => toggleColumn(COLUMN_MASK.ALLERGENS)}
          >
            Allergens
          </SlCheckbox>
          <SlCheckbox
            size="small"
            checked={getColumnVisible(COLUMN_MASK.REFERENCE)}
            onSlChange={() => toggleColumn(COLUMN_MASK.REFERENCE)}
          >
            Reference
          </SlCheckbox>
          <SlCheckbox
            size="small"
            checked={getColumnVisible(COLUMN_MASK.INGREDIENTS)}
            onSlChange={() => toggleColumn(COLUMN_MASK.INGREDIENTS)}
          >
            Ingredients
          </SlCheckbox>
        </div>
      </div>
      <FilterPicker
        columnName={"Author"}
        included={includeAuthorsFilter}
        setIncluded={setIncludeAuthorsFilter}
        columnOptions={allAuthors}
      ></FilterPicker>
      <FilterPicker
        columnName={"Allergens"}
        included={includeAllergensFilter}
        excluded={excludeAllergensFilter}
        setIncluded={setIncludeAllergensFilter}
        setExcluded={setExcludeAllergensFilter}
        columnOptions={allAllergens}
      ></FilterPicker>
      <FilterPicker
        columnName={"Ingredients"}
        included={includeIngredientsFilter}
        excluded={excludeIngredientsFilter}
        setIncluded={setIncludeIngredientsFilter}
        setExcluded={setExcludeIngredientsFilter}
        columnOptions={allIngredients}
      ></FilterPicker>
      <SlButton
        onClick={() => {
          void onApplySearch();
        }}
      >
        Apply
      </SlButton>
    </SlDrawer>
  );
}
