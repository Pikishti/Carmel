// CARMEL Goods — shared site behavior

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
  markActiveNavLink();
  initContactForm();
  setFooterYear();
  enhancePlaceholders();
  initScrollReveal();
  initFlavorPicker();
  initWhatsAppBubble();
  initLanguageToggle();
});

// =============================================================
// Language toggle (English / Spanish). See translations.js for the
// actual copy. This block only knows how to look up and apply it.
// =============================================================

var LANG_STORAGE_KEY = "carmel_lang";
var DEFAULT_LANG = "es";

// Reads the visitor's saved language, or the default if none is stored yet.
function getCurrentLang() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;
  } catch (e) {
    return DEFAULT_LANG;
  }
}

// Looks up a dot-path key (e.g. "home.featured_heading") in translations.js.
function getTranslation(key, lang) {
  var dict = window.CARMEL_TRANSLATIONS && window.CARMEL_TRANSLATIONS[lang];
  if (!dict) return null;

  var value = dict;
  var parts = key.split(".");
  for (var i = 0; i < parts.length; i++) {
    if (value == null) return null;
    value = value[parts[i]];
  }
  return typeof value === "string" ? value : null;
}

// Applies a language to every tagged element on the current page.
function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var value = getTranslation(el.getAttribute("data-i18n"), lang);
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var value = getTranslation(el.getAttribute("data-i18n-placeholder"), lang);
    if (value != null) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    var value = getTranslation(el.getAttribute("data-i18n-aria"), lang);
    if (value != null) el.setAttribute("aria-label", value);
  });

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    var isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  updateWhatsAppLink(lang);
}

// Saves the choice and re-renders the page in that language, no reload.
function setLanguage(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    /* localStorage unavailable (private mode, etc.) — language just won't persist */
  }
  applyLanguage(lang);
}

// Wires up the two flag buttons in the nav and renders the initial language.
function initLanguageToggle() {
  var buttons = document.querySelectorAll(".lang-btn");
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  applyLanguage(getCurrentLang());
}

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
    var lang = getCurrentLang();

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = getTranslation("contact.submit_sending", lang) || "Sending...";
    }

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          status.textContent =
            getTranslation("contact.status_success", lang) ||
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
          getTranslation("contact.status_error", lang) ||
          "Something went wrong sending your message. Please try again or email us directly at info@carmelgoods.com.";
        status.classList.add("visible", "error");
      })
      .finally(function () {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = getTranslation("contact.submit_button", lang) || "Send Message";
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

// Builds the wa.me link with the prefilled message in the given language.
function buildWhatsAppUrl(lang) {
  var message =
    getTranslation("whatsapp.message", lang) || getTranslation("whatsapp.message", DEFAULT_LANG);
  return "https://wa.me/50252125030?text=" + encodeURIComponent(message);
}

// Refreshes the bubble's link and label whenever the language changes.
function updateWhatsAppLink(lang) {
  var link = document.querySelector(".whatsapp-bubble");
  if (!link) return;

  link.href = buildWhatsAppUrl(lang);

  var ariaLabel = getTranslation("whatsapp.aria", lang);
  if (ariaLabel) link.setAttribute("aria-label", ariaLabel);
}

// Floating WhatsApp chat bubble — injected on every page so it only has to live here once
function initWhatsAppBubble() {
  if (document.querySelector(".whatsapp-bubble")) return;

  var link = document.createElement("a");
  link.className = "whatsapp-bubble";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>' +
    '<path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.769.462 3.478 1.334 4.978L2 22l5.223-1.32c1.44.78 3.058 1.191 4.781 1.191h.005c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.148h-.004c-1.545 0-3.062-.415-4.396-1.198l-.315-.187-3.11.785.83-3.03-.205-.313A8.14 8.14 0 0 1 3.85 12c0-4.502 3.652-8.148 8.154-8.148 4.502 0 8.148 3.646 8.148 8.148 0 4.502-3.646 8.148-8.148 8.148z"></path>' +
    "</svg>";

  document.body.appendChild(link);
  updateWhatsAppLink(getCurrentLang());
}
