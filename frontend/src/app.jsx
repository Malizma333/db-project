import '@shoelace-style/shoelace/dist/themes/dark.css';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { useState } from 'preact/hooks';

import SettingsDrawer from './components/pages/settingsDrawer';
import Toolbar from './components/widgets/toolbar';
import Table from './components/widgets/table';
import PageNav from './components/widgets/pageNav';
import LoginDialog from './components/pages/loginDialog';
import { DB_DATA } from './api/temp';
// used for importing icons without copying into public directory
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/');

const rowsPerPage = 10;
const numPages = Math.ceil(DB_DATA.pageData.length / rowsPerPage);

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "95vh",
  },
}

export default function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div class="sl-theme-dark" style={styles.root}>
      <SettingsDrawer />
      <LoginDialog setLoggedIn={setLoggedIn} />
      <Toolbar
        setEditMode={setEditMode}
        editMode={editMode}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Table editMode={editMode} pageData={DB_DATA.pageData.slice(pageNumber * rowsPerPage, (pageNumber + 1) * rowsPerPage)} />
      <PageNav pageNumber={pageNumber} setPageNumber={setPageNumber} numPages={numPages} />
    </div>
  );
}
