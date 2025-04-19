import "@shoelace-style/shoelace/dist/themes/dark.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import type SlAlertElement from "@shoelace-style/shoelace/dist/components/alert/alert.js";

import { useEffect, useRef } from "preact/hooks";
import { useQueryClient } from "@tanstack/react-query";

import SettingsDrawer from "./components/pages/settingsDrawer";
import Toolbar from "./components/widgets/toolbar";
import Table from "./components/widgets/table";
import PageNav from "./components/widgets/pageNav";
import LoginDialog from "./components/pages/loginDialog";
import { useAppStore, VIEW } from "./store";
import ChangePassDialog from "./components/pages/changePassDialog";
import ChangeNameDialog from "./components/pages/changeNameDialog";
import CollectionsDrawer from "./components/pages/collectionsDrawer";
import RecipeForm from "./components/pages/recipeForm";
import RecipeSummary from "./components/pages/recipeSummary";
import { useOwnedCollections } from "./api/recipeCollection";
import { clearSessionAuth, session_auth, useLoggedIn } from "./api/user";
import { Notification } from "./components/widgets/notification";

// used for importing icons without copying into public directory
setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/",
);

const styles: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "95vh",
  },
  noCollectionText: {
    alignItems: "center",
    color: "gray",
    display: "flex",
    flexDirection: "column",
    flex: "11",
    fontSize: "72px",
    justifyContent: "center",
    userSelect: "none",
  },
};

export default function App() {
  const { sessionAlert, loadedCollectionId, setClientUsername } = useAppStore();

  const queryClient = useQueryClient();
  const { data: loggedIn } = useLoggedIn();
  const { data: ownedCollections } = useOwnedCollections();
  const authExpRef = useRef<null | SlAlertElement>(null);

  useEffect(() => {
    setClientUsername(session_auth.user);
  }, []);

  useEffect(() => {
    if (sessionAlert) {
      if (authExpRef.current !== null) {
        void authExpRef.current.toast();
        void queryClient.invalidateQueries({ queryKey: ["loggedIn"] });
        clearSessionAuth();
      }
    }
  }, [sessionAlert]);

  return (
    <div style={styles.root}>
      <Notification
        message="Session expired, please log in again"
        variant="danger"
        childRef={authExpRef}
        duration={30000}
      ></Notification>
      {loadedCollectionId !== -1 && <SettingsDrawer></SettingsDrawer>}
      <CollectionsDrawer></CollectionsDrawer>
      <LoginDialog></LoginDialog>
      <ChangeNameDialog></ChangeNameDialog>
      <ChangePassDialog></ChangePassDialog>
      <Toolbar></Toolbar>
      {loadedCollectionId !== -1 ? (
        <>
          <Table
            editMode={
              loggedIn === true &&
              ownedCollections !== undefined &&
              ownedCollections.includes(loadedCollectionId)
            }
          ></Table>
          <PageNav></PageNav>
          <RecipeForm
            formTitle="New Recipe"
            submitLabel="Add Recipe"
            submitMessage="Added recipe successfully"
            viewState={VIEW.NEW_RECIPE_FORM}
          ></RecipeForm>
          <RecipeForm
            formTitle="Update Recipe"
            submitLabel="Update"
            submitMessage="Updated recipe successfully"
            viewState={VIEW.UPDATE_RECIPE_FORM}
          ></RecipeForm>
          <RecipeSummary></RecipeSummary>
        </>
      ) : (
        <div style={styles.noCollectionText}>No collection selected!</div>
      )}
    </div>
  );
}
