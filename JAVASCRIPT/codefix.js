document.addEventListener("DOMContentLoaded", function() {
    const mainMenu = document.getElementById('MainMenu');
    const menuBackground = document.getElementById('MenuBackground');

    if (!mainMenu || !menuBackground) {
        console.error("Could not find elements with specified IDs.");
        return;
    }

    mainMenu.addEventListener('click', function() {
        menuBackground.classList.toggle('translated1');
    });
});

function changeImage() {
    // Get all elements with the class 'MainMenu'
    const mainMenus = document.querySelectorAll('.MainMenu');

    // Loop through each element with the class 'MainMenu'
    mainMenus.forEach(function(mainMenu) {
        // Toggle image source
        if (mainMenu.getAttribute('src') === '../Images/list.png') {
            mainMenu.setAttribute('src', '../Images/X.svg');
        } else {
            mainMenu.setAttribute('src', '../Images/list.png');
        }
    });
}
