const reservationButton = document.querySelector(".reservation__button");
const reservationModal = document.querySelector("#reservation-modal");
const reservationCloseBtn = reservationModal.querySelector(".modal__close-btn");
const reservationForm = reservationModal.querySelector(".modal__form");
const confirmatiionModal = document.querySelector("#confirmation-modal");
const reservationNameInput = reservationModal.querySelector("#name-input");
const reservationCountInput = reservationModal.querySelector("#count-input");
const reservationDateInput = reservationModal.querySelector("#datetime-input");
const reservationEmailInput = reservationModal.querySelector("#email-input");

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

reservationForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  confirmationModal.classList.add("modal_is-opened");
  reservationModal.classList.remove("modal_is-opened");

  console.log(reservationNameInput.value);
  console.log(reservationCountInput.value);
  console.log(reservationDateInput.value);
  console.log(reservationEmailInput.value);

  reservationForm.reset();
});
