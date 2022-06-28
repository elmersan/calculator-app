function load() {
  const btn_toggle = document.querySelector("#btn-content");
  const btn_switch = document.querySelector("#btn-switch");
  const display = document.querySelector("#display");
  const numbers = document.querySelectorAll(".number");
  const del = document.getElementById("del");
  const theme = document.getElementById("theme");

  const sum = document.getElementById("sum");
  const multiplication = document.getElementById("multiplication");
  const subtract = document.getElementById("subtract");
  const division = document.getElementById("division");

  const equal = document.getElementById("equal");

  const operationDisplay = document.getElementById("operationDisplay");

  let count = 0;
  let countPoint = 0;

  // theme toggle button
  btn_toggle.addEventListener("click", () => {
    count++;
    if (count === 1) {
      btn_switch.classList.add("active-theme-2");
      theme.setAttribute("href", "./styles/theme2.css");
    } else if (count === 2) {
      btn_switch.classList.remove("active-theme-2");
      btn_switch.classList.add("active-theme-3");
      theme.setAttribute("href", "./styles/theme3.css");
    } else {
      btn_switch.classList.remove("active-theme-3");
      theme.setAttribute("href", "./styles/theme1.css");
      count = 0;
    }
  });

  // display number format
  // input_number.addEventListener("keyup", (e) => {
  //   console.log(input_number.value);
  //   console.log(new Intl.NumberFormat("es-MX").format(input_number.value));

  //   const number = new Intl.NumberFormat("es-MX").format(input_number.value);

  //   input_number.value = number;
  // });

  if (numbers.length > 0) {
    numbers.forEach((number) => {
      number.addEventListener("click", (e) => {
        let newNumber;

        if (display.value.length === 0 && e.target.innerText === ".") return;

        if (e.target.innerText === "." && countPoint < 1) {
          display.value += e.target.innerText;
          countPoint++;
        } else if (e.target.innerText !== ".") {
          display.value += e.target.innerText;
          console.log(parseFloat(display.value));
          newNumber = display.value.replace(/,/g, "");
          // newNumber = parseFloat(display.value);

          console.log(newNumber);
          const number = new Intl.NumberFormat("es-MX").format(newNumber);

          display.value = number;
        } else {
          return;
        }

        cursorEnd();
      });
    });
  }

  function cursorEnd() {
    let length = display.value.length;

    if (display.setSelectionRange) {
      display.focus();
      display.setSelectionRange(length, length);
    } else if (display.createTextRange) {
      let t = display.createTextRange();
      t.collapse(true);
      t.moveEnd("character", length);
      t.moveStart("character", length);
      t.select;
    }
  }

  function addOperation(operation) {
    operationDisplay.innerHTML =
      operationDisplay.innerText + " " + display.value + operation;
    display.value = "";
  }

  del.addEventListener("click", () => {
    display.value = display.value.substring(0, display.value.length - 1);
  });

  // OPERATIONS
  sum.addEventListener("click", () => {
    addOperation(" + ");
  });

  multiplication.addEventListener("click", () => {
    addOperation(" x ");
  });

  subtract.addEventListener("click", () => {
    addOperation(" - ");
  });

  division.addEventListener("click", () => {
    addOperation(" / ");
  });

  equal.addEventListener("click", () => {
    operationDisplay.innerHTML =
      operationDisplay.innerText + " " + display.value;
    const newOperation = operationDisplay.innerHTML.replace(/x/g, "*");

    display.value = eval(newOperation.replace(/,/g, ""));
  });
}

window.addEventListener("DOMContentLoaded", load);
