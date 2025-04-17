import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { MutableRef, useRef, useState } from 'preact/hooks';
import { useAppStore, VIEW } from '../../store';
import { SlNotification } from '../widgets/notification';

import { login } from '../../api/user';
import ShoelaceElement from '@shoelace-style/shoelace/dist/internal/shoelace-element';

const styles = {
  inputField: {
    marginBottom: "1em",
  },
}

export default function LoginDialog() {
  const { view, setMainView, setClientUsername } = useAppStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");
  const logInAlert: MutableRef<ShoelaceElement | null> = useRef(null);

  function onCloseDialog() {
    setMainView();
    setUsername("");
    setPassword("");
    setHelpText("");
  }

  async function onLogIn() {
    try {
      await login(username, password);
      setClientUsername(username);
      onCloseDialog();
      // @ts-expect-error
      logInAlert.current && logInAlert.current.base.toast();
    } catch (e) {
      if (e instanceof Error) {
        setHelpText(e.message);
      }
    }
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.LOGIN_PROMPT}
      onSlAfterHide={() => onCloseDialog()}
      label="Log In"
    >
      {/* @ts-expect-error */}
      <SlNotification message="Logged in successfully" variant="success" ref={logInAlert}></SlNotification>
      <SlInput
        style={styles.inputField}
        type="text"
        value={username}
        onSlChange={(e) => setUsername((e.target as any).value)}
        placeholder="Username"
      ></SlInput>
      <SlInput
        className="errorHelp"
        style={styles.inputField}
        helpText={helpText}
        type="password"
        value={password}
        onSlChange={(e) => setPassword((e.target as any).value)}
        placeholder="Password"
        passwordToggle
      ></SlInput>
      <SlButton onClick={() => onLogIn()}>
        Log In
      </SlButton>
    </SlDialog>
  )
}

