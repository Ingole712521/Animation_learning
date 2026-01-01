/** @format */

// day 1 Learning stragger for multiple tag to come up or show up the animation one by one 2. From 3. to 4. Timeline means it will run one after the another for different tag anda multiple animation run one by one

/** @format */

// gsap.from("#box1", {
//   x: 1000,
//   duration: 3,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "orange",
// });

// gsap.from("#box2", {
//   x: 1000,
//   duration: 3,
//   delay: 2,
//   rotate: 360,
//   backgroundColor: "blue",

//   yoyo: true,
// });

gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 2,
  stager: 0.5,
});

// Like a train movement
var tl = gsap.timeline();

tl.to("#box1", {
  x: 1000,
  duration: 1.5,
  delay: 1,
  rotate: 360,
  backgroundColor: "orange",
});

tl.to("#box2", {
  x: 1000,
  duration: 1.5,
  delay: 1,
  rotate: 360,
  backgroundColor: "red",
});


