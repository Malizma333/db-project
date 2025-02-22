import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useState } from 'preact/hooks';
import { validPassword } from '../../api/temp';

export default function LoginDialog({ dialogOpen, setDialogOpen, setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");

  const onCloseDialog = () => {
    setDialogOpen(false);
    setUsername("");
    setPassword("");
    setHelpText("");
  }

  const onLogIn = () => {
    if (validPassword(username, password)) {
      setLoggedIn(true);
      onCloseDialog();
    } else {
      setHelpText("Invalid username or password");
    }
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={dialogOpen}
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
        class="password-field"
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

