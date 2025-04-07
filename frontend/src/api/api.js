// TODO: arbitrary test values, will retrieve from database
export async function init() {
  try {
    const response = await fetch('api', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "example" }),
    });
    const data = await response.text();
    console.log(data);
  } catch(e) {
    console.error(e.message);
  }
}

export const DB_DATA = {
  collectionArray: [
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"},
    {name: "First Collection", numRecipes: 2, id: "test_string"}
  ],
  collectionData: [
    {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten", "Shellfish"], reference: "Some Book", ingredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"] },
  ],
  allAllergens: ["Gluten", "Nuts", "Shellfish"],
  allIngredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"],
  allAuthors: ["Alice", "Bob"],
  columns: ["name", "author", "allergens", "reference", "ingredients"]
}

export const USER_DATA = {
  username: "test",
  password: "test"
}

export function correctCredentials (user, pass) {
  return user === USER_DATA.username && pass === USER_DATA.password;
}

export function correctPassword (pass) {
  return pass === USER_DATA.password;
}

export function validPassword (pass) {
  return 8 <= pass.length && pass.length <= 20;
}

export function validUsername (name) {
  return 8 <= name.length && name.length <= 20;
}

export function uniqueUsername (name) {
  return name !== USER_DATA.username;
}

export function changePassword (pass) {
  USER_DATA.password = pass;
}

export function changeUsername (name) {
  USER_DATA.username = name;
}
