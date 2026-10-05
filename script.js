"use strict";

// Progressive enhancement: every link works without JavaScript.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const links = document.querySelectorAll(".card");
const animations = [];

function revealLinks() {
  if (motionPreference.matches) return;
  links.forEach((link, index) => {
    if (typeof link.animate !== "function") return;
    animations.push(link.animate([
      { opacity: 0, transform: "translateY(8px)" },
      { opacity: 1, transform: "translateY(0)" }
    ], {
      duration: 520,
      delay: index * 55,
      easing: "cubic-bezier(.22, 1, .36, 1)",
      fill: "backwards"
    }));
  });
}

motionPreference.addEventListener("change", (event) => {
  if (event.matches) animations.forEach((animation) => animation.cancel());
});

revealLinks();
