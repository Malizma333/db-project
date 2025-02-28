// arbitrary test values, will retrieve from database
export const DB_DATA = {
  collectionData: [
    {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {name: "Ravioli", author: "Alice", allergens: ["Gluten", "Cheese"], reference: "http://www.example.com/", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book", ingredients: ["Bread", "Cheese"] },
    {name: "Spaghetti", author: "Bob", allergens: ["Gluten"], reference: "Some Book", ingredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"] },
  ],
  allAllergens: ["Gluten", "Nuts", "Cheese", "Shellfish"],
  allIngredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"],
  allAuthors: ["Alice", "Bob"],
  columns: ["name", "author", "allergens", "reference", "ingredients"]
}

const USER_DATA = {
  username: "test",
  password: "test"
}

export function validCreds (user, pass) {
  return user === USER_DATA.username && pass === USER_DATA.password;
}

export function correctPassword (pass) {
  return pass === USER_DATA.password;
}

export function validPassword (pass) {
  return 8 <= pass.length && pass.length <= 20;
}

export function changePassword (pass) {
  USER_DATA.password = pass;
}

// let socket = new WebSocket("ws://localhost:5000")
// socket.onmessage = function(event) {
//   console.log(event.data)
// }