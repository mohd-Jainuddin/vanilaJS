const inputResult = document.getElementById("input");
const button = document.getElementById("btn");
const res = document.getElementById("res");

button.addEventListener("click", (result) => {
  const value = inputResult.value;
  res.innerText = Math.floor(value * 22.21);
});
