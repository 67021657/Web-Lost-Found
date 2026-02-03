
document.querySelectorAll(".toggle-password").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const input = toggle.previousElementSibling;

    if (input.type === "password") {
      input.type = "text";
      toggle.src = "/icons/hidden.png";
    } else {
      input.type = "password";
      toggle.src = "/icons/hidden.png";
    }
  });
});
