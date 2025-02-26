import { SlInput, SlIconButton } from '@shoelace-style/shoelace/dist/react';
import { useLoginViewStore, useSettingsViewStore } from '../../stores/view';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: "1",
  }
}

export default function Toolbar({ editMode, setEditMode, loggedIn, setLoggedIn }) {
  const openSettings = useSettingsViewStore((state) => state.show);
  const openLogin = useLoginViewStore((state) => state.show);

  function logOut() {
    setLoggedIn(false);
    setEditMode(false);
  }

  return (
    <div style={styles.root}>
      <SlInput clearable type="search" placeholder="Search" style={{flex: "1"}}>
        <SlIconButton name="search" label="Run Search" slot="suffix" />
      </SlInput>
      <SlIconButton name="sliders" label="Search Settings" onClick={() => openSettings()}/>
      {loggedIn && <SlIconButton name={editMode ? "eye" : "pencil"} onClick={() => setEditMode(!editMode)} label="Edit Mode" />}
      <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => console.log("Random recipe")} />
      {!loggedIn && <SlIconButton name="person-circle" label="Log In" onClick={() => openLogin()}/>}
      {loggedIn && <SlIconButton name="box-arrow-right" label="Log Out" onClick={() => logOut()} />}
    </div>
  )
}