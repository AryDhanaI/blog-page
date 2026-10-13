var ASSETS = "https://cobee-the-junior-programmer.netlify.app/assets/";

/* --------------------------- Click and Change Mini Text ------------------------- */
function changeText() {
  document.querySelector(".mini-text").innerHTML = "Scroll down";
  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";
}

/* --------------------------- Button Like Dislike ------------------------- */
var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");

if (btnLike && btnDislike) {
  btnLike.onclick = function () {
    btnDislike.classList.remove("red");
    this.classList.toggle("green");
  };
  btnDislike.onclick = function () {
    btnLike.classList.remove("green");
    this.classList.toggle("red");
  };
}

/* --------------------------- Change Jumbotron Image and Title ------------------------- */
function changeImage(element) {
  element.setAttribute("src", ASSETS + "img-header2.png");
}

function changeImageBack(element) {
  element.setAttribute("src", ASSETS + "img-header.png");
}

function changeTitle(element) {
  element.innerHTML = "Create Simple Game and Website";
}

function changeTitleBack(element) {
  element.innerHTML = "Get Programming Tips Here!";
}

/* --------------------------- Closeable Item ------------------------- */
function addCloseButton(li) {
  var span = document.createElement("span");
  span.textContent = "x";
  span.className = "close";
  span.onclick = function () {
    li.style.display = "none";
  };
  li.appendChild(span);
}

document.querySelectorAll(".search-tags-item").forEach(addCloseButton);

function newElement() {
  var input = document.getElementById("myInput");
  var inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Data tidak boleh kosong!");
    return;
  }

  var li = document.createElement("li");
  li.className = "search-tags-item";
  li.textContent = inputValue;
  addCloseButton(li);
  document.getElementById("myUL").appendChild(li);
  input.value = "";
}

/* ---------------------------------- Image Slider ---------------------------------- */
var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
var currentSlide = 0;

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });
  slides[index].classList.add("active");
  buttons[index].classList.add("active");
  currentSlide = index;
}

if (slides.length) {
  buttons.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
      showSlide(i);
    });
  });

  // autoplay every 5s
  setInterval(function () {
    showSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

/* ---------------------------------- AOS Library ---------------------------------- */
document.querySelectorAll(".project").forEach(function (project, index) {
  project.dataset.aos = "fade-down";
  project.dataset.aosDuration = 1500;
  project.dataset.aosDelay = index * 300;
});

if (window.AOS) {
  AOS.init();
}

/* ---------------------------------- Contact Modal ---------------------------------- */
// The form is not wired to any mail service: it only shows the confirmation modal.
// To really receive messages, point the form's action at your own form backend.
var contactForm = document.querySelector(".contact form");
var modal = document.querySelector(".modal-container");

if (contactForm && modal) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    modal.classList.add("show");
    contactForm.reset();
  });

  modal.addEventListener("click", function () {
    modal.classList.remove("show");
  });
}

/* ---------------------------------- Splash Screen ---------------------------------- */
var splash = document.querySelector(".splash");
if (splash) {
  setTimeout(function () {
    document.querySelector(".astronaut-takeoff").classList.add("animation");
  }, 400);

  setTimeout(function () {
    document.querySelector(".splash-text").innerHTML = "Come in!";
  }, 2000);

  setTimeout(function () {
    splash.style.display = "none";
  }, 3000);
}
