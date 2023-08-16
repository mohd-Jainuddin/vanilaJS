const box = document.querySelectorAll("#box");

const newBox = Array.from(box);

newBox.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.firstElementChild.lastElementChild.innerText == "+") {
      e.firstElementChild.lastElementChild.innerText = "-";
      e.lastElementChild.classList.add("mystyle");
    } else {
      e.firstElementChild.lastElementChild.innerText = "+";
      e.lastElementChild.classList.remove("mystyle");
    }
  });
});
