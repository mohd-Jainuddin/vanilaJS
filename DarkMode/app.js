const btn = document.getElementById("btn");
const para = document.getElementById("para");
const box = document.getElementById("box");

btn.addEventListener("click", () => {
  if (box.classList == "container") {
    box.classList.add("bigBox");
  } else {
    box.classList.remove("bigBox");
  }
});
