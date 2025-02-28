import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useState } from 'preact/hooks';
import { changeUsername, correctPassword, uniqueUsername, validUsername } from '../../api/temp';
import { useAppStore, VIEW } from '../../store';

const styles = {
  inputField: {
    marginBottom: "1em",
  },
}

export default function ChangeNameDialog() {
  const { view, setMainView } = useAppStore();

  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");

  function onCloseDialog() {
    setMainView();
    setNewUsername("");
    setPassword("");
    setHelpText("");
  }

  function onChangeUsername() {
    if (!correctPassword(password)) {
      setHelpText("Invalid password");
      return;
    }

    if (!validUsername(newUsername)) {
      setHelpText("New username must be 8 - 20 characters");
      return;
    }

    if (!uniqueUsername(newUsername)) {
      setHelpText("Username already taken");
      return;
    }

    changeUsername(newUsername);
    onCloseDialog();
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.CHANGE_USERNAME}
      onSlAfterHide={() => onCloseDialog()}
      label="Change Username"
    >
      <SlInput
        style={styles.inputField}
        helpText="Must be 8 - 20 characters"
        type="text"
        value={newUsername}
        onSlChange={(e) => setNewUsername(e.target.value)}
        placeholder="New Username"
      />
      <SlInput
        className="errorHelp"
        style={styles.inputField}
        helpText={helpText}
        type="password"
        value={password}
        onSlChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        passwordToggle
      />
      <SlButton onClick={() => onChangeUsername()}>
        Confirm
      </SlButton>
    </SlDialog>
  )
}

