
document.querySelectorAll(".toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const inputId = toggle.dataset.target;
    const input = document.getElementById(inputId);

    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";

    toggle.src = isHidden
      ? "/icons/hidden.png"     
      : "/icons/hidden.png"; 
  });
});
