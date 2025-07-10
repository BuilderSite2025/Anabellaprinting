// product read-more toggle
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.read-more-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const description = button.nextElementSibling;
      const isVisible = description.style.display === "block";
      description.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible ? "View More" : "Show Less";
    });
  });
});

// AJAX form submit with popup
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/Help@anabellaprinting.co.za", {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      form.reset();
      const popup = document.getElementById("thank-you-popup");
      popup.classList.add("show");
      popup.classList.remove("hidden");
      setTimeout(() => {
        popup.classList.remove("show");
        popup.classList.add("hidden");
      }, 5000);
    } else alert("Submission issue, please try again.");
  })
  .catch(() => alert("Submission failed. Check your connection."));
});
