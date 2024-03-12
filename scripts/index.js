const randomColor = () => {
  const hexNum = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + hexNum.slice(0, 6);
};

button = document.querySelector(".color-button");
button.addEventListener("click", function changeButton() {
  button.style["backgroundColor"] = randomColor();
  button.style["color"] = randomColor();
  console.log(randomColor());
});

//challenge 2
const input = document.getElementById("in");
const out = document.getElementById("out");

input.onkeyup = () => {
  if (input.value.length < 50) {
    out.innerText = input.value;
  }
};

function deleteButton() {
  input.value = "";
  out.innerText = "Challenge 2";
}
