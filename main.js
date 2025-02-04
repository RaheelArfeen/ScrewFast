document.addEventListener("DOMContentLoaded", function () {
    const themeToggles = document.querySelectorAll("[data-hs-theme-click-value]");
    const body = document.body;

    // Check saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark";

    if (isDarkMode) {
        body.classList.add("light");
    }
    updateIcons(isDarkMode);

    // Function to update icon visibility
    function updateIcons(isDark) {
        themeToggles.forEach(toggle => {
            if (toggle.dataset.hsThemeClickValue === "dark") {
                toggle.style.display = isDark ? "none" : "inline-flex";
            } else {
                toggle.style.display = isDark ? "inline-flex" : "none";
            }
        });
    }

    // Add event listener to both buttons
    themeToggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const isDarkModeNow = toggle.dataset.hsThemeClickValue === "dark";
            body.classList.toggle("light", isDarkModeNow);
            localStorage.setItem("theme", isDarkModeNow ? "dark" : "light");
            updateIcons(isDarkModeNow);
        });
    });
});

const menuIcon = document.getElementById('menu');
const crossIcon = document.getElementById('cross');
const navigation = document.getElementById('navigatoin');

menuIcon.addEventListener('click', () => {
    crossIcon.classList.add('show')
    navigation.classList.add('dropdown')
    menuIcon.classList.add('hidden')
});

crossIcon.addEventListener('click', () => {
    crossIcon.classList.remove('show')
    navigation.classList.remove('dropdown')
    menuIcon.classList.remove('hidden')
})


const cutIcon = document.getElementById('cut');
const addvertise = document.getElementById('addvertise')

cutIcon.addEventListener('click', () => {
    addvertise.classList.add('hide');
})