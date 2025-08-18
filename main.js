


const burgers = [
  {
    name: "Cheese Burger",
    description: "Juicy beef patty with melted cheese and fresh veggies.",
    image: "images/burger1.jpg"
  },
  {
    name: "BBQ Burger",
    description: "Smoky BBQ sauce, crispy bacon and cheddar cheese.",
    image: "images/burger1.jpg"
  },
  {
    name: "Vegan Burger",
    description: "Plant-based patty with avocado, lettuce and tomato.",
    image: "images/burger1.jpg"
  },
  {
    name: "Classic Burger",
    description: "Our classic burger, tomato, lettuce, beacon and onions.",
    image: "images/burger1.jpg"
  }
];

// Where to insert them
const burgerList = document.getElementById("burger-list");

// Render each burger
burgers.forEach(burger => {
  const container = document.createElement("div");
  container.classList.add("individual-container");

  container.innerHTML = `
    <div class="item-image" style="background-image: url('${burger.image}')"></div>
    <h1>${burger.name}</h1>
    <p>${burger.description}</p>
    <div>
      <button class="left" tabindex="-1"><</button>
      <input type="text" value="0" disabled>
      <button class="right" tabindex="-1">></button>
    </div>
  `;

  burgerList.appendChild(container);
  // Seleccionamos los elementos internos
  const input = container.querySelector("input");
  const btnLeft = container.querySelector(".left");
  const btnRight = container.querySelector(".right");

  // Evento: restar
  btnLeft.addEventListener("click", () => {
    let value = parseInt(input.value) || 0;
    if (value > 0) value--; // evita negativos
    input.value = value;
  });

  // Evento: sumar
  btnRight.addEventListener("click", () => {
    let value = parseInt(input.value) || 0;
    value++;
    input.value = value;
  });
});

///-------------

const duration = 2 * 24 * 60 * 60 * 1000;
const offerDeadline = new Date().getTime() + duration;

// Update countdown every second
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
    document.querySelector(".timer-container").innerHTML = `
      <h1>Offers expired 😢</h1>
    `;
	const btn1 = document.getElementById("btn-offer-1");
	const btn2 = document.getElementById("btn-offer-2");
	btn1.setAttribute("disabled", "true");
	btn2.setAttribute("disabled", "true");
  }
}, 1000);	


//--------

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

