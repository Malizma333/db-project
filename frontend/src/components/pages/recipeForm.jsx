import { SlInput, SlDialog, SlButton } from '@shoelace-style/shoelace/dist/react';
import { useRef, useState } from 'preact/hooks';
import { useAppStore } from '../../store';
import { SlNotification } from '../widgets/notification';
import TagPicker from '../widgets/tagPicker';
import { DB_DATA } from '../../api';

const styles = {
  inputField: {
    marginBottom: "1em",
  },
}

export default function RecipeForm({ formTitle, submitLabel, submitMessage, viewState }) {
  const { activeRecipeId, view, setMainView } = useAppStore();

  const recipeData = DB_DATA.collectionData[activeRecipeId];
  const [recipeName, setRecipeName] = useState("");
  const [author, setAuthor] = useState("");
  const [reference, setReference] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [allergens, setAllergens] = useState([]);

  setRecipeName(recipeData.name);
  setAuthor(recipeData.author);
  setReference(recipeData.reference);
  setIngredients(recipeData.ingredients);
  setAllergens(recipeData.allergens);

  const submitAlert = useRef(null);

  function onCloseDialog(e) {
    // Prevent event bubbling caused by inner menu elements
    if (e.eventPhase !== Event.AT_TARGET) {
      e.preventDefault();
      return;
    }

    setMainView();
  }

  function onAddRecipe(e) {
    console.log({ activeRecipeId, recipeName, author, reference, allergens, ingredients });
    onCloseDialog(e);
    submitAlert.current.base.toast();
  }

  return (
    <SlDialog
      class="dialog-overview"
      open={view === viewState}
      onSlHide={(e) => onCloseDialog(e)}
      label={formTitle}
    >
      <SlNotification message={submitMessage} variant="success" ref={submitAlert}></SlNotification>
      <SlInput
        style={styles.inputField}
        type="text"
        value={recipeName}
        onSlChange={(e) => setRecipeName(e.target.value)}
        placeholder="Recipe Name"
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="text"
        value={author}
        onSlChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      ></SlInput>
      <SlInput
        style={styles.inputField}
        type="text"
        value={reference}
        onSlChange={(e) => setReference(e.target.value)}
        placeholder="Reference"
      ></SlInput>
      <TagPicker
        variant="primary"
        available={DB_DATA.allAllergens}
        selected={allergens}
        setSelected={setAllergens}
      ></TagPicker>
      <TagPicker
        variant="primary"
        available={DB_DATA.allIngredients}
        selected={ingredients}
        setSelected={setIngredients}
      ></TagPicker>
      <SlButton onClick={(e) => onAddRecipe(e)}>
        {submitLabel}
      </SlButton>
    </SlDialog>
  )
}

