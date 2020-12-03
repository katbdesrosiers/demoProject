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
  }

  checkColors();
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