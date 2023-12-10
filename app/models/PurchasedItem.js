export default class PurchasedItem {
  static exemptKeywords = ['book', 'food', 'medical', 'pills', 'chocolate', 'books', 'chocolates', 'sandwich', 'capsules', 'cough syrup'];

  constructor(quantity, description, price, isImported = false) {
    this.quantity = quantity;
    this.description = description;
    this.price = price;
    this.isImported = isImported;
    this.isExempt = this.checkIfExempt();
    this.taxes = this.calculateTaxes();
  }

  checkIfExempt() {
    return PurchasedItem.exemptKeywords.some(keyword => this.description.toLowerCase().includes(keyword));
  }

  calculateTaxes() {
    this.salesTaxRate = 0.1;
    this.importDutyRate = 0.05;
    let taxes = 0;

    if (!this.isExempt) {
      taxes += this.roundToNearest5Cents(this.price * this.salesTaxRate);
    }

    if (this.isImported) {
      taxes += this.roundToNearest5Cents(this.price * this.importDutyRate);
    }

    return taxes;
  }

  getTotalPrice() {
    return (this.price + this.taxes) * this.quantity;
  }

  roundToNearest5Cents(value) {
    return Math.ceil(value / 0.05) * 0.05;
  }
}

