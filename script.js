const display = document.querySelector(".display >p");
const btns = document.querySelectorAll("button");
let op1 = "0";
let op2 = "";
let operator = "";
display.textContent = op1;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cont = btn.textContent;
    if (cont.match(/[\d.]/)) {
      digit(cont);
      display.textContent = op1 + operator + op2;
      return;
    }
    if (cont.match(/[+\-*/]/) && cont !== "+/-") {
      if (!operator) {
        operator = cont;
        display.textContent = op1 + operator + op2;
        return;
      }
      if (op2) {
        op1 = calculate(op1, operator, op2);
        op2 = "";
      }
      operator = cont;
      display.textContent = op1 + operator + op2;
      return;
    }
    switch (cont) {
      case "AC":
        op1 = "0";
        op2 = "";
        operator = "";
        break;
      case "+/-":
        op1 *= -1;
        break;
      case "=":
        if (op2 && operator) {
          op1 = calculate(op1, operator, op2);
          operator = "";
          op2 = "";
        }
        display.textContent = op1 + operator + op2;
        break;
      case "%":
        op1 /= 100;
    }
    display.textContent = op1 + operator + op2;
  });
});
function digit(value) {
  console.log(value);
  if (op1 === "0" && !operator) {
    op1 = value === "." ? op1 + value : value;
    if (value === "." && op1.includes(".")) {
      return;
    }
    return;
  }
  if (!operator) {
    if (value === "." && op1.includes(".")) {
      return;
    }
    op1 += value;
  } else {
    if (value === "." && op2.includes(".")) {
      return;
    }
    op2 += value;
  }
}
function calculate(a, o, b) {
  switch (o) {
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "+":
      return +a + +b;
    case "-":
      return a - b;
  }
}
