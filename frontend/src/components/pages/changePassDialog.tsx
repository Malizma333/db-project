import {
  SlInput,
  SlDialog,
  SlButton,
} from "@shoelace-style/shoelace/dist/react";
import { useRef, useState } from "preact/hooks";
import { useAppStore, VIEW } from "../../store";
import { SlNotification } from "../widgets/notification";

import { changePassword } from "../../api/user";

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
  const changePassAlert = useRef(null);

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
      changePassAlert.current.base.toast();
    }
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.CHANGE_PASSWORD}
      onSlAfterHide={() => onCloseDialog()}
      label="Change Password"
    >
      <SlNotification
        message="Password changed successfully"
        variant="success"
        ref={changePassAlert}
      ></SlNotification>
      <SlInput
        style={styles.inputField}
        type="password"
        value={oldPassword}
        onSlChange={(e) => setOldPassword(e.target.value)}
        placeholder="Old Password"
        passwordToggle
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="password"
        value={newPassword}
        onSlChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
        passwordToggle
      ></SlInput>
      <SlInput
        className="errorHelp"
        style={styles.inputField}
        helpText={helpText}
        type="password"
        value={rePassword}
        onSlChange={(e) => setRePassword(e.target.value)}
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
