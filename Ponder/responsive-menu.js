let menuButton = document.querySelector(".menu-btn");

console.log(menuButton);

// event listener
menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    console.log(event)
    //togel on/off the menu display
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide");
    menuButton.classList.toggle("change");
    // Grab the nav from the DOM
    // Toggle the .hide class on/off
    // profit
}