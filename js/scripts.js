// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimation();
  initScrollReveal();
  initThemeToggle();
});

function initHeroAnimation() {
  const container = document.getElementById("hero-animation");
  if (!container) return;

  if (typeof lottie !== "undefined") {
    lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./assets/animations/dev.json",
    });
  } else {
    container.innerHTML = `
      <div class="w-full h-full flex items-center justify-center text-muted text-sm italic">
        Animation coming soon
      </div>
    `;
  }
}

/**
 * Animate reveal effects on scroll for elements with data-reveal
 */
function initScrollReveal() {
  if (typeof ScrollReveal === "undefined") return;

  ScrollReveal().reveal("[data-reveal]", {
    distance: "40px",
    origin: "bottom",
    duration: 800,
    easing: "ease-out",
    interval: 100,
    opacity: 0,
    reset: false,
    cleanup: true,
  });
}

/**
 * Toggle dark mode
 */
function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  const userPref = localStorage.getItem("theme");
  const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = userPref === "dark" || (!userPref && systemPref);

  setTheme(isDark);

  toggle.addEventListener("click", () => {
    const dark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
    updateIcon(dark);
  });

  function setTheme(dark) {
    document.documentElement.classList.toggle("dark", dark);
    updateIcon(dark);
  }

  function updateIcon(dark) {
    icon.innerHTML = dark
      ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />` // 🌙
      : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.34 4.34l-.71.71
            m16.97 10.6l-.71-.71M4.34 19.66l-.71-.71
            M21 12h1M2 12H1
            m10-9a9 9 0 000 18" />`; // ☀️
  }
}
