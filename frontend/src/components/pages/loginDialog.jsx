import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useState } from 'preact/hooks';
import { correctCredentials } from '../../api/temp';
import { useAppStore, VIEW } from '../../store';

const styles = {
  inputField: {
    marginBottom: "1em",
  },
}

export default function LoginDialog() {
  const { view, logIn, setMainView } = useAppStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");

  function onCloseDialog() {
    setMainView();
    setUsername("");
    setPassword("");
    setHelpText("");
  }

  function onLogIn() {
    if (correctCredentials(username, password)) {
      logIn();
      onCloseDialog();
    } else {
      setHelpText("Invalid username or password");
    }
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.LOGIN_PROMPT}
      onSlAfterHide={() => onCloseDialog()}
      label="Log In"
    >
      <SlInput
        style={styles.inputField}
        type="text"
        value={username}
        onSlChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
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
      <SlButton onClick={() => onLogIn()}>
        Log In
      </SlButton>
    </SlDialog>
  )
}

