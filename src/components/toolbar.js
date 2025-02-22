import { SlInput, SlIconButton } from '@shoelace-style/shoelace/dist/react';

export default function Toolbar({ setSettingsOpen, setRecipeDialogOpen, setLoginDialogOpen, editMode, setEditMode, loggedIn, setLoggedIn }) {
  return (
    <div class="toolbar">
      <SlInput clearable type="search" placeholder="Search">
        <SlIconButton name="search" label="Run Search" slot="suffix" />
      </SlInput>
      <SlIconButton name="sliders" label="Search Settings" onClick={() => setSettingsOpen(true)} />
      {loggedIn && <SlIconButton name={editMode ? "eye" : "pencil"} onClick={() => setEditMode(!editMode)} label="Edit Mode" />}
      <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => setRecipeDialogOpen(true)} />
      {!loggedIn && <SlIconButton name="person-circle" label="Log In" onClick={() => setLoginDialogOpen(true)} />}
      {loggedIn && <SlIconButton name="box-arrow-right" label="Log Out" onClick={() => setLoggedIn(false)} />}
    </div>
  )
}