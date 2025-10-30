/* script.js - dynamic events, theme toggle, toasts, forms, and footer
   Works safely when run on any of the HTML pages (checks for elements before using them)
*/

/* ---------- THEME TOGGLE (persist in localStorage) ---------- */
// Try to load saved theme and apply it.
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const body = document.body;
  const setToggleText = (btn, isLight) => {
    if (!btn) return;
    btn.textContent = isLight ? "🌞" : "🌙";
  };

  if (saved === "light") body.classList.add("light-mode");

  // Set initial icon on all theme buttons (if present)
  ["themeToggle","themeToggleAbout","themeToggleEvents","themeToggleJoin","themeToggleContact"].forEach(id => {
    setToggleText(document.getElementById(id), body.classList.contains("light-mode"));
  });

  // click handler that toggles theme & writes preference
  function toggleTheme() {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    // update any theme buttons
    ["themeToggle","themeToggleAbout","themeToggleEvents","themeToggleJoin","themeToggleContact"].forEach(id => {
      setToggleText(document.getElementById(id), isLight);
    });
  }

  // attach toggle to all theme buttons present
  ["themeToggle","themeToggleAbout","themeToggleEvents","themeToggleJoin","themeToggleContact"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", toggleTheme);
  });
})();

/* ---------- TOAST helper ---------- */
function showToast(message, success = true) {
  // Create / find toast container
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = ""; // reset
  toast.classList.add(success ? "success" : "error");
  // trigger show
  setTimeout(() => toast.classList.add("show"), 10);
  // hide after 3s
  setTimeout(() => toast.classList.remove("show"), 3010);
}

/* ---------- EVENTS DATA (single source of truth) ---------- */
const events = [
  {
    name: "Hack the Future 2025",
    date: "Jan 15–17, 2025",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    description: "A 48-hour hackathon where students build tech for tomorrow."
  },
  {
    name: "AI & Robotics Workshop",
    date: "Mar 2, 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    description: "Hands-on learning with bots and neural networks."
  },
  {
    name: "Tech Expo 2025",
    date: "May 20, 2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    description: "Showcasing student innovations and networking with industry."
  },
  {
    name: "Women in Tech Meetup",
    date: "Aug 10, 2025",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    description: "Celebrating women in STEM with talks and panels."
  },
  {
    name: "Annual Tech Fest",
    date: "Dec 5–7, 2025",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1400&q=80",
    description: "Three-day festival with contests, demos and speakers."
  }
];

/* ---------- HELPER: escape to avoid injecting HTML ---------- */
function esc(s = "") {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

/* ---------- RENDER EVENTS ON events.html ---------- */
(function renderEvents() {
  const container = document.getElementById("eventsContainer");
  if (!container) return;
  container.innerHTML = events.map(ev => `
    <article class="event-card" aria-label="${esc(ev.name)}">
      <img loading="lazy" src="${esc(ev.image)}" alt="${esc(ev.name)}">
      <div class="event-details">
        <div class="event-date">${esc(ev.date)}</div>
        <h3>${esc(ev.name)}</h3>
        <p>${esc(ev.description)}</p>
      </div>
    </article>
  `).join("");
})();

/* ---------- RENDER TOP 3 EVENTS ON HOME ---------- */
(function renderHomeEvents() {
  const home = document.getElementById("homeEvents");
  if (!home) return;
  home.innerHTML = events.slice(0,3).map(ev => `
    <article class="event-card" aria-label="${esc(ev.name)}">
      <img loading="lazy" src="${esc(ev.image)}" alt="${esc(ev.name)}">
      <div class="event-details">
        <h3>${esc(ev.name)}</h3>
        <div class="event-date">${esc(ev.date)}</div>
      </div>
    </article>
  `).join("");
})();

/* ---------- JOIN FORM HANDLING (join.html) ---------- */
(function joinFormHandler() {
  const form = document.getElementById("joinForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = (document.getElementById("name") || {}).value || "";
    const email = (document.getElementById("email") || {}).value || "";
    const interest = (document.getElementById("interest") || {}).value || "";

    // very simple validation
    const ok = name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const messageEl = document.getElementById("formMessage");
    if (!ok) {
      if (messageEl) {
        messageEl.textContent = "⚠️ Please enter a valid name and email.";
        messageEl.style.color = "#ff7b7b";
      }
      showToast("Please fill valid name & email", false);
      return;
    }

    // simulate success (in a real app you'd POST to a backend)
    if (messageEl) {
      messageEl.textContent = `🎉 Thanks ${name.trim()}! We'll reach out at ${email.trim()}.`;
      messageEl.style.color = "#8ef6c6";
    }
    form.reset();
    showToast("Joined successfully — check your email!", true);
  });
})();

/* ---------- SIMPLE HAMBURGER TOGGLE (small screens) ---------- */
(function setupHamburgers() {
  // toggles the primary .nav-links element display on small screens
  function toggleNav(hamburgerId) {
    const btn = document.getElementById(hamburgerId);
    if (!btn) return;
    btn.addEventListener("click", () => {
      const navLinks = document.querySelector(".nav-links");
      if (!navLinks) return;
      // toggle display style (works with our CSS that hides .nav-links on small screens)
      navLinks.style.display = (getComputedStyle(navLinks).display === "flex") ? "none" : "flex";
    });
  }
  ["hamburger","hamburgerAbout","hamburgerEvents","hamburgerJoin","hamburgerContact"].forEach(toggleNav);
})();

/* ---------- FOOTER population ---------- */
(function populateFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;
  footer.innerHTML = `<div style="max-width:1100px;margin:0 auto;color:var(--muted)">&copy; ${new Date().getFullYear()} TechNova Club • Empowering Future Innovators</div>`;
})();

/* ---------- Typing Animation (Home + About) ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const homeEl = document.getElementById("typingHome");
  const aboutEl = document.getElementById("typingAbout");

  if (homeEl) {
    const text = "Empowering Future Innovators";
    typeText(homeEl, text);
  }
  if (aboutEl) {
    const text = "About TechNova";
    typeText(aboutEl, text);
  }

  function typeText(el, text) {
    el.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);
  }
});