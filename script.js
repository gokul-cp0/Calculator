let display = document.getElementById("display");

function press(value) {
  switch (value) {
    case "CE":
    case "C":
      clearDisplay();
      break;
    case "<":
      if (display.value != "Error") {
        display.value = display.value.slice(0, -1);
      }
      break;
    case "1byX":
      if (display.value !== "") {
        display.value = 1 / parseFloat(display.value);
      }
      break;
    case "x2":
      if (display.value !== "") {
        display.value = Math.pow(parseFloat(display.value), 2);
      }
      break;
    case "²√x":
      if (display.value !== "") {
        display.value = Math.sqrt(parseFloat(display.value));
      }
      break;
    case "±":
      if (display.value !== "") {
        display.value = parseFloat(display.value) * -1;
      }
      break;
    case "%":
      if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
      }
      break;
    default:
      display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  if (display.value != "") {
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  }
}
