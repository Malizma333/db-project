import { SlCheckbox, SlDrawer, SlInput } from '@shoelace-style/shoelace/dist/react';
import TagPicker from '../widgets/tagPicker';
import { DB_DATA } from '../../api/temp';
import { useState } from 'preact/hooks';
import { useAppStore, VIEW } from '../../store';

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
        />
      </div>
      <div style={styles.filterContainer}>
        Exclude {columnName}
        <TagPicker
          variant="danger"
          available={columnOptions.filter(tag => !included.includes(tag))}
          selected={excluded}
          setSelected={setExcluded}
        />
      </div>
    </div>
  )
}

export default function SettingsDrawer() {
  const { view, numRowsPerPage, setMainView, setRowsPerPage, gotoFirstPage } = useAppStore();
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
    if (e.eventPhase === Event.AT_TARGET) {
      setMainView();
    } else {
      e.preventDefault()
    }
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
          {DB_DATA.columns.map((column, _) => {
            return (
              <SlCheckbox size="small">{column}</SlCheckbox>
            )
          })}
        </div>
      </div>
      <FilterPicker columnName={"Author"} columnOptions={DB_DATA.allAuthors}/>
      <FilterPicker columnName={"Allergens"} columnOptions={DB_DATA.allAllergens}/>
      <FilterPicker columnName={"Ingredients"} columnOptions={DB_DATA.allIngredients}/>
    </SlDrawer>
  )
}