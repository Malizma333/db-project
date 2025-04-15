import '@shoelace-style/shoelace/dist/themes/dark.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

// used for importing icons without copying into public directory
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/');

import SettingsDrawer from './components/pages/settingsDrawer';
import Toolbar from './components/widgets/toolbar';
import Table from './components/widgets/table';
import PageNav from './components/widgets/pageNav';
import LoginDialog from './components/pages/loginDialog';
import { useAppStore, VIEW } from './store';
import ChangePassDialog from './components/pages/changePassDialog';
import ChangeNameDialog from './components/pages/changeNameDialog';
import CollectionsDrawer from './components/pages/collectionsDrawer';
import RecipeForm from './components/pages/recipeForm';
import RecipeSummary from './components/pages/recipeSummary';
import { useState } from 'preact/hooks';

import { useFilterCollection, useOwnedCollections, useRecipeCount } from './api/recipeCollection';
import { useLoggedIn } from './api/user';
import { useParams } from 'react-router';

const styles = {
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
  }
}

export default function App({ collectionDef }) {
  const { page, numRowsPerPage, setNumRecipesInCollection, setEditMode, init, setInit } = useAppStore();

  const params = useParams();

  const [recipeName, setRecipeName] = useState("");
  const [authors, setAuthors] = useState([]);
  const [reference, setReference] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [allergens, setAllergens] = useState([]);
  const newRecipeData = { recipeName, authors, reference, ingredients, allergens };
  const setRecipeData = { setRecipeName, setAuthors, setReference, setIngredients, setAllergens };

  const { data: numRecipesInCollection } = useRecipeCount(params["id"] || -1);
  const { data: loggedIn } = useLoggedIn();
  const { data: ownedCollections } = useOwnedCollections();
  const { data: tableData } = useFilterCollection({
    collection_id: params["id"],
    recipe_name: "",
    include_allergens: [],
    exclude_allergens: [],
    include_ingredients: [],
    exclude_ingredients: [],
    authors: [],
    view_min: page * numRowsPerPage,
    view_max: (page + 1) * numRowsPerPage
  });

  if (!init) {
    if (collectionDef) {
      setNumRecipesInCollection(numRecipesInCollection);
      setEditMode(loggedIn && ownedCollections && ownedCollections.includes(params["id"]));
    }

    setInit();
  }

  return (
    <div style={styles.root}>
      {collectionDef && <SettingsDrawer></SettingsDrawer>}
      <CollectionsDrawer></CollectionsDrawer>
      <LoginDialog></LoginDialog>
      <ChangeNameDialog></ChangeNameDialog>
      <ChangePassDialog></ChangePassDialog>
      <Toolbar missingCollection={collectionDef} setRecipeData={setRecipeData}></Toolbar>
      {collectionDef ?
        <>
          <Table
            pageData={tableData}
            setRecipeData={setRecipeData}
          ></Table>
          <PageNav></PageNav>
          <RecipeForm
            formTitle="New Recipe"
            submitLabel="Add Recipe"
            submitMessage="Added recipe successfully"
            viewState={VIEW.NEW_RECIPE_FORM}
            recipeData={newRecipeData}
            setRecipeData={setRecipeData}
          ></RecipeForm>
          <RecipeForm
            formTitle="Update Recipe"
            submitLabel="Update"
            submitMessage="Updated recipe successfully"
            viewState={VIEW.UPDATE_RECIPE_FORM}
            recipeData={newRecipeData}
            setRecipeData={setRecipeData}
          ></RecipeForm>
          <RecipeSummary recipeData={newRecipeData}></RecipeSummary>
        </> : <div style={styles.missingCollection}>No collection selected!</div>
      }
    </div>
  );
}
