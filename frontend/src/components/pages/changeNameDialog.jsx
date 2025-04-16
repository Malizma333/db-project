import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useRef, useState } from 'preact/hooks';
import { useAppStore, VIEW } from '../../store';
import { SlNotification } from '../widgets/notification';

import { changeUsername } from '../../api/user';

const styles = {
  inputField: {
    marginBottom: "1em",
  },
}

export default function ChangeNameDialog() {
  const { view, setMainView, setClientUsername } = useAppStore();

  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");
  const changeNameAlert = useRef(null);

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
    } catch(e) {
      setHelpText(e.message);
      return;
    }

    onCloseDialog();
    changeNameAlert.current.base.toast();
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.CHANGE_USERNAME}
      onSlAfterHide={() => onCloseDialog()}
      label="Change Username"
    >
      <SlNotification message="Changed username successfully" variant="success" ref={changeNameAlert}></SlNotification>
      <SlInput
        style={styles.inputField}
        helpText="Must be 8 - 20 characters"
        type="text"
        value={newUsername}
        onSlChange={(e) => setNewUsername(e.target.value)}
        placeholder="New Username"
      ></SlInput>
      <SlInput
        className="errorHelp"
        style={styles.inputField}
        helpText={helpText}
        type="password"
        value={password}
        onSlChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        passwordToggle
      ></SlInput>
      <SlButton onClick={() => onChangeUsername()}>
        Confirm
      </SlButton>
    </SlDialog>
  )
}

