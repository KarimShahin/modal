const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

openModal.addEventListener("click", function() {
    overlay.style.display = "block";
});

closeModal.addEventListener("click", function() {
    overlay.style.display = "none";
});