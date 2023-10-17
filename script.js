Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./cover4.mp4", "./cover2.mp4", "./cover1.mp4", "./cover5.mp4"],
});

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 4,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

 