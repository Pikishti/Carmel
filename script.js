// CARMEL Goods — shared site behavior

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
  markActiveNavLink();
  initContactForm();
  setFooterYear();
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
    }
  });
}

// Contact form — UI only, does not submit anywhere yet
function initContactForm() {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    status.textContent =
      "Thanks for reaching out! This form is a placeholder for now — hook it up to your email or form service to start receiving messages.";
    status.classList.add("visible");

    form.reset();
  });
}

// Footer copyright year
function setFooterYear() {
  var yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
