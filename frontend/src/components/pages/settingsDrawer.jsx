import { SlCheckbox, SlDrawer, SlInput } from '@shoelace-style/shoelace/dist/react';
import TagPicker from '../widgets/tagPicker';
import { useState } from 'preact/hooks';
import { useAppStore, VIEW, COLUMN_MASK } from '../../store';
import { useParams } from 'react-router';

import { useCollectionAllergens, useCollectionAuthors, useCollectionIngredients } from '../../api/recipeCollection';

const styles = {
  settingContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '1em',
  },
  filterContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  }
}

function FilterPicker({ columnName, columnOptions }) {
  const [included, setIncluded] = useState([]);
  const [excluded, setExcluded] = useState([]);

  return (
    <div style={styles.settingContainer}>
      <div style={styles.filterContainer}>
        Include {columnName}
        <TagPicker
          variant="success"
          available={columnOptions.filter(tag => !excluded.includes(tag))}
          selected={included}
          setSelected={setIncluded}
        ></TagPicker>
      </div>
      <div style={styles.filterContainer}>
        Exclude {columnName}
        <TagPicker
          variant="danger"
          available={columnOptions.filter(tag => !included.includes(tag))}
          selected={excluded}
          setSelected={setExcluded}
        ></TagPicker>
      </div>
    </div>
  )
}

export default function SettingsDrawer() {
  const {
    view, numRowsPerPage,
    getColumnVisible, toggleColumn, setMainView, setRowsPerPage, gotoFirstPage
  } = useAppStore();

  const params = useParams();

  const { data: allAuthors } = useCollectionAuthors(params["id"]);
  const { data: allAllergens } = useCollectionAllergens(params["id"]);
  const { data: allIngredients } = useCollectionIngredients(params["id"]);

  const minRowsPerPage = 1;
  const maxRowsPerPage = 20;

  function onSetRowsPerPage(value) {
    if (isNaN(value)) {
      return;
    }

    setRowsPerPage(Math.min(maxRowsPerPage, Math.max(minRowsPerPage, value)));
    gotoFirstPage();
  }

  function onHide(e) {
    // Prevent event bubbling caused by inner menu elements
    if (e.eventPhase !== Event.AT_TARGET) {
      e.preventDefault();
      return;
    }

    setMainView();
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
            value={numRowsPerPage}
            min={minRowsPerPage}
            max={maxRowsPerPage}
            onSlBlur={(e) => onSetRowsPerPage(parseInt(e.target.value))}></SlInput>
        </div>
      </div>
      <div style={styles.settingContainer}>
        <div style={styles.filterContainer}>
          Visible Columns
          <SlCheckbox
            size="small"
            checked={getColumnVisible(COLUMN_MASK.NAME)}
            onSlChange={() => toggleColumn(COLUMN_MASK.NAME)}
          >Recipe Name</SlCheckbox>
          <SlCheckbox
            size="small"
            checked={getColumnVisible(COLUMN_MASK.AUTHOR)}
            onSlChange={() => toggleColumn(COLUMN_MASK.AUTHOR)}
          >Author</SlCheckbox>
          <SlCheckbox
                size="small"
                checked={getColumnVisible(COLUMN_MASK.ALLERGENS)}
              onSlChange={() => toggleColumn(COLUMN_MASK.ALLERGENS)}
          >Allergens</SlCheckbox>
          <SlCheckbox
            size="small"
            checked={getColumnVisible(COLUMN_MASK.REFERENCE)}
            onSlChange={() => toggleColumn(COLUMN_MASK.REFERENCE)}
          >Reference</SlCheckbox>
          <SlCheckbox
            size="small"
            checked={getColumnVisible(COLUMN_MASK.INGREDIENTS)}
            onSlChange={() => toggleColumn(COLUMN_MASK.INGREDIENTS)}
          >Ingredients</SlCheckbox>
        </div>
      </div>
      <FilterPicker columnName={"Author"} columnOptions={allAuthors}></FilterPicker>
      <FilterPicker columnName={"Allergens"} columnOptions={allAllergens}></FilterPicker>
      <FilterPicker columnName={"Ingredients"} columnOptions={allIngredients}></FilterPicker>
    </SlDrawer>
  )
}