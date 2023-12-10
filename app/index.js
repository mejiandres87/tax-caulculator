import PurchasedItem from './models/PurchasedItem.js';
import { readInputFromFile } from './utils/FileUtils.mjs';

function parseLineIntoItem(inputString) {
  try {
    const firstSlice = inputString.trim().split(' at');
    if(firstSlice.length < 2) {
      console.error("Error creating PruchasedItem: Wrong format");
      return null;
    }
    const price = parseFloat(firstSlice[1]);

    const secondSlice = firstSlice[0].split(/(?<=^\S+)\s/);
    if(secondSlice < 2) {
      console.error("Error creating PruchasedItem: Wrong format");
      return null;
    }
    const quantity = secondSlice[0];
    const description = secondSlice[1].trim();
    const isImported = description.includes('imported');

    return new PurchasedItem(quantity, description, price, isImported);
  } catch (error) {
    console.error(`Error creating PurchasedItem: ${error.message}`);
    return null;
  }
}

const filePath = process.argv.slice(2)[0];
if(filePath == null) {
  console.error(`File path should not be null`);
} else {
  const inputLines = readInputFromFile(filePath);
  let totalTaxes = 0;
  let totalSale = 0;
  inputLines.forEach((line) => {
    const item = parseLineIntoItem(line);
    if(item != null) {
      console.log(`${item.quantity} ${item.description}: ${item.getTotalPrice().toFixed(2)}`);
      totalTaxes += item.getTotalTaxes();
      totalSale += item.getTotalPrice();
    }
  });
  
  console.log(`Sales Taxes: ${totalTaxes.toFixed(2)}`);
  console.log(`Total: ${totalSale.toFixed(2)}`);
}


