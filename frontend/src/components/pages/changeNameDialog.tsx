import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { MutableRef, useRef, useState } from 'preact/hooks';
import { useAppStore, VIEW } from '../../store';
import { SlNotification } from '../widgets/notification';

import { changeUsername } from '../../api/user';
import ShoelaceElement from '@shoelace-style/shoelace/dist/internal/shoelace-element';

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
  const changeNameAlert: MutableRef<ShoelaceElement | null> = useRef(null);

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
      if (e instanceof Error) {
        setHelpText(e.message);
      }
      return;
    }

    onCloseDialog();
    // @ts-expect-error
    changeNameAlert.current && changeNameAlert.current.base.toast();
  }

  return (
    <SlDialog
      className="dialog-overview"
      open={view === VIEW.CHANGE_USERNAME}
      onSlAfterHide={() => onCloseDialog()}
      label="Change Username"
    >
      {/* @ts-expect-error */}
      <SlNotification message="Changed username successfully" variant="success" ref={changeNameAlert}></SlNotification>
      <SlInput
        style={styles.inputField}
        helpText="Must be 8 - 20 characters"
        type="text"
        value={newUsername}
        onSlChange={(e) => setNewUsername((e.target as any).value)}
        placeholder="New Username"
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
      <SlButton onClick={() => onChangeUsername()}>
        Confirm
      </SlButton>
    </SlDialog>
  )
}

