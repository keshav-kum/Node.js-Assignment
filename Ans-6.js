// calculator.js

// Function to perform calculations
function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          console.log("Error: Division by zero is not allowed.");
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.log("Error: Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'.");
        return;
    }
    console.log(`Result: ${result}`);
  }
  
  // Function to parse arguments and call the calculate function
  function main() {
    const args = process.argv.slice(2);
  
    if (args.length !== 3) {
      console.log("Usage: node calculator.js <operation> <num1> <num2>");
      console.log("Operations: add, subtract, multiply, divide");
      return;
    }
  
    const [operation, num1, num2] = args;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
  
    if (isNaN(number1) || isNaN(number2)) {
      console.log("Error: Both num1 and num2 must be numbers.");
      return;
    }
  
    calculate(operation, number1, number2);
  }
  
  // Execute the main function
  main();
  