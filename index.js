const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  const answer = faq.querySelector(".answer");

  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      // Closing
      faq.classList.remove("active");
      answer.style.maxHeight = null; // goes back to 0 in CSS
    } else {
      // Opening
      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px"; // dynamic height
    }
  });
});

///-------

const navMenu = document.querySelector(".nav-menu-mobile");
const btnBurger = document.querySelector("#btn-nav");
const btnClose = document.querySelector("#btn-close-nav");

// Open / toggle menu when burger is clicked
btnBurger.addEventListener("click", () => {
  if (navMenu.style.display === "none" || navMenu.style.display === "") {
    navMenu.style.display = "flex"; // show menu
  } else {
    navMenu.style.display = "none"; // hide menu
  }
});

// Close menu when "X" button is clicked
btnClose.addEventListener("click", () => {
  navMenu.style.display = "none";
});


////

const duration = 2 * 24 * 60 * 60 * 1000;
const offerDeadline = new Date().getTime() + duration;

const timer = setInterval(() => {
const now = new Date().getTime();
 const distance = offerDeadline - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update DOM
  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

  // If expired
  if (distance < 0) {
    clearInterval(timer);
  }
}, 1000);	
