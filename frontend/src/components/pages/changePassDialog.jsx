import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useState } from 'preact/hooks';
import { changePassword, correctPassword, validPassword } from '../../api/temp';
import { useAppStore, VIEW } from '../../store';

const styles = {
  rePasswordField: {
    marginBottom: "1em",
  },
}

export default function ChangePassDialog() {
  const { view, setMainView } = useAppStore();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [helpText, setHelpText] = useState("");

  function onCloseDialog() {
    setMainView();
    setOldPassword("");
    setNewPassword("");
    setRePassword("");
  }

  function onSetPassword() {
    setHelpText("");

    if (!correctPassword(oldPassword)) {
      setHelpText("Old password must match");
      return;
    }

    if (!validPassword(newPassword)) {
      setHelpText("New password must be 8 - 20 characters");
      return;
    }

    if (rePassword !== newPassword) {
      setHelpText("New passwords do not match");
      return;
    }

    changePassword(newPassword);
    onCloseDialog();
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.CHANGE_PASSWORD}
      onSlAfterHide={() => onCloseDialog()}
      label="Change Password"
    >
      <SlInput
        type="password"
        value={oldPassword}
        onSlChange={(e) => setOldPassword(e.target.value)}
        placeholder="Old Password"
        passwordToggle
      />
      <SlInput
        type="password"
        value={newPassword}
        onSlChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
        passwordToggle
      />
      <SlInput
        style={styles.rePasswordField}
        helpText={helpText}
        type="password"
        value={rePassword}
        onSlChange={(e) => setRePassword(e.target.value)}
        placeholder="Retype New Password"
        passwordToggle
      />
      <SlButton onClick={() => onSetPassword()}>
        Confirm
      </SlButton>
    </SlDialog>
  )
}

