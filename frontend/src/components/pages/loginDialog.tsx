import {
  SlInput,
  SlDialog,
  SlButton,
} from "@shoelace-style/shoelace/dist/react";
import { useRef, useState } from "preact/hooks";
import { useAppStore, VIEW } from "../../store";
import { Notification } from "../widgets/notification";
import { login } from "../../api/user";
import { useQueryClient } from "@tanstack/react-query";
import type SlInputElement from "@shoelace-style/shoelace/dist/components/input/input.js";
import type SlAlertElement from "@shoelace-style/shoelace/dist/components/alert/alert.js";

const styles = {
  inputField: {
    marginBottom: "1em",
  },
};

export default function LoginDialog() {
  const { view, setMainView, setClientUsername, setSessionAlert } =
    useAppStore();

  const queryClient = useQueryClient();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [helpText, setHelpText] = useState("");
  const logInAlert = useRef<null | SlAlertElement>(null);

  function onCloseDialog() {
    setMainView();
    setUsername("");
    setPassword("");
    setHelpText("");
  }

  async function onLogIn() {
    try {
      await login(username, password);
      await queryClient.invalidateQueries({ queryKey: ["loggedIn"] });
      setClientUsername(username);
      setSessionAlert(false);
      onCloseDialog();
      if (logInAlert.current !== null) {
        await logInAlert.current.toast();
      }
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
      <Notification
        message="Logged in successfully"
        variant="success"
        childRef={logInAlert}
      ></Notification>
      <SlInput
        style={styles.inputField}
        type="text"
        value={username}
        onSlChange={(e) => setUsername((e.target as SlInputElement).value)}
        placeholder="Username"
      ></SlInput>
      <SlInput
        className="errorHelp"
        style={styles.inputField}
        helpText={helpText}
        type="password"
        value={password}
        onSlChange={(e) => setPassword((e.target as SlInputElement).value)}
        placeholder="Password"
        passwordToggle
      ></SlInput>
      <SlButton
        onClick={() => {
          void onLogIn();
        }}
      >
        Log In
      </SlButton>
    </SlDialog>
  );
}
