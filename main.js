document.addEventListener("DOMContentLoaded", function () {
  var tl = gsap.timeline();

  tl.from(".welcome", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    scale: 0.6,
  });

  gsap.from(".image-hotel", {
    scale: 0,
    delay: 1,
    duration: 1,

    scrollTrigger: { trigger: ".image-hotel", scroller: "body", scrub: true },
  });

  gsap.from("  .page2 .about-hotel", {
    opacity: 1,
    duration: 1,
    x: 100,
    scrollTrigger: {
      trigger: " .page2 .about-hotel",
      scroller: "body",
      scrub: true,
    },
  });
  gsap.from(".info1", {
    opacity: 0,
    duration: 2,
    y: 60,
    delay: 1,
    stagger: 0.5,
  });
  gsap.from(".info2", {
    opacity: 0,
    duration: 2,
    y: 60,
    delay: 1,
    stagger: 0.5,
  });
// with help of scrub all property runs completly on the basis of scrolling

const imgCircle = document.querySelector(".swiper-slide");
const review = document.querySelector(".review");

fetch("pic.json")
  .then((response) => response.json())
  .then((data) => {
    const swiperWrapper = document.getElementById("swiper-wrapper");

    data.forEach((item) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      const img = document.createElement("img");
      img.src = item.url;
      img.alt = item.title;

      const review = document.createElement("div");
      review.classList.add("review");
      review.textContent = item.body;

      slide.appendChild(img);
      slide.appendChild(review);

      swiperWrapper.appendChild(slide);
    });
  });
});

var icon23 = document.querySelector(".icon img");
icon23.addEventListener("click", () => {
  console.log("hii");
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon23.src = "https://cdn-icons-png.flaticon.com/128/10484/10484062.png";
    } else {
        icon23.src = "https://cdn-icons-png.flaticon.com/128/4489/4489231.png";
    }
});
