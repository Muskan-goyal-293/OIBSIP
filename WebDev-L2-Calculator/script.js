//  navbar animation function
function animateNavText() {
  const navDiv = document.querySelector(".navDiv");
  const navH1 = document.querySelector(".navDiv h1");
  const navH1Text = navH1.innerText.split("");

  let sum = "";
  navH1Text.forEach((element) => {
    sum += `<span>${element}</span>`;
  });

  navDiv.innerHTML = sum;

  const navSpan = document.querySelectorAll(".navDiv span");

  let count = 0;
  let interval = null;

  navSpan.forEach((val) => {
    clearInterval(interval);
    interval = setInterval((val) => {
      navSpan[count].style.opacity = 1;
      count++;
      if (count > navSpan.length - 1) {
        clearInterval(interval);
      }
    }, 250);
  });
}
animateNavText();

// theme related code

const root = document.documentElement;
const themeButton = document.querySelector(".themeButton button");
let theme = localStorage.getItem("themeValue") || "dark";

function themeSelect() {
  if (theme == "dark") {
    root.style.setProperty("--first", "black");
    root.style.setProperty("--sec", "#101010");
    root.style.setProperty("--third", "#3A3A3A");
    root.style.setProperty("--four", "white");
    localStorage.setItem("themeValue", "dark");
    themeButton.innerText = "Dark 🌑";
    theme = "light";
  } else {
    root.style.setProperty("--first", "white");
    root.style.setProperty("--sec", "#EEEEEE");
    root.style.setProperty("--third", "#DADADA");
    root.style.setProperty("--four", "black");
    localStorage.setItem("themeValue", "light");
    themeButton.innerText = "Light 🌕";
    theme = "dark";
  }
}
themeSelect();

themeButton.addEventListener("click", () => {
  themeSelect();
});

const inputText = document.querySelector(".inputText");
const allButton = document.querySelectorAll(".allButton button");
allButton.forEach((val) => {
  val.addEventListener("click", () => {
    if (
      inputText.value === "" &&
      (val.innerHTML == "*" ||
        val.innerHTML == "+" ||
        val.innerHTML == "-" ||
        val.innerHTML == "/" ||
        val.innerHTML == "%" ||
        val.innerHTML == "." ||
        val.innerHTML == "=")
    ) {
      inputText.value = "";
      return;
    }

    if (val.innerText === "C") {
      inputText.value = "";
      return;
    }

    let text = inputText.value;
    let lastCher = text[text.length - 1];
    let currentChar = val.innerText;

    if (
      (currentChar === "*" ||
        currentChar === "+" ||
        currentChar === "-" ||
        currentChar === "%" ||
        currentChar === "/" ||
        currentChar === "=" ||
        currentChar === ".") &&
      (lastCher === "*" ||
        lastCher === "+" ||
        lastCher === "-" ||
        lastCher === "%" ||
        lastCher === "/" ||
        lastCher === "=" ||
        lastCher === ".")
    ) {
      return;
    }

    if(lastCher === undefined && val.innerText === "Back"){
      return
    }
    

    inputText.value += val.innerHTML;
  });
});
