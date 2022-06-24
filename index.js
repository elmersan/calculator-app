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
let count = 0;

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
