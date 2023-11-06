/* 
   Filename: ComplexJavaScriptCode.js
   Content: Elaborate and complex JavaScript code demonstrating real-world application.
*/

// Define a class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  // Method to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  }
}

// Create instances of the Person class
const person1 = new Person('John Doe', 25);
const person2 = new Person('Jane Smith', 17);

// Call the greet method for each person
person1.greet(); // Output: Hello, my name is John Doe.
person2.greet(); // Output: Hello, my name is Jane Smith.

// Check if each person is an adult
console.log(person1.isAdult()); // Output: true
console.log(person2.isAdult()); // Output: false

// Define a class representing a product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Method to calculate the total value of the product
  getTotalValue() {
    return this.price * this.quantity;
  }
}

// Create instances of the Product class
const product1 = new Product('Apple', 1.5, 10);
const product2 = new Product('Banana', 0.5, 20);

// Calculate the total value of each product
console.log(product1.getTotalValue()); // Output: 15
console.log(product2.getTotalValue()); // Output: 10

// Define a class representing a shopping cart
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  // Method to add a product to the shopping cart
  addProduct(product) {
    this.products.push(product);
  }

  // Method to calculate the total value of the shopping cart
  getTotalValue() {
    let totalValue = 0;
    for (const product of this.products) {
      totalValue += product.getTotalValue();
    }
    return totalValue;
  }
}

// Create an instance of the ShoppingCart class
const shoppingCart = new ShoppingCart();

// Add products to the shopping cart
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);

// Calculate the total value of the shopping cart
console.log(shoppingCart.getTotalValue()); // Output: 25