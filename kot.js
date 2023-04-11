const Modal = document.querySelector(".modal")
const OpenModal = document.querySelector(".open-button")
const CloseModal = document.querySelector(".close-button")

OpenModal.addEventListener('click', () => {
    Modal.showModal()
})

CloseModal.addEventListener('click', () => {
    Modal.close()
})