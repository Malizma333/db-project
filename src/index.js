import '@shoelace-style/shoelace/dist/themes/dark.css';
import './index.css';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { useState } from 'preact/hooks';

import Settings from './components/settings';
import Toolbar from './components/toolbar';
import RecipeDialog from './components/recipeDialog';
import Table from './components/table/table';
import PageNav from './components/pageNav';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/');

// arbitrary test values, will retrieve from database
const numPages = 10
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

export default function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [editMode, setEditMode] = useState(false);

  return (
    <div class="sl-theme-dark app-container">
      <Settings settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} />
      <RecipeDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <Toolbar
        setSettingsOpen={setSettingsOpen}
        setDialogOpen={setDialogOpen}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <Table editMode={editMode} pageData={pageData.slice(pageNumber * 10, (pageNumber + 1) * 10)} />
      <PageNav pageNumber={pageNumber} setPageNumber={setPageNumber} numPages={numPages} />
    </div>
  );
}
