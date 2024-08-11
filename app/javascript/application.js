// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import { tsParticles } from "tsparticles";
import { loadSeaAnemonePreset } from "@tsparticles/preset-sea-anemone";
import { loadStarsPreset } from "@tsparticles/preset-stars";

(async () => {
  await loadSeaAnemonePreset(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "seaAnemone",
    },
  });
})();

(async () => {
  await loadStarsPreset(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "stars",
    },
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsparticles", {
    particles: {
      number: {
        value: 50
      },
      size: {
        value: 3
      }
      // ... more configuration options
    }
  });
});

