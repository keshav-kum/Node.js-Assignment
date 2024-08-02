// Import the os module
const os = require('os');

// Retrieve and display information about the operating system
console.log('Operating System Information:');

// OS Type (e.g., Linux, Darwin for macOS, Windows_NT for Windows)
console.log(`OS Type: ${os.type()}`);

// OS Platform (e.g., 'linux', 'darwin', 'win32')
console.log(`OS Platform: ${os.platform()}`);

// OS Release version (e.g., '5.10.0-8-amd64', '21.6.0', '10.0.19042')
console.log(`OS Release: ${os.release()}`);

// Architecture of the CPU (e.g., 'x64', 'arm')
console.log(`CPU Architecture: ${os.arch()}`);

// Total system memory in bytes
console.log(`Total Memory: ${os.totalmem()} bytes`);

// Free system memory in bytes
console.log(`Free Memory: ${os.freemem()} bytes`);

// System uptime in seconds
console.log(`System Uptime: ${os.uptime()} seconds`);

// Hostname of the operating system
console.log(`Hostname: ${os.hostname()}`);

// Network interfaces
console.log('Network Interfaces:');
console.log(os.networkInterfaces());
