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
