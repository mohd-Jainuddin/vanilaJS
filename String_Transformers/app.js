const input = document.getElementById("input");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");




input.addEventListener("keyup",()=>{
    para1.innerText = input.value.toLowerCase();
    para2.innerText = input.value.toUpperCase();
})