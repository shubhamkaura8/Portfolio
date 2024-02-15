const title = document.querySelector(".main-title");
// const cardsList = document.querySelectorAll(".card");

// let animationIteration = 1;
// let curCard = 0;

// window.addEventListener("wheel", (e) => {
//   if (e.deltaY === 100) {
//     if (curCard > cardsList.length - 1) {
//       return;
//     }
//     console.log(curCard);
//     console.log(cardsList.length - 1);
//     let card = cardsList[curCard];
//     if (curCard > 0) {
//       cardsList[curCard - 1].classList.add("slide-out-bck-top");
//       cardsList[curCard - 1].classList.remove("slide-in-bck-bottom");
//     }
//     card.classList.remove("hidden");
//     card.classList.add("slide-in-bck-bottom");
//     curCard += 1;
//   }
// });

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
