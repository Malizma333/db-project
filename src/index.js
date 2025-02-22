import '@shoelace-style/shoelace/dist/themes/dark.css';
import './index.css';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { useState } from 'preact/hooks';

import Settings from './components/pages/settings';
import Toolbar from './components/toolbar';
import RecipeDialog from './components/pages/recipeDialog';
import Table from './components/widgets/table';
import PageNav from './components/widgets/pageNav';
import LoginDialog from './components/pages/loginDialog';

// used for importing icons without copying into public directory
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/');

// arbitrary test values, will retrieve from database
const pageData = [
  {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/" },
  {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/" },
  {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/" },
  {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/" },
  {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/" },
  {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/" },
  {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/" },
  {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book" },
  {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book" },
  {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book" },
  {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book" },
  {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book" },
  {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book" },
  {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book" },
  {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book" },
]
const rowsPerPage = 10;
const numPages = Math.ceil(pageData.length / rowsPerPage);

export default function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [recipeDialogOpen, setRecipeDialogOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [editMode, setEditMode] = useState(false);

  return (
    <div class="sl-theme-dark app-container">
      <Settings settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} />
      <RecipeDialog dialogOpen={recipeDialogOpen} setDialogOpen={setRecipeDialogOpen} />
      <LoginDialog dialogOpen={loginDialogOpen} setDialogOpen={setLoginDialogOpen} />
      <Toolbar
        setSettingsOpen={setSettingsOpen}
        setRecipeDialogOpen={setRecipeDialogOpen}
        setLoginDialogOpen={setLoginDialogOpen}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <Table editMode={editMode} pageData={pageData.slice(pageNumber * rowsPerPage, (pageNumber + 1) * rowsPerPage)} />
      <PageNav pageNumber={pageNumber} setPageNumber={setPageNumber} numPages={numPages} />
    </div>
  );
}
