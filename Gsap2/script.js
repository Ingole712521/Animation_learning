/** @format */

gsap.from("#page1 #box ", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
});

gsap.from("#page2 #box ", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top 20%",
    // scrub: 1,
  },
});

gsap.to("#page3 h1", {
  x: "-25%",
  ease: "none",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
    markers: true,
  },
});
