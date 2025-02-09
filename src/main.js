function main() {
  setupSettingsDrawer();
}

function setupSettingsDrawer() {
  const drawer = document.querySelector('.drawer-placement-top');
  const openButton = document.querySelector('sl-icon-button[name="gear"]');
  const closeButton = drawer.querySelector('sl-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
}

main();