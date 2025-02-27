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
  loggedIn: false,
  allAllergens: ["Gluten", "Nuts", "Cheese", "Shellfish"],
  allIngredients: ["Bread", "Cheese", "Ham", "Turkey", "Butter", "Pasta Sauce"],
  allAuthors: ["Alice", "Bob"],
  columns: ["name", "author", "allergens", "reference", "ingredients"]
}

export function validPassword (user, pass) {
  return user === 'test' && pass === 'test';
}

// let socket = new WebSocket("ws://localhost:5000")
// socket.onmessage = function(event) {
//   console.log(event.data)
// }