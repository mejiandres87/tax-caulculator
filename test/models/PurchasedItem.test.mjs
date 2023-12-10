import PurchasedItem from '../../app/models/PurchasedItem';

describe('PurchasedItem', () => {
  test('should calculate taxes correctly for an exempt item', () => {
    const exemptItem = new PurchasedItem(1, 'book', 10.00);
    expect(exemptItem.taxes).toBe(0);
  });

  test('should calculate taxes correctly for a non-exempt item', () => {
    const nonExemptItem = new PurchasedItem(1, 'music CD', 14.99);
    expect(nonExemptItem.taxes).toBeCloseTo(1.50); 
  });

  test('should calculate taxes correctly for an imported item', () => {
    const importedItem = new PurchasedItem(1, 'imported perfume', 27.99, true);
    expect(importedItem.taxes).toBeCloseTo(4.20); 
  });

  test('should calculate total price of an exempt item correctly', () => {
    const item = new PurchasedItem(2, 'chocolate bar', 0.85);
    expect(item.getTotalPrice()).toBeCloseTo(1.70);
  });

  test('should calculate total price of a non-exempt item correctly', () => {
    const nonExemptItem = new PurchasedItem(3, 'music box', 25.15);
    expect(nonExemptItem.getTotalPrice()).toBeCloseTo(83.10);
  });

  test('should calculate total price of an imported item correctly', () => {
    const importedItem = new PurchasedItem(5, 'imported china figures', 15.30, true);
    expect(importedItem.getTotalPrice()).toBeCloseTo(88.25);
  })
});
