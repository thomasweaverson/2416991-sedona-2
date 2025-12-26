const openButton = document.querySelector(".search-button");
const overlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".modal-close-button");
const form = document.querySelector(".search-form");
const body = document.body;

const HIDDEN_CLASS = "modal-overlay--hidden";
const BODY_LOCK_CLASS = "body--locked";

let isOpen = !overlay.classList.contains(HIDDEN_CLASS);

function openModal(event) {
  event.preventDefault();
  if (isOpen) return;

  overlay.classList.remove(HIDDEN_CLASS);
  body.classList.add(BODY_LOCK_CLASS);
  document.addEventListener("keydown", onEscPress);
  isOpen = true;
}

function closeModal() {
  if (!isOpen) return;

  overlay.classList.add(HIDDEN_CLASS);
  body.classList.remove(BODY_LOCK_CLASS);
  document.removeEventListener("keydown", onEscPress);

  if (form) {
    form.reset();
  }

  isOpen = false;
}

function onEscPress(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

if (openButton && overlay) {
  openButton.addEventListener("click", openModal);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeModal();
    }
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }
}
