import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useRef, useState } from 'preact/hooks';
import { tempChangePwd, correctPassword, validPassword } from '../../api';
import { useAppStore, VIEW } from '../../store';
import { SlNotification } from '../widgets/notification';

const styles = {
  inputField: {
    marginBottom: "1em",
  },
}

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

    tempChangePwd(newPassword);
    onCloseDialog();
    changePassAlert.current.base.toast();
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.CHANGE_PASSWORD}
      onSlAfterHide={() => onCloseDialog()}
      label="Change Password"
    >
      <SlNotification message="Password changed successfully" variant="success" ref={changePassAlert}></SlNotification>
      <SlInput
        style={styles.inputField}
        type="password"
        helpText="Must be 8 - 20 characters"
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
      <SlButton onClick={() => onSetPassword()}>
        Confirm
      </SlButton>
    </SlDialog>
  )
}

