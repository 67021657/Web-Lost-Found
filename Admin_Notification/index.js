
const ITEMS_PER_PAGE = 2; // 1 หน้าแสดงกี่ notification
let currentPage = 1;

function goPage(page){
  currentPage = page;

  const notices = document.querySelectorAll(".notice");
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  notices.forEach((notice, index) => {
    notice.style.display =
      index >= start && index < end ? "grid" : "none";
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

document.addEventListener("DOMContentLoaded",()=>{
  goPage(1);
});
