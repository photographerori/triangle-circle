const display = document.getElementById("display");

display.onclick = function() {
  if (display.classList.contains("triangle")) {
    display.classList.remove("triangle");
    display.classList.add("square");
  } else if (display.classList.contains("rounded")) {
    display.classList.add("triangle");
    display.classList.remove("rounded");
    display.classList.remove("square");
  } else {
    display.classList.add("rounded");
  }
};
