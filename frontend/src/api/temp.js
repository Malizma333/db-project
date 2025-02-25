// arbitrary test values, will retrieve from database
export const DB_DATA = {
  pageData: [
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
  ],
  loggedIn: false
}

export function validPassword (user, pass) {
  return user === 'test' && pass === 'test';
}