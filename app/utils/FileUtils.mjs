import { readFileSync } from 'fs';

export function readInputFromFile(filePath) {
  try {
    const fileContent = readFileSync(filePath, 'utf8');
    
    const lines = fileContent.split('\n');

    return lines;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    return null;
  }
}
