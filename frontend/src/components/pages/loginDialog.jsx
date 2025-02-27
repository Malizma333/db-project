import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useState } from 'preact/hooks';
import { validPassword } from '../../api/temp';
import { useLoginViewStore } from '../../stores/view';
import { useLoggedInStore } from '../../stores/userState';

const styles = {
  passwordField: {
    marginBottom: "1em",
  },
}

export default function LoginDialog() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");
  const loginOpen = useLoginViewStore((state) => state.visible);
  const closeLogin = useLoginViewStore((state) => state.hide);
  const logIn = useLoggedInStore((state) => state.logIn);

  function onCloseDialog() {
    closeLogin();
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
      open={loginOpen}
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
      <SlButton onClick={() => onLogIn(true)}>
        Log In
      </SlButton>
    </SlDialog>
  )
}

