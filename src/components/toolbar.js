import { SlInput, SlIconButton } from '@shoelace-style/shoelace/dist/react';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: "1",
  }
}

export default function Toolbar({ setSettingsOpen, setLoginDialogOpen, editMode, setEditMode, loggedIn, setLoggedIn }) {
  return (
    <div style={styles.root}>
      <SlInput clearable type="search" placeholder="Search" style={{flex: "1"}}>
        <SlIconButton name="search" label="Run Search" slot="suffix" />
      </SlInput>
      <SlIconButton name="sliders" label="Search Settings" onClick={() => setSettingsOpen(true)} />
      {loggedIn && <SlIconButton name={editMode ? "eye" : "pencil"} onClick={() => setEditMode(!editMode)} label="Edit Mode" />}
      <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => console.log("Random recipe")} />
      {!loggedIn && <SlIconButton name="person-circle" label="Log In" onClick={() => setLoginDialogOpen(true)} />}
      {loggedIn && <SlIconButton name="box-arrow-right" label="Log Out" onClick={() => setLoggedIn(false)} />}
    </div>
  )
}