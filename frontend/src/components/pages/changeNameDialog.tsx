import "./errorHelp.css";

import { useRef, useState } from "preact/hooks";

import SlInput from "@shoelace-style/shoelace/dist/react/input/index.js";
import SlDialog from "@shoelace-style/shoelace/dist/react/dialog/index.js";
import SlButton from "@shoelace-style/shoelace/dist/react/button/index.js";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";
import type SlAlertElement from "@shoelace-style/shoelace/dist/components/alert/alert.js";

import { useAppStore, VIEW } from "../../store";
import { Notification } from "../widgets/notification";
import { changeUsername } from "../../api/user";
import { AUTH_ERROR } from "src/api/api";

const styles = {
  inputField: {
    marginBottom: "1em",
  },
};

export default function ChangeNameDialog() {
  const { view, setMainView, setClientUsername, setSessionAlert } =
    useAppStore();

  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");
  const changeNameAlert = useRef<null | SlAlertElement>(null);

  function onCloseDialog() {
    setMainView();
    setNewUsername("");
    setPassword("");
    setHelpText("");
  }

  async function onChangeUsername() {
    try {
      await changeUsername(password, newUsername);
      setClientUsername(newUsername);
      onCloseDialog();
      if (changeNameAlert.current !== null) {
        await changeNameAlert.current.toast();
      }
    } catch (e) {
      if (e instanceof Error) {
        if (e.message === AUTH_ERROR) {
          setSessionAlert();
        } else {
          setHelpText(e.message);
        }
      }
    }
  }

  return (
    <SlDialog
      className="dialog-overview"
      open={view === VIEW.CHANGE_USERNAME}
      onSlAfterHide={() => onCloseDialog()}
      label="Change Username"
    >
      <Notification
        message="Changed username successfully"
        variant="success"
        childRef={changeNameAlert}
      ></Notification>
      <SlInput
        style={styles.inputField}
        type="text"
        value={newUsername}
        onSlChange={(e) => setNewUsername((e.target as SlInputElement).value)}
        placeholder="New Username"
      ></SlInput>
      <SlInput
        className="errorHelp"
        style={styles.inputField}
        helpText={helpText}
        type="password"
        value={password}
        onSlChange={(e) => setPassword((e.target as SlInputElement).value)}
        placeholder="Password"
        passwordToggle
      ></SlInput>
      <SlButton
        onClick={() => {
          void onChangeUsername();
        }}
      >
        Confirm
      </SlButton>
    </SlDialog>
  );
}
