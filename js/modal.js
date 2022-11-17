(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalPopup: document.querySelector("[data-modal-popup]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", () => refs.modal.classList.add("is-hidden"));
  refs.modalPopup.addEventListener("click", event => event.stopPropagation());

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();