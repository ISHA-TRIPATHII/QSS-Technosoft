// ADDRESS
function showAddress(country) {
  const indiaAddress = document.getElementById("india-address");
  const usaAddress = document.getElementById("usa-address");
  const addressSection = document.querySelector(".address");

  if (country === "india") {
    indiaAddress.classList.add("active");
    usaAddress.classList.remove("active");
    addressSection.style.backgroundImage = "url('assets/india.jpg')";
  } else if (country === "usa") {
    usaAddress.classList.add("active");
    indiaAddress.classList.remove("active");
    addressSection.style.backgroundImage = "url('assets/usa.jpg')";
  }
}

// NAVBAR
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    sidebar.classList.toggle("open");
  });

  showAddress("india");
});

// TYPE-WRITER ANIMATION
const textArray = [
  "Cloud Services",
  "Genrative AI",
  "Salesforce Integration",
  "Blockchain Solutions",
];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 2000; 
let textArrayIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typewriterElement.textContent +=
      textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, delayBetweenWords);
});

// NAVBAR OVERLAY
function setImg(id) {
  let imgSrc;
  if (id == "services") imgSrc = "assets/header-overlay-img-1.png";
  else if (id == "technologies") imgSrc = "assets/header-overlay-img-2.png";
  else if (id == "industries") imgSrc = "assets/header-overlay-img-3.png";
  else imgSrc = "assets/header-overlay-img-4.png";

  document.querySelector(".overlay-image").src = imgSrc;
}
const navbarItems = document.querySelectorAll(".overlay-link");
const overlay = document.querySelector(".header-overlay");

navbarItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    overlay.classList.add("show");
    const id = item.id;
    setImg(id);
    document.body.style.overflow = "hidden";
  });

  item.addEventListener("mouseout", () => {
    if (!overlay.matches(":hover")) {
      overlay.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
});

overlay.addEventListener("mouseover", () => {
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
});

overlay.addEventListener("mouseout", () => {
  if (![...navbarItems].some((item) => item.matches(":hover"))) {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
});


// for scroll photo
const slideGallery = document.querySelector(".slides");
const slides = slideGallery.querySelectorAll("div");
const scrollbarThumb = document.querySelector(".thumb");
const slideCount = slides.length;
const slideHeight = 720;
const marginTop = 16;

const scrollThumb = () => {
  const index = Math.floor(slideGallery.scrollTop / slideHeight);
  scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};

const scrollToElement = (el) => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(0, index * slideHeight + marginTop);
};

document.querySelector(".thumbnails").innerHTML += [...slides]
  .map(
    (slide, i) => `<img src="${slide.querySelector("img").src}" data-id="${i}">`
  )
  .join("");

document.querySelectorAll(".thumbnails img").forEach((el) => {
  el.addEventListener("click", () => scrollToElement(el));
});

slideGallery.addEventListener("scroll", (e) => scrollThumb());

scrollThumb();