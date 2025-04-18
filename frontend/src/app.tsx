import "@shoelace-style/shoelace/dist/themes/dark.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
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
import { session_auth, useLoggedIn } from "./api/user";
import { useParams } from "react-router";
import { useEffect } from "react";

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
  missingCollection: {
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

// TODO fix collection filters
// TODO confirm deletions
// TODO submit on enter for forms
// TODO handle invalid auth requests
// TODO Add assertions to api reception
// TODO fix other type errors
// TODO refactor randomize to be less bad
export default function App() {
  const { setClientUsername } = useAppStore();
  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");

  const collectionDef = collectionId !== -1;

  const { data: loggedIn } = useLoggedIn();
  const { data: ownedCollections } = useOwnedCollections();

  const editMode = !!(
    collectionDef &&
    loggedIn &&
    ownedCollections &&
    ownedCollections.includes(collectionId)
  );

  useEffect(() => {
    setClientUsername(session_auth.user);
  }, []);

  return (
    <div style={styles.root}>
      {collectionDef && <SettingsDrawer></SettingsDrawer>}
      <CollectionsDrawer></CollectionsDrawer>
      <LoginDialog></LoginDialog>
      <ChangeNameDialog></ChangeNameDialog>
      <ChangePassDialog></ChangePassDialog>
      <Toolbar collectionDef={collectionDef}></Toolbar>
      {collectionDef ? (
        <>
          <Table editMode={editMode}></Table>
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
        <div style={styles.missingCollection}>No collection selected!</div>
      )}
    </div>
  );
}
