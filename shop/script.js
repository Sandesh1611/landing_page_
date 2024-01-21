// Product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Cart class
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  getTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }
}

// Usage example
const cart = new Cart();

// Add products to the cart
const product1 = new Product(1, "Product 1", 19.99);
const product2 = new Product(2, "Product 2", 29.99);

cart.addItem(product1);
cart.addItem(product2);

// Remove a product from the cart
cart.removeItem(1);

// Get the total price of the items in the cart
const totalPrice = cart.getTotalPrice();
console.log("Total Price:", totalPrice);
