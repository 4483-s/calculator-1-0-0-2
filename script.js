const display = document.querySelector(".display >p");
const btns = document.querySelectorAll("button");
display.textContent = "0";
let op1 = "0";
let op2 = "";
let operator = "";
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent.match(/\d/)) {
      digit(btn.textContent);
      return;
    }
    switch (btn.textContent) {
      case "+":
        operator = "+";
        break;
      case "-":
        operator = "-";
        break;
      case "*":
        operator = "*";
        break;
      case "/":
        operator = "/";
        break;
      case "AC":
        op1 = "0";
        op2 = "";
        operator = "";
        break;
    }
  });
});
function digit(value) {
  if (op1 === "0") {
    op1 = value;
    return;
  }
  if (!operator) {
    op1 += value;
    display.textContent = op1;
  } else {
    op2 += value;
  }
}

//

function calculate(a, o, b) {
  switch (o) {
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "+":
      return a + b;
    case "-":
      return a - b;
  }
}
