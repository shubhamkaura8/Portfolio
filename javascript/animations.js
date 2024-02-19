const title = document.querySelector(".main-title");
const arrowBtnRight = document.querySelector(".arrow-btn--right");
const arrowBtnLeft = document.querySelector(".arrow-btn--Left");
const cardsList = document.querySelectorAll(".card");
const hireMeYes = document.querySelector(".hire-me__yes");
const hireMeNo = document.querySelector(".hire-me__no");
const contactInfo = document.querySelector(".contact-info");
const footerHeart = document.querySelector(".main-footer__heart");

///////////////////////////////////////
//Title animation
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

arrowBtnRight.addEventListener("click", async function (e) {
  e.preventDefault();
  cardsList[currCardNum].classList.add("slide-out-blurred-left");
  await wait(0.3);
  cardsList[currCardNum].classList.add("hidden");
  cardsList[currCardNum].classList.remove("slide-out-blurred-left");
  if (currCardNum < cardsList.length - 1) {
    currCardNum += 1;
    arrowBtnLeft.classList.remove("hidden");
  }
  cardsList[currCardNum].classList.remove("hidden");
  cardsList[currCardNum].classList.add("slide-in-blurred-right");
  await wait(0.3);
  cardsList[currCardNum].classList.remove("slide-in-blurred-right");

  if (currCardNum === cardsList.length - 1) {
    arrowBtnRight.classList.add("hidden");
  }
});

///////////////////////////////////
//////Left button
arrowBtnLeft.addEventListener("click", async function (e) {
  e.preventDefault();
  cardsList[currCardNum].classList.add("slide-out-blurred-right");
  await wait(0.3);
  cardsList[currCardNum].classList.remove("slide-out-blurred-right");
  cardsList[currCardNum].classList.add("hidden");
  currCardNum -= 1;
  cardsList[currCardNum].classList.add("slide-in-blurred-left");
  cardsList[currCardNum].classList.remove("hidden");
  await wait(0.3);
  cardsList[currCardNum].classList.remove("slide-in-blurred-left");
  if (currCardNum === 0) arrowBtnLeft.classList.add("hidden");
  if (currCardNum < cardsList.length - 1)
    arrowBtnRight.classList.remove("hidden");
});

function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

///////////////////////////////////
//Hire Me buttons
hireMeYes.addEventListener("click", function (e) {
  e.preventDefault();
  hireMeYes.classList.add("hidden");
  hireMeNo.classList.add("hidden");
  contactInfo.classList.remove("hidden");
  footerHeart.src = "/assets/svg/heart.svg";
});

hireMeNo.addEventListener("click", function (e) {
  e.preventDefault();
  footerHeart.src = "/assets/svg/broken-heart.svg";
});
