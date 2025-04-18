import {
  SlButton,
  SlCheckbox,
  SlDrawer,
  SlInput,
} from "@shoelace-style/shoelace/dist/react";
import TagPicker from "../widgets/tagPicker";
import { useState } from "preact/hooks";
import { useAppStore, VIEW, COLUMN_MASK } from "../../store";
import { useParams } from "react-router";

import {
  useCollectionAllergens,
  useCollectionAuthors,
  useCollectionIngredients,
} from "../../api/recipeCollection";
import { SlHideEvent } from "@shoelace-style/shoelace";
import { useQueryClient } from "@tanstack/react-query";

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
  excluded: string[];
  setIncluded: (v: string[]) => void;
  setExcluded: (v: string[]) => void;
  columnOptions?: string[];
}) {
  return (
    <div style={styles.settingContainer}>
      <div style={styles.filterContainer}>
        Include {columnName}
        <TagPicker
          variant="success"
          available={columnOptions.filter((tag) => !excluded.includes(tag))}
          selected={included}
          setSelected={setIncluded}
        ></TagPicker>
      </div>
      <div style={styles.filterContainer}>
        Exclude {columnName}
        <TagPicker
          variant="danger"
          available={columnOptions.filter((tag) => !included.includes(tag))}
          selected={excluded}
          setSelected={setExcluded}
        ></TagPicker>
      </div>
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
    excludeAuthorsFilter,
    includeIngredientsFilter,
    excludeIngredientsFilter,
    getColumnVisible,
    toggleColumn,
    setMainView,
    setRowsPerPage,
    gotoFirstPage,
    setIncludeAllergensFilter,
    setExcludeAllergensFilter,
    setIncludeAuthorsFilter,
    setExcludeAuthorsFilter,
    setIncludeIngredientsFilter,
    setExcludeIngredientsFilter,
  } = useAppStore();

  const queryClient = useQueryClient();
  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");

  const { data: allAuthors } = useCollectionAuthors(collectionId);
  const { data: allAllergens } = useCollectionAllergens(collectionId);
  const { data: allIngredients } = useCollectionIngredients(collectionId);

  const minRowsPerPage = 1;
  const maxRowsPerPage = 20;

  async function onSetRowsPerPage(value: number) {
    if (isNaN(value)) {
      return;
    }

    setRowsPerPage(Math.min(maxRowsPerPage, Math.max(minRowsPerPage, value)));
    gotoFirstPage();
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  }

  function onHide(e: SlHideEvent) {
    // Prevent event bubbling caused by inner menu elements
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
              void onSetRowsPerPage(parseInt((e.target as any).value));
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
        excluded={excludeAuthorsFilter}
        setExcluded={setExcludeAuthorsFilter}
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
