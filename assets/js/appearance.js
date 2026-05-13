document.documentElement.classList.add("dark");

function getCSSValue(varName) {
  var cssValue = window.getComputedStyle(document.documentElement).getPropertyValue(varName);
  return "rgb(" + cssValue.trim() + ")";
}

function setThemeColor() {
  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  if (!metaThemeColor) {
    return false;
  }
  metaThemeColor.setAttribute("content", getCSSValue("--color-neutral-800"));
  return true;
}

function add_to_top_elem() {
  var body = document.body;
  var html = document.documentElement;

  const height =
    Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    ) - 150;

  const elem = document.getElementById("to-top");
  if (elem === null || elem === undefined) {
    return;
  }

  elem.hidden = height < window.innerHeight;
}

window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("dark");
  try {
    localStorage.setItem("appearance", "dark");
  } catch {
    // Dark mode is already applied; this only updates older saved preferences.
  }
  add_to_top_elem();
  setThemeColor();
});
