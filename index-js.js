gsap.fromTo(
  ".down-arrow",
  { y: -20 },
  { y: 20, duration: 1.5, ease: "power1.inOut", yoyo: true, repeat: -1 }
);
