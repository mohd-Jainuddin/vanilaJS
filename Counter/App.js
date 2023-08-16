const containerBox = document.getElementById("containerBox");
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const inputbox = document.getElementById("inputbox");

let inputValue = 1;


decrement.addEventListener('click',()=>{
    let count = Number(containerBox.innerText);
    containerBox.innerText = count-inputValue; 
})

increment.addEventListener("click", () => {
  let count = Number(containerBox.innerText);
  containerBox.innerText = count+inputValue;
});

reset.addEventListener("click", () => {
  containerBox.innerText = 0;
});

inputbox.addEventListener('input',(e)=>{
    inputValue = Number(e.target.value);
})