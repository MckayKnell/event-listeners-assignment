const randomColor = () => {
  let number = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + number.slice(0, 6);
};

console.log(randomColor());
button = document.querySelector(".color-button");
button.addEventListener("click", function changeButton() {
  button.style["backgroundColor"] = randomColor();
  button.style["color"] = randomColor();
});

//challenge 2
let input = document.getElementById("in");
let out = document.getElementById("out");

input.onkeyup = () => {
  if (input.value.length < 50) {
    out.innerHTML = input.value;
  }
};

function deleteButton() {
  input.value = "";
  out.innerHTML = "Challenge 2";
}
