const title = document.querySelector(".main-title");
const arrowBtnRight = document.querySelector("#arrow-btn__right");
const arrowBtnLeft = document.querySelector("#arrow-btn__Left");
const cardsList = document.querySelectorAll(".card");

let animationIteration = 1;

window.addEventListener("load", () => {
  title.textContent = "HELLO!";
  title.classList.add("tracking-in-expand");
});

const changeAnimationClass = function () {
  title.classList.remove("tracking-out-contract");
  title.classList.add("tracking-in-expand");
};

title.addEventListener("animationend", () => {
  if (title.classList.contains("tracking-in-expand")) {
    title.classList.remove("tracking-in-expand");
    title.classList.add("tracking-out-contract");
    return;
  }
  if (title.classList.contains("tracking-out-contract")) {
    if (animationIteration === 1) {
      title.textContent = "I'm a,";
      animationIteration = 2;
      changeAnimationClass();
      return;
    }
    if (animationIteration === 2) {
      title.textContent = "WEB DEVELOPER!";
      animationIteration = 3;
      changeAnimationClass();
      return;
    }
    if (animationIteration === 3) {
      title.textContent = "HELLO!";
      animationIteration = 1;
      changeAnimationClass();
      return;
    }
  }
});

///////////////////////
///Right Button
let currCardNum = 0;

arrowBtnRight.addEventListener("click", function (e) {
  console.log(currCardNum);
  e.preventDefault();
  cardsList[currCardNum].classList.add("hidden");
  if (currCardNum < cardsList.length - 1) currCardNum += 1;
  cardsList[currCardNum].classList.remove("hidden");
  if (currCardNum === cardsList.length - 1) {
    arrowBtnRight.classList.toggle("hidden");
    arrowBtnLeft.classList.toggle("hidden");
  }
});
arrowBtnLeft.addEventListener("click", function (e) {});
