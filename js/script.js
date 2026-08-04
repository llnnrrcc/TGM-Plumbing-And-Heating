// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
  }
});

// Quote form submission (Formspree) — see README for setup instructions
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("quote-form");
  var status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          status.textContent = "Thanks — your request has been sent. We'll be in touch shortly.";
          status.className = "form-status success";
        } else {
          status.textContent = "Something went wrong. Please call us instead on 07847 756181.";
          status.className = "form-status error";
        }
      })
      .catch(function () {
        status.textContent = "Something went wrong. Please call us instead on 07847 756181.";
        status.className = "form-status error";
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Quote Request";
      });
  });
});
