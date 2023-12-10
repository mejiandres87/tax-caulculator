// FileUtils.test.mjs
import { readInputFromFile } from '../../app/utils/FileUtils.mjs';
import { mocked } from 'ts-jest/utils';
import { readFileSync } from 'fs';

// Mock the 'fs' module
jest.mock('fs');

describe('FileUtils - readInputFromFile', () => {
  test('should read and process input file correctly', () => {
    const filePath = 'test-input.txt';
    const fileContent = 'line 1\nline 2\nline 3';
    const expectedLines = ['line 1', 'line 2', 'line 3'];

    // Mock 'readFileSync' with the desired behavior
    mocked(readFileSync).mockReturnValue(fileContent);

    const result = readInputFromFile(filePath);

    // Expect the result to match the expected lines
    expect(result).toEqual(expectedLines);

    // Expect 'readFileSync' to have been called with the correct arguments
    expect(readFileSync).toHaveBeenCalledWith(filePath, 'utf8');
  });

  test('should handle file reading error', () => {
    const filePath = 'nonexistent-file.txt';
    const expectedError = new Error('File not found');

    // Mock 'readFileSync' to throw an error
    mocked(readFileSync).mockImplementation(() => {
      throw expectedError;
    });

    const result = readInputFromFile(filePath);

    // Expect the result to be null (indicating an error)
    expect(result).toBeNull();

    // Expect 'readFileSync' to have been called with the correct arguments
    expect(readFileSync).toHaveBeenCalledWith(filePath, 'utf8');

    // Expect the error to be logged to the console
    expect(console.error).toHaveBeenCalledWith(`Error reading file: ${expectedError.message}`);
  });
});
