function load() {
  // const button = document.querySelector(".btn");

  // MediaQueryList object
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Toggles the "dark-mode" class based on if the media query matches
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("theme1", state);
  }

  // Initial setting
  toggleDarkMode(useDark.matches);

  // Listen for changes in the OS settings
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  // Toggles the "dark-mode" class on click
  // button.addEventListener("click", () => {
  //   document.documentElement.classList.toggle("theme1");
  // });
}

window.addEventListener("DOMContentLoaded", load);

const btn_toggle = document.querySelector("#btn-content");
const btn_switch = document.querySelector("#btn-switch");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll("#number");
let count = 0;

// theme toggle button
btn_toggle.addEventListener("click", () => {
  count++;
  if (count === 1) {
    btn_switch.classList.add("active-theme-2");
  } else if (count === 2) {
    btn_switch.classList.remove("active-theme-2");
    btn_switch.classList.add("active-theme-3");
  } else {
    btn_switch.classList.remove("active-theme-3");
    count = 0;
  }
  console.log(count);
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
      display.value += e.target.ariaValueText;
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
