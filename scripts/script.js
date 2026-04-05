// Home Section

let homeScoreEl = document.getElementById("home-points-el");
let homePoints = 0;
let homeBtnOne = document.getElementById("home-add-one-btn");
let homeBtnTwo = document.getElementById("home-add-two-btn");
let homeBtnThree = document.getElementById("home-add-three-btn");

function homeAddOnePoint() {
  homePoints++;
  homeScoreEl.textContent = homePoints;
}
function homeAddTwoPoint() {
  homePoints += 2;
  homeScoreEl.textContent = homePoints;
}
function homeAddThreePoint() {
  homePoints += 3;
  homeScoreEl.textContent = homePoints;
}

homeBtnOne.addEventListener("click", homeAddOnePoint);
homeBtnTwo.addEventListener("click", homeAddTwoPoint);
homeBtnThree.addEventListener("click", homeAddThreePoint);
