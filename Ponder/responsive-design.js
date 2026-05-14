const gallery = document.querySelector(".gallery")
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const menu = document.querySelector(".menu");
menu.addEventListener("click", showMenu);

function showMenu(event) {
    const desktopMenu = document.querySelector(".desktop-menu");
    desktopMenu.classList.toggle("show");
}


gallery.addEventListener("click", openModal);

function openModal(event) {
    console.log(event.target.src);
    if (event.target.tagName !== "IMG") {
        return;
    }
    let imgSrc = event.target.src;

    modalImage.src = imgSrc.replace("sm", "full");

    modal.showModal();
}
closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});