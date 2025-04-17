import { SlCard, SlCopyButton, SlInput, SlIcon, SlIconButton, SlTooltip } from "@shoelace-style/shoelace/dist/react";
import { removeRecipeCollection, useCollectionName, useRecipeCount } from "src/api/recipeCollection";

const styles = {
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

export default function CollectionCard(
  { collectionId, searchTerm } :
  { collectionId: number, searchTerm: string }
) {

  const { data: collectionName } = useCollectionName(collectionId);
  const { data: recipeCount } = useRecipeCount(collectionId);

  async function onDeleteCollection(id: number) {
    try {
      await removeRecipeCollection(id);
    } catch(e) {
      console.error(e);
    }
  }

  return !searchTerm.includes(collectionName || "") ? null : (
    <SlCard style={styles.collectionCard}>
      <div slot="header" style={styles.collectionTitle}>
        <SlInput
          className="collectionsName"
          filled
          value={collectionName}
          placeholder={`Collection ${collectionId}`}
        ></SlInput>
        <SlCopyButton
          value={window.location.origin + "/collection/" + collectionId}
          copyLabel="Share Collection"
          successLabel="Copied"
          errorLabel="Failed to copy"
        >
          <SlIcon name="share" slot="copy-icon"></SlIcon>
        </SlCopyButton>
        <SlTooltip content="Delete Collection">
          <SlIconButton
            name="trash"
            label="Delete Collection"
            onClick={() => {void onDeleteCollection(collectionId)}}
          ></SlIconButton>
        </SlTooltip>
      </div>
      Included recipes: {recipeCount}
    </SlCard>
  );
}