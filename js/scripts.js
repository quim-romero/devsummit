// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimation();
  initScrollReveal();
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
