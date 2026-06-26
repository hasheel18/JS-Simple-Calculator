# Simple Calculator 🧮

A responsive calculator web application built using **HTML, CSS, and JavaScript**.  
It performs basic arithmetic operations with proper operator precedence and a clean centered UI.

## Features ✨

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Decimal point (`.`)
- Clear input (`C`)
- Backspace (`X`)
- Evaluate expression (`=`)
- Button-based input only
- Displays the current expression and result
- Supports correct mathematical precedence
- Centered calculator layout
- Grid-based button arrangement
- Hover effects on buttons

## Tech Stack 💻

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure 📁

```bash
calculator-project/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works ⚙️

- Users enter numbers and operators using buttons.
- The typed expression is displayed on the screen.
- The `X` button removes the last entered character.
- The `C` button clears the full input.
- The `=` button evaluates the expression and shows the result.
- The calculator follows operator precedence, so multiplication and division are handled before addition and subtraction.

## How to Run 🚀

1. Clone the repository:
```bash
git clone https://github.com/your-username/calculator-project.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

## Usage Example 🧠

Example expression:

```text
12 + 4 * 3
```

Result:

```text
24
```

Because multiplication is performed before addition.

## Constraints Followed ✅

- `eval()` is not used.
- No external libraries are used.
- The calculator logic is implemented using vanilla JavaScript only.
