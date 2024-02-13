const title = document.querySelector(".main-body__title");

window.addEventListener("load", () => {
  title.textContent = "I'm a";
  title.classList.add("tracking-in-expand");
});

title.addEventListener("animationend", () => {
  if (title.classList.contains("tracking-in-expand")) {
    title.classList.remove("tracking-in-expand");
    title.classList.add("tracking-out-contract");
    return;
  }
  if (title.classList.contains("tracking-out-contract")) {
    title.textContent === "I'm a"
      ? (title.textContent = "Web Developer!")
      : (title.textContent = "I'm a");
    title.classList.remove("tracking-out-contract");
    title.classList.add("tracking-in-expand");
    return;
  }
});
