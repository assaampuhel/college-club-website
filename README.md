# 🌐 TechNova Club Website

A modern, responsive, and animated multi-page website for **TechNova Club**, built using **HTML, CSS, and JavaScript**.  
It showcases club information, events, joining options, and contact details — designed with a clean UI, mobile responsiveness, and subtle animations for a professional look.

---

## 📁 Project Structure

TechNova-Club/
│
├── index.html        # Home page with hero banner and typing animation
├── about.html        # About page with club mission, team, and goals
├── events.html       # Events listing with cards and dynamic loading
├── join.html         # Join page with form for membership
├── contact.html      # Contact page with form and club details
│
├── style.css         # Unified responsive stylesheet (dark/light themes)
├── script.js         # Theme toggle, mobile nav, toast notifications, typing effect

---

## 🛠️ Features

### 🎨 UI & UX
- **Animated background gradient** across all pages for dynamic feel.  
- **Consistent dark/light mode toggle** powered by JS and CSS variables.  
- **Glassmorphism panels** for depth and clarity.  
- **Clean and modern typography** using Poppins font.  
- **Typing animation** (Home + About page) for engaging hero text.  
- **Smooth scrolling and transitions** for polished navigation.  

### 📱 Responsiveness
- Fully optimized for **mobile, tablet, and desktop**.
- Responsive **navigation menu** with hamburger toggle on smaller screens.
- All layouts (About grid, Events cards, Contact form) adjust smoothly to screen size.

### ⚡ Functionalities
- **Theme toggle** (Dark / Light mode)  
- **Dynamic toast messages** (for form submission feedback)  
- **Mobile navigation toggle**  
- **JS-based typing animation** with cursor blink  
- **Reusable footer auto-filled by script.js**  

---

## 🧩 Technologies Used

| Component | Technology |
|------------|-------------|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox, Grid, Animations, Variables) |
| Interactivity | Vanilla JavaScript (ES6) |
| Animations | Keyframes (CSS) + JS typing effect |
| Design System | Custom dark/light theme, glassmorphism |
| Fonts | [Poppins](https://fonts.google.com/specimen/Poppins) |
| Icons | [Flaticon](https://www.flaticon.com/) |

---

## 🚀 Approach & Build Process

### 1. **Planning**
- Identified 5 key pages for the club website (Home, About, Events, Join, Contact).
- Decided on a unified design language with dark theme, accent color `#00a8ff`, and consistent typography.

### 2. **HTML Structure**
- Built semantic layouts for each page (`header`, `section`, `footer`).
- Reused common components like navigation and footer across all files for uniformity.

### 3. **Styling (CSS)**
- Created a single `style.css` file containing:
  - Global theme variables.
  - Dark/light mode support.
  - Reusable card and section styles.
  - Responsive design with `clamp()` and media queries.
  - Animated gradient background for a smooth visual transition.

### 4. **Interactivity (JavaScript)**
- Added `script.js` to:
  - Toggle light/dark themes using class switching.
  - Control the mobile navigation toggle.
  - Handle toast notifications on form actions.
  - Animate typing text on the Home and About pages using a custom JS interval.
  - Automatically load footer content on all pages.

### 5. **Accessibility & Responsiveness**
- Used `aria-labels` for nav buttons.
- Ensured text contrast for readability.
- Designed flexible grids using CSS Grid & Flexbox for adaptive layouts.

### 6. **Testing**
- Verified cross-browser compatibility (Chrome, Safari, Edge).
- Manually tested on various screen sizes (MacBook, iPhone, Android phones).
- Optimized loading performance by using hosted assets (icons, images).

---

## 💡 Design Philosophy

- **Simplicity + Depth**: Clean visual hierarchy with subtle shadows and rounded corners.
- **Consistency**: Same navigation, color palette, and typography across pages.
- **Animation for Experience**: Smooth motion enhances engagement without distraction.
- **Accessibility First**: High contrast and readable font sizes ensure inclusivity.

---

## 🧠 Learning Outcomes

- Mastered CSS animations and transitions.  
- Learned how to use **CSS variables** for instant theme switching.  
- Implemented a **typing animation** purely via JavaScript logic.  
- Improved understanding of responsive web design with media queries.  
- Practiced structuring multi-page front-end projects like real-world websites.

---

## 📷 Preview

> 🌈 **Live Features:**
> - Background gradient animation  
> - Typing animation in hero section  
> - Glassy cards for events and team  
> - Light/Dark theme toggle  

*(Add screenshots or deployment link here)*

---

## 🧾 Future Enhancements

- Connect forms with backend (e.g., Firebase or Formspree).  
- Add event data fetching from JSON or API.  
- Include smooth scroll fade-in animations using IntersectionObserver.  
- Add a gallery and alumni page for more club engagement.  

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).