// gsap.registerPlugin(ScrollTrigger);

// let t1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".image-section",
//     start: "top top",
//     end: "+=100%",
//     scrub: true,
//     pin: true,
//     markers: true,
//   },
// });

// t1.to(".image-wrapper img", {
//   y: "0%",
//   scale: 1.2,
//   duration: 1,
// });

// Q2 Add text that fades in after image reveal Scale image to 1.2 instead of 1 Reveal image using clip-path Add multiple images using forEach

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".image-section").forEach((section) => {
  const img = section.querySelector("img");
  const text = section.querySelector("h2");

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=120%",
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  t1.to(img, {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1.2,
    duration: 1,
  }).to(text, {
    opacity: 1,
    y: -30,
    duration: 0.5,
  });
});
