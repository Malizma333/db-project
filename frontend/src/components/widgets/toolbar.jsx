import { SlInput, SlIconButton, SlIcon, SlDropdown, SlMenu, SlMenuItem, SlMenuLabel } from '@shoelace-style/shoelace/dist/react';
import { useAppStore } from '../../store';
import { USER_DATA } from '../../api/temp';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: "1",
  },
  nameLabel: {
    fontWeight: "900",
  },
}

export default function Toolbar() {
  const {
    editMode,
    loggedIn,
    setSettingsView,
    setLoginView,
    setChangePassView,
    setChangeUserView,
    setCollectionsView,
    disableEditMode,
    toggleEditMode,
    logOut
  } = useAppStore();

  const ACTION = {
    VIEW_COLLECTIONS: 0,
    CHANGE_USERNAME: 1,
    CHANGE_PASSWORD: 2,
    LOGOUT: 3
  };

  function onLogOut() {
    logOut();
    disableEditMode();
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
      <SlInput clearable type="search" placeholder="Search" style={{flex: "1"}}>
        <SlIconButton name="search" label="Run Search" slot="suffix" />
      </SlInput>
      <SlIconButton name="sliders" label="Search Settings" onClick={() => setSettingsView()}/>
      {loggedIn && <SlIconButton name={editMode ? "eye" : "pencil"} onClick={() => toggleEditMode()} label="Edit Mode" />}
      <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => console.log("Random recipe")} />
      {!loggedIn && <SlIconButton name="person-circle" label="Log In" onClick={() => setLoginView()}/>}
      {loggedIn &&
        <SlDropdown>
          <SlIconButton slot="trigger" name="person-circle" label="Account"></SlIconButton>
          <SlMenu onSlSelect={(e) => onMenuAction(e.detail.item.value)}>
            <SlMenuLabel style={styles.nameLabel}>{USER_DATA.username}</SlMenuLabel>
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
      }
      {/* {loggedIn && <SlIconButton name="box-arrow-right" label="Log Out" onClick={() => onLogOut()} />} */}
    </div>
  )
}