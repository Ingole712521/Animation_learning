// gsap.to(".page1", {
//   scale: 0.5,
//   scrollTrigger: {
//     trigger: ".page1",
//     start: "top top ",
//     end: "bottom top",
//     scrub: true,
//   },
// });

// gsap.from(".page2", {
//   x: -300,
//   opacity: 0,
//   duration: 1,
//   //   delay: 0.5,
//   scrollTrigger: {
//     trigger: ".page2",
//     start: "top 50%",
//   },
// });

// gsap.to(".page3", {
//   backgroundColor: "pink",
//   scrollTrigger: {
//     trigger: ".page3",
//     start: "top center",
//     scrub: true
//   },
// });

// Q1 Scroll Story Page ,  Each Section Pins , text fade in , Background color changes

// Scroll to Trigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel) => {
  let h1 = panel.querySelector("h1");

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: panel,
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  t1.to(h1, {
    opacity: 1,
    y: -50,
    duration: 2,
  })
    .to(panel, {
      backgroundColor: "black",
      duration: 2,
    })
    .to(h1, {
      opacity: 1,
      y: 50,
      duration: 2,
    });
});
