import { SlDrawer } from '@shoelace-style/shoelace/dist/react';
import TagPicker from '../widgets/tagPicker';
import { DB_DATA } from '../../api/temp';
import { useRef } from 'preact/hooks';

export default function Settings({ settingsOpen, setSettingsOpen }) {
  function onHide(e) {
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
      Include Allergens
      <TagPicker variant="success" availableTags={DB_DATA.allAllergens} />
      Include Ingredients
      <TagPicker variant="success" availableTags={DB_DATA.allIngredients} />
      Exclude Allergens
      <TagPicker variant="danger" availableTags={DB_DATA.allAllergens} />
      Exclude Ingredients
      <TagPicker variant="danger" availableTags={DB_DATA.allIngredients} />
    </SlDrawer>
  )
}