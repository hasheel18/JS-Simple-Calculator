const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
      expression = "";
      display.textContent = "";
    } else if (action === "backspace") {
      expression = expression.slice(0, -1);
      display.textContent = expression;
    } else if (action === "calculate") {
      try {
        const result = Function("return " + expression)();
        display.textContent = result;
        expression = result.toString();
      } catch {
        display.textContent = "Error";
        expression = "";
      }
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});
