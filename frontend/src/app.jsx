import '@shoelace-style/shoelace/dist/themes/dark.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

// used for importing icons without copying into public directory
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/');

import SettingsDrawer from './components/pages/settingsDrawer';
import Toolbar from './components/widgets/toolbar';
import Table from './components/widgets/table';
import PageNav from './components/widgets/pageNav';
import LoginDialog from './components/pages/loginDialog';
import { DB_DATA } from './api/temp';
import { useAppStore } from './store';
import ChangePassDialog from './components/pages/changePassDialog';
import ChangeNameDialog from './components/pages/changeNameDialog';
import ModeButton from './components/widgets/modeButton';
import CollectionsDrawer from './components/pages/collectionsDrawer';

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "95vh",
  },
}

export default function App() {
  const { page, numRowsPerPage, loggedIn } = useAppStore();

  let pageData = DB_DATA.collectionData.slice(page * numRowsPerPage, (page + 1) * numRowsPerPage);

  return (
    <div style={styles.root}>
      <SettingsDrawer></SettingsDrawer>
      <CollectionsDrawer></CollectionsDrawer>
      <LoginDialog></LoginDialog>
      <ChangeNameDialog></ChangeNameDialog>
      <ChangePassDialog></ChangePassDialog>
      <Toolbar></Toolbar>
      <Table pageData={pageData}></Table>
      <PageNav></PageNav>
      {loggedIn && <ModeButton></ModeButton>}
    </div>
  );
}
