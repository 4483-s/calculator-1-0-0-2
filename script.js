const display = document.querySelector(".display >p");
const btns = document.querySelectorAll("button");
//DOM
display.textContent = "0";
let operation = "0";
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.textContent.match(/[.\d]/)) {
      getDigit(e.target.textContent);
    } else {
      fn(e.target.textContent);
    }
  });
});
const re = new RegExp(/[-/*+=]/);
function getDigit(content) {
  if (operation === "0") {
    if (content === ".") {
      operation += content;
    } else operation = content;
  } else {
    if (false && content === ".") {
      return;
    } else {
      operation += content;
    }
  }
  display.textContent = operation;
}
function fn(content) {
  // console.log(content);
  const operationSplited = operation.trim().split(" ");
  opLength = operationSplited.length;
  //AC reaction
  if (content === "AC") {
    operation = "0";
    display.textContent = operation;
  }
  //
  else if (content === "+/-") {
    operation = operationSplited[0] * -1 + "";
  } else if (content === "%") {
    operation = operationSplited * 0.01 + "";
  } else if (content.match(re)) {
    if (operationSplited.filter((x) => x !== "").length === 2) {
      operation = operation.replace(operation.at(-2), content);
    }
    //
    else if (opLength === 3) {
      if (operationSplited[1] === "-") {
        operation = operationSplited[0] - operationSplited[2] + ` ${content} `;
      } else if (operationSplited[1] === "+") {
        operation =
          +operationSplited[0] + +operationSplited[2] + ` ${content} `;
      } else if (operationSplited[1] === "/") {
        operation = operationSplited[0] / operationSplited[2] + ` ${content} `;
      } else if (operationSplited[1] === "*") {
        operation = operationSplited[0] * operationSplited[2] + ` ${content} `;
      }
    } else {
      operation += ` ${content} `;
    }

    if (operation.includes("=")) {
      operation = operation.slice(0, -3);
    }
  }
  display.textContent = operation;

  console.log(operation);
}
