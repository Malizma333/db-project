import { SlDrawer, SlCard, SlCopyButton, SlInput, SlIcon, SlIconButton, SlTooltip } from "@shoelace-style/shoelace/dist/react";
import { useAppStore, VIEW } from "../../store";

import { DB_DATA } from "../../api";

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

  // TODO: Make sure collection searching works with placeholder recipe names

  return (
    <SlDrawer
      class="drawer-placement-start"
      open={view === VIEW.COLLECTIONS_LIST}
      onSlHide={(e) => onHide(e)}
      placement="start"
      label="Collections"
    >
      <div style={styles.root}>
        <SlInput
          style={styles.collectionCard}
          clearable
          type="search"
          placeholder="Find a collection..."
        ></SlInput>
        {DB_DATA.collectionArray.map((collection) => {
          return (
            <SlCard style={styles.collectionCard}>
              <div slot="header" style={styles.collectionTitle}>
                <SlInput
                  className="collectionsName"
                  filled
                  value={collection.name}
                  placeholder={`Collection ${collection.id}`}
                ></SlInput>
                <SlCopyButton
                  value={window.location.origin + "/?id=" + collection.id}
                  copyLabel="Share Collection"
                  successLabel="Copied"
                  errorLabel="Failed to copy"
                >
                  <SlIcon name="share" slot="copy-icon"></SlIcon>
                </SlCopyButton>
                <SlTooltip content="Delete Collection">
                  <SlIconButton name="trash" label="Delete Collection"></SlIconButton>
                </SlTooltip>
              </div>
              Included recipes: {collection.numRecipes}
            </SlCard>
          );
        })}
        <SlTooltip content="Add Collection">
          <SlIconButton name="plus" label="Add Collection" style={{fontSize: "2em"}}></SlIconButton>
        </SlTooltip>
      </div>
    </SlDrawer>
  )
}