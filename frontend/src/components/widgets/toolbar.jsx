import { SlInput, SlIconButton, SlIcon, SlDropdown, SlMenu, SlMenuItem, SlMenuLabel, SlAvatar } from '@shoelace-style/shoelace/dist/react';
import { useAppStore } from '../../store';
import { SlNotification } from './notification';
import { useRef } from 'preact/hooks';

import { DB_DATA } from '../../api/api';
import { logout, useLoggedIn } from '../../api/user';

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

  const { status, data: loggedIn, error, isFetching: loggedInFetching } = useLoggedIn();

  if (status === "error") {
    console.error(error.message);
  }

  const ACTION = {
    VIEW_COLLECTIONS: 0,
    CHANGE_USERNAME: 1,
    CHANGE_PASSWORD: 2,
    LOGOUT: 3
  };

  const logOutAlert = useRef(null);

  function onRandomRecipe() {
    // TODO api
    const ind = Math.floor(Math.random() * DB_DATA.collectionData.length);
    const randRecipe = DB_DATA.collectionData[ind];
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
      {missingCollection && <SlInput clearable type="search" placeholder={`Search ${DB_DATA.collectionArray[0].name}...`} style={{flex: "1"}}>
        <SlIconButton name="search" label="Run Search" slot="suffix"></SlIconButton>
      </SlInput>}
    </div>
  )
}