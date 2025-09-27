// Initialize tsParticles animation on the element with ID 'particles-container'
tsParticles.load("particles-container", {
  fpsLimit: 60, // Limit animation frames per second to 60 for performance

  particles: {
    number: {
      value: 100, // Number of particles on screen
      density: {
        enable: true, // Enable density-based distribution
        area: 900, // Area for density calculation (particles per 900px^2)
      },
    },
    color: {
      value: ["#7b5cff", "#b57aff", "#6f52ff"], // Colors used for particles (purple shades)
      animation: {
        enable: true, // Enable color animation (particles change colors)
        speed: 20, // Speed of color cycling
        sync: false, // Colors animate independently (not synchronized)
      },
    },
    shape: { type: "circle" }, // Particle shape is circle

    opacity: {
      value: 0.6, // Base opacity
      random: { enable: true, minimumValue: 0.3 }, // Randomize opacity between 0.3 and 0.6
      anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false }, // Opacity animates between 0.2 and 0.6 independently
    },

    size: {
      value: 3, // Base size of particles
      random: { enable: true, minimumValue: 1 }, // Size varies randomly between 1 and 3
      anim: { enable: true, speed: 3, size_min: 0.8, sync: false }, // Size animates between 0.8 and 3 independently
    },

    links: {
      enable: true, // Enable lines linking nearby particles
      distance: 150, // Max distance to draw link between particles
      color: "#a37fff", // Link color (purple)
      opacity: 0.5, // Link opacity
      width: 1, // Link thickness
      blink: true, // Links will blink (fade in/out)
      consent: false, // Not requiring user consent to enable links
    },

    move: {
      enable: true, // Enable particle movement
      speed: 2.5, // Movement speed
      direction: "none", // No fixed direction; particles move randomly
      random: true, // Movement randomness enabled
      straight: false, // Particles don't move in straight lines
      outModes: { default: "bounce" }, // Particles bounce off edges instead of disappearing
      attract: {
        enable: false, // Disable attraction forces between particles
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },

  interactivity: {
    detectsOn: "canvas", // Interactions detected on canvas element

    events: {
      onHover: { enable: true, mode: ["grab", "repulse"] }, // On mouse hover: grab particles and repel them
      onClick: { enable: true, mode: "push" }, // On click: push (add) more particles
      resize: true, // Adjust particles on window resize
    },

    modes: {
      grab: { distance: 180, links: { opacity: 0.7 } }, // Grab mode pulls particles within 180px and links with opacity 0.7
      repulse: { distance: 120, duration: 0.6 }, // Repulse particles within 120px for 0.6 seconds on hover
      push: { quantity: 6 }, // Add 6 new particles on click
    },
  },

  detectRetina: true, // Adjust for retina/high-DPI screens for crisp visuals

  background: { color: "#121212" }, // Background color for particle container
});

// --- Scroll to Top Button Functionality ---

// Get the scroll-to-top button by its ID
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the scroll-to-top button based on how far user has scrolled
window.addEventListener("scroll", () => {
  // If user scrolled more than 100 pixels down, display the button, else hide it
  scrollToTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
});

// When user clicks the scroll-to-top button, smoothly scroll to the top of the page
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Auto-collapse Mobile Navbar ---

// Select all nav links inside the navbar
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    // Get the navbar toggler (hamburger icon)
    const toggler = document.querySelector(".navbar-toggler");

    // If toggler is visible (mobile view), simulate click to close navbar menu after link click
    if (getComputedStyle(toggler).display !== "none") {
      toggler.click();
    }
  });
});

const typed = new Typed("#typed-roles", {
  strings: [
    "WordPress Developer",
    "Front-End Developer",
    "React Developer",
    "Associate Software Engineer",
    "Software Engineer",
    "Vibe Coder",
    "Gamer",
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
});
