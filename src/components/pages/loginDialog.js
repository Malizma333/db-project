import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useState } from 'preact/hooks';

export default function LoginDialog({ dialogOpen, setDialogOpen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SlDialog
      class="dialog-overview"
      open={dialogOpen}
      onSlAfterHide={() => setDialogOpen(false)}
      label="Log In"
    >
      <SlInput type="text" value={username} onSlChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <SlInput type="password" value={password} onSlChange={(e) => setPassword(e.target.value)} placeholder="Password" passwordToggle />
      <SlButton onClick={() => console.log(username, password)}>
        Log In
      </SlButton>
    </SlDialog>
  )
}

