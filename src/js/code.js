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