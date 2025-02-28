import { SlInput, SlIconButton, SlIcon, SlDropdown, SlMenu, SlMenuItem, SlMenuLabel, SlAvatar } from '@shoelace-style/shoelace/dist/react';
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
  avatar: {
    "--size": "1.75em",
    cursor: "pointer",
    marginLeft: "8px",
  },
}

export default function Toolbar() {
  const {
    loggedIn,
    setSettingsView,
    setLoginView,
    setChangePassView,
    setChangeUserView,
    setCollectionsView,
    disableEditMode,
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
        <SlIconButton name="search" label="Run Search" slot="suffix"></SlIconButton>
      </SlInput>
      <SlIconButton name="sliders" label="Search Settings" onClick={() => setSettingsView()}></SlIconButton>
      <SlIconButton name="shuffle" label="Generate Random Recipe" onClick={() => console.log("Random recipe")}></SlIconButton>
      {!loggedIn ?
        <SlAvatar style={styles.avatar} label="Empty avatar" onClick={() => setLoginView()}></SlAvatar> :
        <SlDropdown>
          <SlAvatar
            style={styles.avatar}
            slot="trigger"
            initials={USER_DATA.username[0]}
            label="Avatar with username initial"
          ></SlAvatar>
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
    </div>
  )
}