document.addEventListener("DOMContentLoaded", function () {
    const themeToggles = document.querySelectorAll("[data-hs-theme-click-value]");
    const body = document.body;

    // Check saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark";

    if (isDarkMode) {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
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
            if (isDarkModeNow) {
                body.classList.add("dark");
                body.classList.remove("light");
            } else {
                body.classList.add("light");
                body.classList.remove("dark");
            }
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




// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get all the buttons
    const buttons = document.querySelectorAll('button[data-hs-tab]');
  
    // Add event listeners to each button
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        // Hide all images
        const allTabs = document.querySelectorAll('[role="tabpanel"]');
        allTabs.forEach(tab => {
          tab.classList.add('hidden');
        });
  
        // Remove "active" class from all buttons
        buttons.forEach(btn => {
          btn.classList.remove('active');
        });
  
        // Show the corresponding image and add the "active" class to the clicked button
        const targetTabId = button.getAttribute('data-hs-tab');
        const targetTab = document.querySelector(targetTabId);
        if (targetTab) {
          targetTab.classList.remove('hidden');
        }
  
        // Add active state to the clicked button
        button.classList.add('active');
      });
    });
  });
  