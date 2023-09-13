/*==================== clik menu ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let num = 3;

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

/*==================== portfolio ====================*/
project();
const tombol = document.querySelector(".tombol button");
tombol.addEventListener("click", () => {
  num += 3;
  project();
});
/*==================== ubah warna ====================*/
let ubah = document.querySelector(".kontras");
let geser = document.querySelector(".kontras i");
let sec = document.querySelector(".home");
let media = document.querySelectorAll(".social-media a");

for (let i = 0; i < media.length; i++) {}

ubah.addEventListener("click", () => {
  geser.classList.toggle("geser");
  geser.classList.toggle("warna");
  sec.classList.toggle("warna");

  for (let i = 0; i < media.length; i++) {
    media[i].classList.toggle("media");
  }
});

/*==================== scroll ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*==================== sticky navbar ====================*/

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

/*==================== typed js ====================*/

function text(txt, tulisan, mulai, tunggu) {
  const typed = new Typed(txt, {
    strings: tulisan,
    typeSpeed: mulai,
    backSpeed: 100,
    backDelay: tunggu,
    loop: true,
  });
}

text(".multiple-text", ["FrontEnd Devloper", "Konten Creator"], 100, 1000);

function project() {
  let card = "";
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      const result = data.data.slice(0, num);
      result.forEach((element) => (card += hasil(element)));
      const portfolio = document.querySelector(".portfolio-container");
      portfolio.innerHTML = card;
      if (num >= data.data.length) {
        tombol.style.display = "none";
      }
    })
    .catch((eror) => console.log(eror));
}

function hasil(element) {
  return `<div class="portfolio-box">
  <img src="image/${element.image}" alt="" />
  <div class="portfolio-layer">
    <h4>${element.nama}</h4>
    <p>${element.descripsi}</p>
    <a href="${element.link}" target="_blank"
      ><i class="bx bx-link-external"></i
    ></a>
  </div>
</div>`;
}
