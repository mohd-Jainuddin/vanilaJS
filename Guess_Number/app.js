const input = document.getElementById("inputBox");
const randomValue = Math.floor(Math.random() * (1 + 100 - 0) + 0);

console.log(randomValue);
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const array = document.getElementById("array");
const arr = [];

btn1.addEventListener("click", () => {
  arr.push(input.value);
  array.innerText = arr;

  if (input.value > randomValue) {
    alert("number is too high!");
  } else if (input.value < randomValue) {
    alert("Number is low!");
  } else {
    alert("Congrats you win the Game!");
    btn1.setAttribute("disabled", "true");
  }
});

btn2.addEventListener("click", () => {
  location.reload();
});
