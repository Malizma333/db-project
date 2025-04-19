import "./toolbar.css";

import SlIconButton from "@shoelace-style/shoelace/dist/react/icon-button/index.js";
import SlDropdown from "@shoelace-style/shoelace/dist/react/dropdown/index.js";
import SlMenu from "@shoelace-style/shoelace/dist/react/menu/index.js";
import SlMenuItem from "@shoelace-style/shoelace/dist/react/menu-item/index.js";
import SlMenuLabel from "@shoelace-style/shoelace/dist/react/menu-label/index.js";
import SlInput from "@shoelace-style/shoelace/dist/react/input/index.js";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon/index.js";
import SlAvatar from "@shoelace-style/shoelace/dist/react/avatar/index.js";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";
import type SlAlertElement from "@shoelace-style/shoelace/dist/components/alert/alert.js";

import { useRef } from "preact/hooks";
import { useParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import { useAppStore } from "../../store";
import { Notification } from "./notification";
import { logout, useLoggedIn } from "../../api/user";
import {
  filterRecipeCollection,
  useCollectionName,
} from "../../api/recipeCollection";

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

  const logOutAlert = useRef<null | SlAlertElement>(null);

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
      await logOutAlert.current.toast();
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
      <Notification
        variant="success"
        message="Logged out successfully"
        childRef={logOutAlert}
      ></Notification>
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
        onSlChange={(e) =>
          setRecipeSearchFilter((e.target as SlInputElement).value)
        }
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
