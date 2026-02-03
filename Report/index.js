
const uploadBox = document.getElementById("uploadBox");
const input = document.getElementById("photoInput");
const preview = document.getElementById("photoPreview");
const text = uploadBox.querySelector(".upload-text");

/* click */
uploadBox.addEventListener("click", () => input.click());

/* input select */
input.addEventListener("change", () => {
  if(input.files.length) showPreview(input.files[0]);
});

/* drag over */
uploadBox.addEventListener("dragover", e => {
  e.preventDefault();
  uploadBox.classList.add("dragover");
});

/* drag leave */
uploadBox.addEventListener("dragleave", () => {
  uploadBox.classList.remove("dragover");
});

/* drop */
uploadBox.addEventListener("drop", e => {
  e.preventDefault();
  uploadBox.classList.remove("dragover");

  const file = e.dataTransfer.files[0];
  if(file && file.type.startsWith("image/")){
    input.files = e.dataTransfer.files;
    showPreview(file);
  }
});

function showPreview(file){
  const reader = new FileReader();
  reader.onload = () => {
    preview.src = reader.result;
    preview.style.display = "block";
    text.style.display = "none";
  };
  reader.readAsDataURL(file);
}
