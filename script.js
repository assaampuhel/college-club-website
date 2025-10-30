/*
  script.js - responsible for:
  - rendering events dynamically on Events page and Home preview
  - handling the Join form (validation + feedback)
  - populating footer year and club statement
  - mobile nav toggling (simple)
*/

/* -------------------------
   EVENTS DATA (single source)
   Modify here to add/remove events
   ------------------------- */
const events = [
  {
    name: "Hack the Future 2025",
    date: "January 15–17, 2025",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    description:
      "A 48-hour hackathon where creative minds collaborate on futuristic tech solutions. Includes mentorship, exciting prizes and team challenges focused on social impact."
  },
  {
    name: "AI & Robotics Workshop",
    date: "March 2, 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    description:
      "Hands-on workshop exploring AI fundamentals and introductory robotics. Build a small autonomous bot and learn model training workflows."
  },
  {
    name: "Tech Expo 2025",
    date: "May 20, 2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Showcase of student projects with live demos, startup pitches and networking opportunities with industry professionals."
  },
  {
    name: "Women in Tech Meetup",
    date: "August 10, 2025",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    description:
      "A meetup celebrating women innovators in STEM. Debates, career sessions, and mentorship circles designed to grow leadership and inclusivity."
  },
  {
    name: "Annual Tech Fest",
    date: "December 5–7, 2025",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1400&q=80",
    description:
      "A three-day festival featuring coding contests, hardware demos, speaker sessions and social events to wrap up the year in style."
  }
];

/* -------------------------
   Helper: create a single event card HTML (string)
   ------------------------- */
function createEventCard(event) {
  return `
    <article class="event-card" role="article" aria-label="${escapeHtml(event.name)}">
      <img loading="lazy" src="${escapeHtml(event.image)}" alt="${escapeHtml(event.name)}">
      <div class="event-details">
        <div class="event-date">${escapeHtml(event.date)}</div>
        <h3>${escapeHtml(event.name)}</h3>
        <p>${escapeHtml(event.description)}</p>
      </div>
    </article>
  `;
}

/* Basic HTML-escape to avoid accidental markup injection */
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* -------------------------
   Render events on Events page (full list)
   ------------------------- */
const eventsContainer = document.getElementById("eventsContainer");
if (eventsContainer) {
  // join all cards and insert
  eventsContainer.innerHTML = events.map(createEventCard).join("");
}

/* -------------------------
   Render top 3 events on Home preview
   ------------------------- */
const homeEvents = document.getElementById("homeEvents");
if (homeEvents) {
  const preview = events.slice(0, 3).map(e => `
    <div class="event-card">
      <img loading="lazy" src="${escapeHtml(e.image)}" alt="${escapeHtml(e.name)}">
      <div class="event-details">
        <h3>${escapeHtml(e.name)}</h3>
        <div class="event-date">${escapeHtml(e.date)}</div>
      </div>
    </div>
  `).join("");
  homeEvents.innerHTML = preview;
}

/* -------------------------
   Join form: validation + feedback
   Handles forms with id="joinForm"
   ------------------------- */
const joinForm = document.getElementById("joinForm");
if (joinForm) {
  joinForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    // get values
    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const interestEl = document.getElementById("interest");
    const messageEl = document.getElementById("formMessage");

    // basic validation
    const name = nameEl ? nameEl.value.trim() : "";
    const email = emailEl ? emailEl.value.trim() : "";
    const interest = interestEl ? interestEl.value.trim() : "";

    // email regex (simple)
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !emailOk) {
      if (messageEl) {
        messageEl.textContent = "⚠️ Please provide a valid name and email.";
        messageEl.style.color = "#ff7b7b";
      }
      return;
    }

    // simulate success (for real app, you'd POST to a server)
    if (messageEl) {
      messageEl.textContent = `🎉 Thanks ${name}! We'll contact you at ${email}.`;
      messageEl.style.color = "#8ef6c6";
    }

    // reset form fields (keeping interest optional)
    if (joinForm) joinForm.reset();
  });
}

/* -------------------------
   Footer population (year + tagline)
   ------------------------- */
const footer = document.getElementById("footer");
if (footer) {
  footer.innerHTML = `<div style="max-width:1100px;margin:0 auto;color:var(--muted);">
    <p>&copy; ${new Date().getFullYear()} Tech Innovators Club • Empowering Future Innovators</p>
  </div>`;
}

/* -------------------------
   Simple mobile nav toggle (for hamburger)
   - toggles nav-links visibility on small screens
   ------------------------- */
function setupHamburger(buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  btn.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    if (!navLinks) return;
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
  });
}
setupHamburger("hamburger");
setupHamburger("hamburgerAbout");
setupHamburger("hamburgerEvents");
setupHamburger("hamburgerJoin");
setupHamburger("hamburgerContact");