// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimation();
});

function initHeroAnimation() {
  const container = document.getElementById("hero-animation");
  if (!container) return;

  // Placeholder fallback content
  container.innerHTML = `
    <div class="w-full h-full flex items-center justify-center text-muted text-sm italic">
      Animation coming soon
    </div>
  `;
}
