const navEffect = () => {
  let nav = document.querySelector(".nav");
  
  addEventListener("scroll", () => {
    nav.classList.add("nav-fixed");
    if (scrollY === 0) {
      removeEventListener("scroll", nav.classList.remove("nav-fixed"));
    }
  });
};
navEffect();
