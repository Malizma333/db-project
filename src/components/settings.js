import { SlDrawer } from '@shoelace-style/shoelace/dist/react';

export default function Settings({ settingsOpen, setSettingsOpen }) {
  return (
    <SlDrawer
      class="drawer-placement-top"
      open={settingsOpen}
      onSlAfterHide={() => setSettingsOpen(false)}
      placement="top"
      label="Settings"
    >
      These are some settings
    </SlDrawer>
  )
}