import { SlDialog } from '@shoelace-style/shoelace/dist/react';
import { useAppStore, VIEW } from '../../store';
import TagPicker from '../widgets/tagPicker';

const styles = {
  summaryField: {
    marginBottom: "1em",
  },
}

export default function RecipeSummary() {
  const { view, setMainView } = useAppStore();

  function onCloseDialog() {
    setMainView();
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === VIEW.RECIPE_SUMMARY}
      onSlHide={(e) => onCloseDialog(e)}
      label={"Recipe Name Here"}
    >
      <div style={styles.summaryField}>{"Author Here"}</div>
      <div style={styles.summaryField}>{"Reference Here"}</div>
      <TagPicker
        variant="primary"
        selected={[]}
        viewMode
      ></TagPicker>
      <TagPicker
        variant="primary"
        selected={[]}
        viewMode
      ></TagPicker>
    </SlDialog>
  )
}

