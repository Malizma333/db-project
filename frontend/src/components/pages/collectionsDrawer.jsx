import { SlDrawer, SlCard, SlCopyButton, SlInput, SlButton, SlIcon, SlIconButton } from "@shoelace-style/shoelace/dist/react";
import { useAppStore, VIEW } from "../../store";
import { DB_DATA } from "../../api/temp";

const styles = {
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  collectionTitle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  collectionCard: {
    marginBottom: "1em",
    flex: 1,
    width: "100%",
  },
};

export default function CollectionsDrawer() {
  const { view, setMainView } = useAppStore();

  function onHide(e) {
    // Prevent event bubbling caused by inner menu elements
    if (e.eventPhase === Event.AT_TARGET) {
      setMainView();
    } else {
      e.preventDefault()
    }
  }

  function onAddCollection() {
    console.log("Add collection");
  }

  return (
    <SlDrawer
      class="drawer-placement-start"
      open={view === VIEW.COLLECTIONS_LIST}
      onSlHide={(e) => onHide(e)}
      placement="start"
      label="Collections"
    >
      <div style={styles.root}>
        {DB_DATA.collectionArray.map((collection) => {
          return (
            <SlCard style={styles.collectionCard}>
              <div slot="header" style={styles.collectionTitle}>
                <SlInput
                  className="collectionsName"
                  filled
                  value={collection.name}
                ></SlInput>
                <SlCopyButton
                  value={window.location.origin + "/?id=" + collection.id}
                  copyLabel="Share Collection"
                  successLabel="Copied"
                  errorLabel="Failed to copy"
                >
                  <SlIcon name="share" slot="copy-icon"></SlIcon>
                </SlCopyButton>
                <SlIconButton name="trash" label="Delete Collection"></SlIconButton>
              </div>
              Included recipes: {collection.numRecipes}
            </SlCard>
          );
        })}
        <SlIconButton name="plus" label="Add Collection" style={{fontSize: "2em"}}></SlIconButton>
      </div>
    </SlDrawer>
  )
}