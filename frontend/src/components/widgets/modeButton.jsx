import { SlButton, SlIcon } from "@shoelace-style/shoelace/dist/react";
import { useAppStore } from "../../store";

const styles = {
  root: {
    bottom: "20px",
    position: "absolute",
    right: "20px",
  },
}

export default function ModeButton() {
  const { editMode, toggleEditMode } = useAppStore();

  return (
    <SlButton style={styles.root} variant="default" size="medium" circle onClick={() => toggleEditMode()}>
      <SlIcon name={editMode ? "eye" : "pencil"} label="Switch mode"></SlIcon>
    </SlButton>
  );
}