/////////////////////////////////
// Mobile Navigation
////////////////////////////////////
const btnEl = document.querySelector(".mobile-nav");
const headerEl = document.querySelector(".header");

btnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Smooth Scrolling animation

const allLinks = document.querySelectorAll("a");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    // Scroll to Top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

////////////////////////////////////////////////////////////////
// Sticky Navigation

// const sectionHeroEl = document.querySelector(".section-hero");

// const options = {
//   root: null,
//   threshold: 0,
// };

// const observer = new IntersectionObserver(function (entries) {
//   const ent = entries[0];

//   if (ent.isIntersecting === false) {
//     document.body.classList.add("sticky");
//   }
// }, options);

// observer.observe(sectionHeroEl);

const sectionHeroEl = document.querySelector(".section-hero");

if (sectionHeroEl) {
  const observer = new IntersectionObserver((entries) => {
    // Handle intersection changes
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        document.querySelector(".header").classList.add("sticky");
      }
    });
  });

  observer.observe(sectionHeroEl); // Pass the target element to observe
}
