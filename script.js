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

// guest score

// Guest Section
let guestScoreEl = document.getElementById("guest-score-el");
let guestPoints = 0;
let guestBtnOne = document.getElementById("guest-add-one-btn");
let guestBtnTwo = document.getElementById("guest-add-two-btn");
let guestBtnThree = document.getElementById("guest-add-three-btn");
function guestAddOnePoint() {
  guestPoints++;
  guestScoreEl.textContent = guestPoints;
}
function guestAddTwoPoint() {
  guestPoints += 2;
  guestScoreEl.textContent = guestPoints;
}
function guestAddThreePoint() {
  guestPoints += 3;
  guestScoreEl.textContent = guestPoints;
}
guestBtnOne.addEventListener("click", guestAddOnePoint);
guestBtnTwo.addEventListener("click", guestAddTwoPoint);
guestBtnThree.addEventListener("click", guestAddThreePoint);

// reset button

let resetEl = document.getElementById("reset-btn");

function resetGame() {
  homePoints = 0;
  guestPoints = 0;
  document.getElementById("guest-score-el").textContent = 0;
  document.getElementById("home-points-el").textContent = 0;
}

resetEl.addEventListener("click", resetGame);
