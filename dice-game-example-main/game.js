//when the button is cicked
//change all the die images to the gift animation
document.getElementById("rollButton").addEventListener("click", event => {

    //get the images
    const images = document.querySelectorAll("#gameboard img");
    //Change the src
    images.forEach(image => {
        if (isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    //wait 2 seconds, then call this anonymous function
    setTimeout(() => {
        images.forEach(image => {
            if (isDieUnlocked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1 ) + ".gif";
            }
        });
    }, 500);

})

function isDieUnlocked(dieImage){
    // retrieve list of checkeboxes
    const checkboxes = document.querySelectorAll("#gameboard input");
    // filter out checked
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    //compare list to dieImage, if there's a match, return true
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}