const images = {
  70: "1.png",
  77: "2.png",
  84: "3.png",
  91: "4.png",
  100: "5.png",
};

Object.values(images).forEach((image) => {
  const img = new Image();
  img.src = image;
});

new IntersectionObserver(
  (entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      const entry = entries[0];
      const percent = entry.intersectionRatio * 100;
      if (percent >= 100) {
        entry.target.src = images["100"];
      } else if (percent >= 91) {
        entry.target.src = images["91"];
      } else if (percent >= 84) {
        entry.target.src = images["84"];
      } else if (percent >= 77) {
        entry.target.src = images["77"];
      } else {
        entry.target.src = images["70"];
      }
    }
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: Object.keys(images).map((key) => key / 100),
  }
).observe(document.getElementById("ricardo"));
