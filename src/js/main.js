// colors page


function getAPI() {
  fetch(`https://secure.runescape.com/m=hiscore_oldschool_hardcore_ironman/index_lite.ws?player=katdrag`)
    .then(response => response.json())
    .then(results => console.log(results))
    .catch(err => console.log("There was an error:" + err))
}

getAPI()

document.addEventListener('click', function (e) {

  if (e.target.classList.contains("color")) {

    let colouredDiv = e.target;
    if (colouredDiv.getAttribute("color") === null || colouredDiv.getAttribute("color") === "yellow") {
      bgChangeGreen(colouredDiv);
    } else if (colouredDiv.getAttribute("color") === "green") {
      bgChangeRed(colouredDiv);
    } else if (colouredDiv.getAttribute("color") === "red") {
      bgChangeBlue(colouredDiv);
    } else if (colouredDiv.getAttribute("color") === "blue") {
      bgChangeYellow(colouredDiv);
    }

    checkColors();
  }
});

// green function

function bgChangeGreen(e) {
  e.style.backgroundColor = "green";
  e.setAttribute("color", "green");
}

// red function

function bgChangeRed(e) {
  e.style.backgroundColor = "red";
  e.setAttribute("color", "red");
}

// blue function

function bgChangeBlue(e) {
  e.style.backgroundColor = "blue";
  e.setAttribute("color", "blue");
}

// yellow function

function bgChangeYellow(e) {
  e.style.backgroundColor = "yellow";
  e.setAttribute("color", "yellow");
}

// Checking colors

function checkColors() {
  const redCheck = document.querySelector(".red");
  const greenCheck = document.querySelector(".green");
  const blueCheck = document.querySelector(".blue");
  const yellowCheck = document.querySelector(".yellow");


  if (redCheck.getAttribute("color") === "red" && greenCheck.getAttribute("color") === "green" && blueCheck.getAttribute("color") === "blue" && yellowCheck.getAttribute("color") === "yellow") {
    const linkDisplay = document.querySelector(".link");
    linkDisplay.style.display = "inherit";
  }
}

// code page

const button = document.querySelector("button");

button.addEventListener('click', checkCode);

function checkCode() {
  const codeInput = document.getElementById("code").value;
  const background = document.querySelector("body");
  const h1 = document.querySelector("h1");
  const input = document.querySelector("input");
  const h2 = document.querySelector("h2");

  if (codeInput === "1107") {
    alert("Correct code entered.");
    background.style.backgroundImage = "url('imgs/painting.jpg')";
    background.style.backgroundSize = "cover";
    h1.innerHTML = "Code Accepted";
    h1.style.fontSize = "120px";
    h1.style.color = "rgb(175, 28, 28)";
    input.style.display = "none";
    button.style.display = "none";
    h2.style.display = "none";
  } else {
    alert("Error. Incorrect code entered.");
  }
}
