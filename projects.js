"use strict";
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".down-arrow",
  { y: -20 },
  { y: 20, duration: 1.5, ease: "power1.inOut", yoyo: true, repeat: -1 }
);

const sections = [
  ".proj-info",
  ".mockups1",
  ".phone1",
  ".phone2",
  ".phone3",
  ".phone4",
  ".phone5",
];

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
