"use strict";
gsap.registerPlugin(ScrollTrigger);

document.querySelector(".burger-btn").addEventListener("click", openBurgerMenu);
document
  .querySelector(".burger-btn-nav")
  .addEventListener("click", openBurgerMenu);

function openBurgerMenu() {
  document.querySelector(".burger-menu").classList.remove("hidden");
  document.querySelector(".burger-menu").classList.add("burger-appear");
  document
    .querySelector(".close-btn")
    .addEventListener("click", closeBurgerMenu);
  document
    .querySelector(".b-contact")
    .addEventListener("click", closeBurgerMenu);
  document.querySelector(".b-proj").addEventListener("click", closeBurgerMenu);
}

function closeBurgerMenu() {
  document.querySelector(".burger-menu").classList.add("hidden");
}

gsap.fromTo(
  ".down-arrow",
  { y: -20 },
  { y: 20, duration: 1.5, ease: "power1.inOut", yoyo: true, repeat: -1 }
);

const sections = ["#ab-me", "#projects", "#contact-box"];

sections.forEach((section) => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      toggleActions: "restart pause restart pause",
    },
    opacity: 1,
    y: -10,
    duration: 1,
  });
});
