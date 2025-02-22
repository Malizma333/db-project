import { SlInput, SlIconButton } from '@shoelace-style/shoelace/dist/react';

const guest = true

export default function Toolbar({ setSettingsOpen, setRecipeDialogOpen, setLoginDialogOpen, editMode, setEditMode }) {
  return (
    <div class="toolbar">
      <SlInput type="search" placeholder="Search">
        <SlIconButton name="search" label="Run Search" slot="suffix" />
      </SlInput>
      <SlIconButton name="sliders" label="Search Settings" onClick={() => setSettingsOpen(true)} />
      <SlIconButton disabled={guest} name={editMode ? "eye" : "pencil"} onClick={() => setEditMode(!editMode)} label="Edit Mode" />
      <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => setRecipeDialogOpen(true)} />
      <SlIconButton name="person-circle" label="Log In" onClick={() => setLoginDialogOpen(true)} />
    </div>
  )
}