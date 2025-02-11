import { SlDialog } from '@shoelace-style/shoelace/dist/react';

export default function RecipeDialog({ dialogOpen, setDialogOpen }) {
  return (
    <SlDialog
      class="dialog-overview"
      open={dialogOpen}
      onSlAfterHide={() => setDialogOpen(false)}
      label="Random Recipe"
    >
      (Random Recipe Name Here)
    </SlDialog>
  )
}
