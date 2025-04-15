import { SlInput, SlIconButton, SlIcon, SlDropdown, SlMenu, SlMenuItem, SlMenuLabel, SlAvatar } from '@shoelace-style/shoelace/dist/react';
import { useAppStore } from '../../store';
import { SlNotification } from './notification';
import { useRef } from 'preact/hooks';

import { logout, useLoggedIn } from '../../api/user';
import { useParams } from 'react-router';
import { filterRecipeCollection, useCollectionName, useRecipeCount } from '../../api/recipeCollection';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    flex: "1",
  },
  avatar: {
    "--size": "1.75em",
    cursor: "pointer",
    marginLeft: "8px",
  },
}

export default function Toolbar({ setRecipeData, missingCollection }) {
  const {
    setSettingsView,
    setLoginView,
    setChangePassView,
    setChangeUserView,
    setCollectionsView,
    setRecipeSummaryView,
    clientUsername,
    setClientUsername,
  } = useAppStore();

  const params = useParams();

  const { data: collectionName } = useCollectionName(params["id"]);
  const { data: numRecipes } = useRecipeCount(params["id"]);
  const { status, data: loggedIn, error, isFetching: loggedInFetching } = useLoggedIn();

  const logOutAlert = useRef(null);

  if (status === "error") {
    console.error(error.message);
  }

  const ACTION = {
    VIEW_COLLECTIONS: 0,
    CHANGE_USERNAME: 1,
    CHANGE_PASSWORD: 2,
    LOGOUT: 3
  };


  async function onRandomRecipe() {
    const ind = Math.floor(Math.random() * numRecipes);
    const randRecipe = await filterRecipeCollection({
      collection_id: params["id"],
      recipe_name: "",
      include_allergens: [],
      exclude_allergens: [],
      include_ingredients: [],
      exclude_ingredients: [],
      view_min: ind,
      view_max: ind + 1
    })[0];
    setRecipeData.setRecipeName(randRecipe.recipeName);
    setRecipeData.setAuthors(randRecipe.authors);
    setRecipeData.setReference(randRecipe.reference);
    setRecipeData.setAllergens(randRecipe.allergens);
    setRecipeData.setIngredients(randRecipe.ingredients);
    setRecipeSummaryView();
  }

  async function onLogOut() {
    await logout();
    setClientUsername("");
    logOutAlert.current.base.toast();
  }

  function onMenuAction(item) {
    switch(item) {
      case ACTION.VIEW_COLLECTIONS:
        setCollectionsView();
        break;
      case ACTION.CHANGE_USERNAME:
        setChangeUserView();
        break;
      case ACTION.CHANGE_PASSWORD:
        setChangePassView();
        break;
      case ACTION.LOGOUT:
        onLogOut();
        break;
      default:
        break;
    }
  }

  return (
    <div style={styles.root}>
      <SlNotification variant="success" message="Logged out successfully" ref={logOutAlert}></SlNotification>
      {loggedInFetching || !loggedIn ?
        (
          <SlAvatar style={styles.avatar} label="Empty avatar" onClick={() => setLoginView()}></SlAvatar>
        ) : (
          <SlDropdown>
            <SlAvatar
              style={styles.avatar}
              slot="trigger"
              initials={clientUsername[0]}
              label="Avatar with username initial"
            ></SlAvatar>
            <SlMenu onSlSelect={(e) => onMenuAction(e.detail.item.value)}>
              <SlMenuLabel className="userMenuLabel">{clientUsername}</SlMenuLabel>
              <SlMenuItem value={ACTION.VIEW_COLLECTIONS}>
                View Collections
              </SlMenuItem>
              <SlMenuItem value={ACTION.CHANGE_USERNAME}>
                Change Username
              </SlMenuItem>
              <SlMenuItem value={ACTION.CHANGE_PASSWORD}>
                Change Password
              </SlMenuItem>
              <SlMenuItem value={ACTION.LOGOUT}>
                Log Out
                <SlIcon name="box-arrow-right" slot="suffix"></SlIcon>
              </SlMenuItem>
            </SlMenu>
          </SlDropdown>
        )
      }
      {missingCollection && <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => onRandomRecipe()}></SlIconButton>}
      {missingCollection && <SlIconButton name="sliders" label="Search Settings" onClick={() => setSettingsView()}></SlIconButton>}
      {missingCollection && <SlInput clearable type="search" placeholder={`Search ${collectionName}...`} style={{flex: "1"}}>
        <SlIconButton name="search" label="Run Search" slot="suffix"></SlIconButton>
      </SlInput>}
    </div>
  )
}