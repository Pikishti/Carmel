// CARMEL Goods — shared site behavior

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
  markActiveNavLink();
  initContactForm();
  setFooterYear();
  enhancePlaceholders();
  initScrollReveal();
  initFlavorPicker();
});

// Mobile nav toggle
function initNavToggle() {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Highlight the current page in the nav
function markActiveNavLink() {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

// Give placeholder image blocks a proper accessible name instead of
// exposing the raw description text (and the decorative camera icon) to
// screen readers as plain content.
function enhancePlaceholders() {
  document.querySelectorAll(".img-placeholder").forEach(function (el) {
    var label = el.querySelector("span");
    if (!label) return;

    el.setAttribute("role", "img");
    el.setAttribute("aria-label", label.textContent.trim());
    label.setAttribute("aria-hidden", "true");
  });
}

// Fade/slide in key sections as they scroll into view.
function initScrollReveal() {
  var targets = document.querySelectorAll(
    ".product-card, .value-card, .info-card, .about-grid, .story-card, .section-heading, .contrast-list"
  );
  if (!targets.length) return;

  targets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    targets.forEach(function (el) {
      el.classList.add("revealed");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
}

// Butter Sample Pack flavor picker — caps selection at 3 of 4 checkboxes
function initFlavorPicker() {
  var boxes = document.querySelectorAll('input[name="sample-flavor"]');
  if (!boxes.length) return;

  var MAX = 3;

  function update() {
    var checkedCount = 0;
    boxes.forEach(function (box) {
      if (box.checked) checkedCount++;
    });

    boxes.forEach(function (box) {
      box.disabled = !box.checked && checkedCount >= MAX;
    });
  }

  boxes.forEach(function (box) {
    box.addEventListener("change", update);
  });

  update();
}

// Contact form — submits to Formspree without leaving the page
function initContactForm() {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (!form || !status) return;

  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");

  var submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          status.textContent =
            "Thanks for reaching out! We've received your message and will get back to you soon.";
          status.classList.remove("error");
          status.classList.add("visible");
          form.reset();
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch(function () {
        status.textContent =
          "Something went wrong sending your message. Please try again or email us directly at info@carmelgoods.com.";
        status.classList.add("visible", "error");
      })
      .finally(function () {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
        }
      });
  });
}

// Footer copyright year
function setFooterYear() {
  var yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
