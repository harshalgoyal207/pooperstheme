/** ZIP CODE POPUP WIDGET ***/

/* Get Elements (Button and Overlay) */
const openPopUp = document.querySelectorAll("[data-modal-target]");
const overlay = document.getElementById("overlay");

/* For Each Button select data target and call open function */
openPopUp.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

/* Listen to click for Overlay to close, if overlay is active to remove active class 
   and to close that overlay */
overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
        closeModal(modal);
    });
});

/* Function to add class "active" to show pop up */
function openModal(modal) {
    if (modal === null) {
        return;
    } else {
        modal.classList.add("active");
        overlay.classList.add("active");
    }
}
/* Function to remove  class "active" to hide pop up */
function closeModal(modal) {
    if (modal === null) {
        return;
    } else {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }
}