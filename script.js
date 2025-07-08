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
