
const passwordInput = document.getElementById("passwordInput");
const toggleIcon = document.getElementById("togglePassword");

toggleIcon.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";
  toggleIcon.src = isHidden
    ? "/icons/hidden.png"     
    : "/icons/hidden.png"; 
});
