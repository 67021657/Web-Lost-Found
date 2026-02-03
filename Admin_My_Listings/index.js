
let currentCardId = null;

/* ===== OPEN MODAL ===== */
function openModal(card){
  currentCardId = card.dataset.id;

  document.getElementById("modalOverlay").classList.add("active");

  document.getElementById("modalImg").src =
    card.querySelector(".card-img img").src;

  document.getElementById("modalTitle").innerText =
    card.querySelector("h3").innerText;

  const status = card.querySelector(".status");
  const modalStatus = document.getElementById("modalStatus");
  modalStatus.innerText = status.innerText;
  modalStatus.className = "status " + status.classList[1];

  document.getElementById("modalCategory").innerText =
    card.querySelector(".category").innerText;

  document.getElementById("modalDesc").innerText =
    card.querySelector(".desc").innerText;

  document.getElementById("status lost").innerText =
    status.innerText;

  syncModalBookmark();
}

/* ===== BOOKMARK TOGGLE ===== */
function toggleBookmark(event, img){
  event.stopPropagation();

  const cardId = currentCardId || img.closest(".card")?.dataset.id;
  if(!cardId) return;

  const key = "bookmark_" + cardId;
  const isSaved = localStorage.getItem(key) === "true";

  localStorage.setItem(key, !isSaved);

  updateBookmarkUI(cardId);
}

/* ===== UPDATE UI ===== */
function updateBookmarkUI(cardId){
  const isSaved = localStorage.getItem("bookmark_" + cardId) === "true";
  const icon = isSaved ? "/icons/favorite.png" : "/icons/bookmark.png";

  // update card
  const card = document.querySelector(`.card[data-id="${cardId}"]`);
  if(card){
    const img = card.querySelector(".bookmark-icon");
    if(img) img.src = icon;
  }

  // update modal
  const modalIcon = document.getElementById("modalBookmark");
  if(modalIcon) modalIcon.src = icon;
}

/* ===== SYNC MODAL WHEN OPEN ===== */
function syncModalBookmark(){
  if(currentCardId){
    updateBookmarkUI(currentCardId);
  }
}

/* ===== INIT ON PAGE LOAD ===== */
window.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".card").forEach(card=>{
    updateBookmarkUI(card.dataset.id);
  });
});

/* ===== CLOSE MODAL ===== */
function closeModal(){
  document.getElementById("modalOverlay").classList.remove("active");
}

document.getElementById("modalOverlay").addEventListener("click",e=>{
  if(e.target.id==="modalOverlay") closeModal();
});

function openReport(){
  document.getElementById("reportOverlay").classList.add("active");
}

function closeReport(){
  document.getElementById("reportOverlay").classList.remove("active");
}






const ITEMS_PER_PAGE = 6; // 3 คอลัมน์ x 2 แถว
let currentPage = 1;

function goPage(page){
  currentPage = page;

  const cards = document.querySelectorAll(".card");
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  cards.forEach((card, index) => {
    card.style.display =
      index >= start && index < end ? "flex" : "none";
  });

  updatePaginationUI(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePaginationUI(page){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
    if(Number(p.innerText) === page){
      p.classList.add("active");
    }
  });
}

// init
document.addEventListener("DOMContentLoaded",()=>{
  goPage(1);
});
