import PurchasedItem from './models/PurchasedItem.js';

// Example usage:
const item1 = new PurchasedItem(2, 'book', 12.49, true);
const item2 = new PurchasedItem(1, 'music CD', 14.99);
const item3 = new PurchasedItem(1, 'chocolate bar', 0.85);

console.log(item1.getTotalPrice());
console.log(item2.getTotalPrice());
console.log(item3.getTotalPrice());
