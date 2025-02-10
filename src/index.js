const drawer = document.querySelector('.drawer-placement-top');
document.querySelector('sl-icon-button[name="gear"]').addEventListener('click', () => drawer.show());
const dialog = document.querySelector('.dialog-overview');
document.querySelector('sl-icon-button[name="shuffle"]').addEventListener('click', () => dialog.show());
