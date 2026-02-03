const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    // ✅ 1. เก็บ user ลง localStorage
    localStorage.setItem("user", JSON.stringify(data.user));

    // ✅ 2. แจ้ง success (เลือกได้)
    alert("Login success 🎉");

    // ✅ 3. เด้งไปหน้า My Listings
    window.location.href = "../My_Listings/index.html";

  } catch (err) {
    alert("Cannot connect to backend");
    console.error(err);
  }
});
