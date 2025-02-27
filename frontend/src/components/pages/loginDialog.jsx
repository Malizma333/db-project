import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useState } from 'preact/hooks';
import { validPassword } from '../../api/temp';
import { useAppStore, VIEW } from '../../store';

const styles = {
  passwordField: {
    marginBottom: "1em",
  },
}

export default function LoginDialog() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");
  const { view, logIn, setMainView } = useAppStore();

  function onCloseDialog() {
    setMainView();
    setUsername("");
    setPassword("");
    setHelpText("");
  }

  function onLogIn() {
    if (validPassword(username, password)) {
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
        type="text"
        value={username}
        onSlChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <SlInput
        style={styles.passwordField}
        helpText={helpText}
        type="password"
        value={password}
        onSlChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        passwordToggle
      />
      <SlButton onClick={() => onLogIn()}>
        Log In
      </SlButton>
    </SlDialog>
  )
}

