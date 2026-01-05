function breakTest() {
  var text = document.querySelector("h1");

  var h1text = text.textContent;
  var split1Text = h1text.split("");
  console.log(split1Text);

  var halfValue = Math.floor(split1Text.length / 2);
  console.log(halfValue);



  
  var clutter = "";

  split1Text.forEach(function (e, idx) {
    if (idx < halfValue) {
      clutter = clutter + `<span class="first" >${e}</span>`;
    } else {
      clutter = clutter + `<span class="second">${e}</span>`;
    }
  });

  text.innerHTML = clutter;
}

breakTest();

gsap.from("h1 .first", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: {
    each: 0.1,
    from: "start",
  },
});

gsap.from("h1 .second", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: {
    each: -0.1,
    from: "start",
  },
});
