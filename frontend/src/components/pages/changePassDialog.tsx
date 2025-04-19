import {
  SlInput,
  SlDialog,
  SlButton,
} from "@shoelace-style/shoelace/dist/react";
import { useRef, useState } from "preact/hooks";
import { useAppStore, VIEW } from "../../store";
import { Notification } from "../widgets/notification";
import { changePassword } from "../../api/user";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";
import SlAlertElement from "@shoelace-style/shoelace/dist/components/alert/alert.js";

const styles = {
  inputField: {
    marginBottom: "1em",
  },
};

export default function ChangePassDialog() {
  const { view, setMainView } = useAppStore();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [helpText, setHelpText] = useState("");
  const changePassAlert = useRef<null | SlAlertElement>(null);

  function onCloseDialog() {
    setMainView();
    setOldPassword("");
    setNewPassword("");
    setRePassword("");
  }

  async function onSetPassword() {
    setHelpText("");

    if (rePassword !== newPassword) {
      setHelpText("New passwords do not match");
      return;
    }

    try {
      await changePassword(oldPassword, newPassword);
    } catch (e) {
      if (e instanceof Error) {
        setHelpText(e.message);
      }
    }

    onCloseDialog();
    if (changePassAlert.current !== null) {
      await changePassAlert.current.toast();
    }
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.CHANGE_PASSWORD}
      onSlAfterHide={() => onCloseDialog()}
      label="Change Password"
    >
      <Notification
        message="Password changed successfully"
        variant="success"
        childRef={changePassAlert}
      ></Notification>
      <SlInput
        style={styles.inputField}
        type="password"
        value={oldPassword}
        onSlChange={(e) => setOldPassword((e.target as SlInputElement).value)}
        placeholder="Old Password"
        passwordToggle
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="password"
        value={newPassword}
        onSlChange={(e) => setNewPassword((e.target as SlInputElement).value)}
        placeholder="New Password"
        passwordToggle
      ></SlInput>
      <SlInput
        className="errorHelp"
        style={styles.inputField}
        helpText={helpText}
        type="password"
        value={rePassword}
        onSlChange={(e) => setRePassword((e.target as SlInputElement).value)}
        placeholder="Retype New Password"
        passwordToggle
      ></SlInput>
      <SlButton
        onClick={() => {
          void onSetPassword();
        }}
      >
        Confirm
      </SlButton>
    </SlDialog>
  );
}
