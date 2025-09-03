# String Calculator Kata (JavaScript + Jest)

This project is an implementation of the **String Calculator TDD Kata** in plain JavaScript.  
It follows the principles of **Test-Driven Development (TDD)** with unit tests written using **Jest**.

---

## 🚀 Features Implemented

- Return 0 for an empty string
- Return the number itself for a single number
- Add two comma-separated numbers
- Support any amount of comma-separated numbers
- Handle new lines (`\n`) as delimiters
- Support custom delimiters (e.g. `//;\n1;2`)
- Throw an error when negative numbers are passed
- Show all negative numbers in the error message

---

## 🛠️ Tech Stack

- **JavaScript (ES Modules)**
- **Jest** (for testing)
- **Babel** (for Jest + ESM support)

---

## 📂 Project Structure

string-calculator/
├── string-calculator.js # Implementation
├── string-calculator.test.js # Unit tests
├── babel.config.cjs # Babel config
├── package.json
└── README.md

---

## 🧪 Running Tests

Install dependencies:
npm install

Run tests:
npm test
