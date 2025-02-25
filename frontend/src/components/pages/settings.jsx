import { SlCheckbox, SlDrawer, SlIconButton, SlInput, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';
import TagPicker from '../widgets/tagPicker';
import { DB_DATA } from '../../api/temp';

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

function MultiInputs() {
  return (
    <div>
      <SlInput type="text">
        <SlIconButton name="x" slot="suffix" onClick={() => console.log("test")}></SlIconButton>
      </SlInput>
      <SlIconButton name="plus"></SlIconButton>
    </div>
  )
}

export default function Settings({ settingsOpen, setSettingsOpen }) {
  function onHide(e) {
    // Prevent event bubbling caused by inner menu elements
    if (e.eventPhase === Event.AT_TARGET) {
      setSettingsOpen(false);
    } else {
      e.preventDefault()
    }
  }

  return (
    <SlDrawer
      class="drawer-placement-top"
      open={settingsOpen}
      onSlHide={(e) => onHide(e)}
      placement="top"
      label="Search Settings"
    >
      <div style={styles.settingContainer}>
        <div style={styles.filterContainer}>
          Visible Columns
          {DB_DATA.columns.map((column, index) => {
            return (
              <SlCheckbox size="small">{column}</SlCheckbox>
            )
          })}
        </div>
      </div>
      <div style={styles.settingContainer}>
        <MultiInputs></MultiInputs>
      </div>
      <div style={styles.settingContainer}>
        <div style={styles.filterContainer}>
          Include Allergens
          <TagPicker variant="success" availableTags={DB_DATA.allAllergens} />
        </div>
        <div style={styles.filterContainer}>
          Exclude Allergens
          <TagPicker variant="danger" availableTags={DB_DATA.allAllergens} />
        </div>
      </div>
      <div style={styles.settingContainer}>
        <div style={styles.filterContainer}>
          Include Ingredients
          <TagPicker variant="success" availableTags={DB_DATA.allIngredients} />
        </div>
        <div style={styles.filterContainer}>
          Exclude Ingredients
          <TagPicker variant="danger" availableTags={DB_DATA.allIngredients} />
        </div>
      </div>
    </SlDrawer>
  )
}