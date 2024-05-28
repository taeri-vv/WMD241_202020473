console.log("안녕하구료.");
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.5, 0.05, 0)";

let aCard = document.querySelector(".card");
// document.querySelectorAll(".card"); //
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("클릭!");
  aCard.classList.toggle("card--state-clicked");
  console.log(aCard.classlist);
});
