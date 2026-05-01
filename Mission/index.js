let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'rgb(36, 36, 36)';
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png';
        document.body.style.color = 'white';
        document.querySelector('#content').style.borderColor = 'white';
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white';
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp';
        document.body.style.color = 'black';
        document.querySelector('#content').style.borderColor = 'black';
    }
}           
                    