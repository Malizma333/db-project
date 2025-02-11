import { SlInput, SlIconButton } from '@shoelace-style/shoelace/dist/react';

export default function Toolbar({ setSettingsOpen, setDialogOpen, editMode, setEditMode }) {
  return (
    <div class="toolbar">
      <SlInput type="text" placeholder="Search" />
      <SlIconButton name="search" label="Run Search" />
      <SlIconButton name={editMode ? "eye" : "pencil"} onClick={() => setEditMode(!editMode)} label="Edit Mode" />
      <SlIconButton name="gear" label="Search Settings" onClick={() => setSettingsOpen(true)} />
      <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => setDialogOpen(true)} />
    </div>
  )
}