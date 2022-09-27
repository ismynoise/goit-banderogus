const DARK_THEME_ACTIVE_CLASS_NAME = 'dark';
const LIGHT_THEME_ACTIVE_CLASS_NAME = 'light';

const logo = document.querySelector('#logo');
const body = document.querySelector('body');

const toggleBtn = document.querySelector('#toggle-theme-btn');

toggleBtn.addEventListener('click', () => {
    if (toggleBtn.innerHTML == "Dark") {
        logo.src = "./img/logo_light.svg";
        body.classList.add(DARK_THEME_ACTIVE_CLASS_NAME);
        body.classList.remove(LIGHT_THEME_ACTIVE_CLASS_NAME);
        toggleBtn.innerHTML = "Light";
    }
    else {
        logo.src = "./img/logo.svg";
        body.classList.add(LIGHT_THEME_ACTIVE_CLASS_NAME);
        body.classList.remove(DARK_THEME_ACTIVE_CLASS_NAME);
        toggleBtn.innerHTML = "Dark";
    }
})