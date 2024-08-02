// Import the 'path' module
const path = require('path');

// Define a sample file path
const filePath = '/users/johndoe/documents/report.txt';

// 1. Get the base name of the file
const baseName = path.basename(filePath);
console.log(`Base name: ${baseName}`); // Output: report.txt

// 2. Get the directory name
const dirName = path.dirname(filePath);
console.log(`Directory name: ${dirName}`); // Output: /users/johndoe/documents

// 3. Get the file extension
const extName = path.extname(filePath);
console.log(`File extension: ${extName}`); // Output: .txt

// 4. Join paths
const newPath = path.join('/users/johndoe', 'projects', 'newreport.txt');
console.log(`Joined path: ${newPath}`); // Output: /users/johndoe/projects/newreport.txt

// 5. Resolve a relative path to an absolute path
const relativePath = '../projects/newreport.txt';
const absolutePath = path.resolve(relativePath);
console.log(`Absolute path: ${absolutePath}`);

// 6. Normalize a path
const messyPath = '/users/johndoe//documents/../reports//report.txt';
const normalizedPath = path.normalize(messyPath);
console.log(`Normalized path: ${normalizedPath}`); // Output: /users/johndoe/reports/report.txt

// 7. Get the platform-specific path delimiter
const delimiter = path.delimiter;
console.log(`Path delimiter: ${delimiter}`); // Output depends on platform, e.g., ':' on Unix, ';' on Windows

// 8. Check if a path is absolute
const isAbsolutePath = path.isAbsolute(filePath);
console.log(`Is absolute path: ${isAbsolutePath}`); // Output: true

// 9. Resolve a path to a relative one
const relativeFromBase = path.relative('/users/johndoe', '/users/johndoe/documents/report.txt');
console.log(`Relative path from base: ${relativeFromBase}`); // Output: documents/report.txt
