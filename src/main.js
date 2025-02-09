function main() {
  setupSettingsDrawer();
  setupRandomRecipeDialog();
}

function setupSettingsDrawer() {
  const drawer = document.querySelector('.drawer-placement-top');
  const openButton = document.querySelector('sl-icon-button[name="gear"]');

  openButton.addEventListener('click', () => drawer.show());
}

function setupRandomRecipeDialog() {
  const dialog = document.querySelector('.dialog-overview');
  const openButton = document.querySelector('sl-icon-button[name="shuffle"]');

  openButton.addEventListener('click', () => dialog.show());
}

main();