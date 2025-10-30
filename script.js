// === Dynamic Event Rendering ===
const events = [
  {
    title: "Hackathon 2025",
    description: "A 24-hour coding challenge where creativity meets competition.",
  },
  {
    title: "AI Bootcamp",
    description: "Learn the fundamentals of Artificial Intelligence and Machine Learning.",
  },
  {
    title: "Web Dev Week",
    description: "Hands-on sessions on modern front-end and back-end technologies.",
  },
  {
    title: "Tech Talk: The Future of Robotics",
    description: "An inspiring talk by industry professionals on the future of automation.",
  },
];

const eventContainer = document.getElementById("event-container");
if (eventContainer) {
  events.forEach((event) => {
    const div = document.createElement("div");
    div.classList.add("event");
    div.innerHTML = `<h3>${event.title}</h3><p>${event.description}</p>`;
    eventContainer.appendChild(div);
  });
}

// === Footer Year ===
document.getElementById("year").textContent = new Date().getFullYear();

// === Join Form ===
const form = document.getElementById("joinForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("formMessage");

    if (name && email) {
      message.textContent = `🎉 Thank you, ${name}! You’ve successfully joined the Innovators Club.`;
      form.reset();
    }
  });
}

// === Mobile Menu Toggle ===
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}