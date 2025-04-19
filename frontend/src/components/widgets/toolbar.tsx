import {
  SlInput,
  SlIconButton,
  SlIcon,
  SlDropdown,
  SlMenu,
  SlMenuItem,
  SlMenuLabel,
  SlAvatar,
} from "@shoelace-style/shoelace/dist/react";
import { useAppStore } from "../../store";
import { SlNotification } from "./notification";
import { useRef } from "preact/hooks";

import { logout, useLoggedIn } from "../../api/user";
import { useParams } from "react-router";
import {
  filterRecipeCollection,
  useCollectionName,
} from "../../api/recipeCollection";
import { useQueryClient } from "@tanstack/react-query";

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
};

export default function Toolbar({ collectionDef }: { collectionDef: boolean }) {
  const {
    clientUsername,
    recipeSearchFilter,
    filterProps,
    setSettingsView,
    setLoginView,
    setChangePassView,
    setChangeUserView,
    setCollectionsView,
    setRecipeSummaryView,
    setClientUsername,
    setSelectedRecipe,
    setRecipeSearchFilter,
  } = useAppStore();

  const queryClient = useQueryClient();
  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");

  const { data: collectionName } = useCollectionName(collectionId);
  const {
    status,
    data: loggedIn,
    error,
    isFetching: loggedInFetching,
  } = useLoggedIn();

  const logOutAlert = useRef(null);

  if (status === "error") {
    console.error(error.message);
  }

  enum ACTION {
    VIEW_COLLECTIONS = "0",
    CHANGE_USERNAME = "1",
    CHANGE_PASSWORD = "2",
    LOGOUT = "3",
  }

  async function onRandomRecipe() {
    const randRecipe = await filterRecipeCollection({
      ...filterProps,
      collection_id: collectionId,
      view_min: 0,
      view_max: 1,
      random: true,
    });

    setSelectedRecipe(randRecipe[0]);
    setRecipeSummaryView();
  }

  async function onLogOut() {
    await logout();
    setClientUsername("");
    await queryClient.invalidateQueries({ queryKey: ["loggedIn"] });
    if (logOutAlert.current !== null) {
      logOutAlert.current.base.toast();
    }
  }

  async function onApplySearch() {
    await queryClient.invalidateQueries({ queryKey: ["filterCollection"] });
  }

  async function onMenuAction(item: ACTION) {
    switch (item) {
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
        await onLogOut();
        break;
      default:
        break;
    }
  }

  return (
    <div style={styles.root}>
      <SlNotification
        variant="success"
        message="Logged out successfully"
        ref={logOutAlert}
      ></SlNotification>
      <div>
        {/*
          This div needs to be here, otherwise the toolbar rearranges???
          Login -> Logout -> Login -> Logout
        */}
      </div>
      {loggedInFetching || !loggedIn ? (
        <SlAvatar
          style={styles.avatar}
          label="Empty avatar"
          onClick={() => setLoginView()}
        ></SlAvatar>
      ) : (
        <SlDropdown>
          <SlAvatar
            style={styles.avatar}
            slot="trigger"
            initials={clientUsername[0]}
            label="Avatar with username initial"
          ></SlAvatar>
          <SlMenu
            onSlSelect={(e) => {
              void onMenuAction(e.detail.item.value as ACTION);
            }}
          >
            <SlMenuLabel className="userMenuLabel">
              {clientUsername}
            </SlMenuLabel>
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
      )}
      <SlIconButton
        disabled={!collectionDef}
        name="shuffle"
        label="Generate Random Recipe"
        onClick={() => {
          void onRandomRecipe();
        }}
      ></SlIconButton>
      <SlIconButton
        disabled={!collectionDef}
        name="sliders"
        label="Search Settings"
        onClick={() => setSettingsView()}
      ></SlIconButton>
      <SlInput
        disabled={!collectionDef}
        clearable
        type="search"
        placeholder={`Search ${collectionName || ""}...`}
        style={{ flex: "1" }}
        value={recipeSearchFilter}
        onSlChange={(e) => setRecipeSearchFilter(e.target.value)}
      >
        <SlIconButton
          disabled={!collectionDef}
          name="search"
          label="Run Search"
          slot="suffix"
          onClick={() => {
            void onApplySearch();
          }}
        ></SlIconButton>
      </SlInput>
    </div>
  );
}
