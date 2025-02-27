import { SlInput, SlIconButton } from '@shoelace-style/shoelace/dist/react';
import { useAppStore } from '../../store';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: "1",
  }
}

export default function Toolbar() {
  const { editMode, loggedIn, setSettingsView, setLoginView, disableEditMode, toggleEditMode, logOut } = useAppStore();

  function onLogOut() {
    logOut();
    disableEditMode();
  }

  return (
    <div style={styles.root}>
      <SlInput clearable type="search" placeholder="Search" style={{flex: "1"}}>
        <SlIconButton name="search" label="Run Search" slot="suffix" />
      </SlInput>
      <SlIconButton name="sliders" label="Search Settings" onClick={() => setSettingsView()}/>
      {loggedIn && <SlIconButton name={editMode ? "eye" : "pencil"} onClick={() => toggleEditMode()} label="Edit Mode" />}
      <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => console.log("Random recipe")} />
      {!loggedIn && <SlIconButton name="person-circle" label="Log In" onClick={() => setLoginView()}/>}
      {loggedIn && <SlIconButton name="box-arrow-right" label="Log Out" onClick={() => onLogOut()} />}
    </div>
  )
}