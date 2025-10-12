const reservationButton = document.querySelector(".reservation__button");
const reservationModal = document.querySelector("#reservation-modal");
const reservationCloseBtn = reservationModal.querySelector(".modal__close-btn");
const reservationForm = reservationModal.querySelector(".modal__form");

// reservationButton.addEventListener("click", function () {
//   reservationModal.setAttribute("style", "visibility: visible");
// });

reservationButton.addEventListener("click", function () {
  reservationModal.setAttribute("class", "modal_is-opened");
});

// reservationCloseBtn.addEventListener("click", function () {
//   reservationModal.setAttribute("style", "visibility: hidden");
// });

reservationCloseBtn.addEventListener("click", function () {
  reservationModal.removeAttribute("class", "modal_is-opened");
});
