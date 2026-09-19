const navModal = document.getElementById("navModal");
const navModalName = document.getElementById("navModalName");

function bukaMenuPopup(namaMenu) {
  if (navModal && navModalName) {
    navModalName.innerText = namaMenu;
    navModal.classList.add("active");
  }
}

function tutupMenuPopup() {
  if (navModal) {
    navModal.classList.remove("active");
  }
}

window.addEventListener("click", (e) => {
  if (e.target === navModal) {
    navModal.classList.remove("active");
  }
});