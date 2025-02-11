import '@shoelace-style/shoelace/dist/themes/dark.css';
import './index.css';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { useState } from 'preact/hooks';

import Settings from './components/settings';
import Toolbar from './components/toolbar';
import RecipeDialog from './components/recipeDialog';
import Table from './components/table';
import PageNav from './components/pageNav';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/');

export default function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <div class="sl-theme-dark app-container">
      <Settings settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} />
      <RecipeDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <Toolbar setSettingsOpen={setSettingsOpen} setDialogOpen={setDialogOpen} />
      <Table />
      <PageNav pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}
