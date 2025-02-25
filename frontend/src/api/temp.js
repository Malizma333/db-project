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

let socket = new WebSocket("ws://localhost:5000")
socket.onmessage = function(event) {
  console.log(event.data)
}