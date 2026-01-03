/** @format */

var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (vals) {
  gsap.to(cursor, {
    x: vals.x,
    y: vals.y,
    duration: 1,

    ease: "power3.out",
  });
});

imageDiv.addEventListener("mousemove", function (vals) {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
  });
});

imageDiv.addEventListener("mouseleave", function (vals) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
