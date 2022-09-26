const MODAL_ACTIVE_CLASS_NAME = 'modal-active';
const DARK_THEME_ACTIVE_CLASS_NAME = 'dark';
const LIGHT_THEME_ACTIVE_CLASS_NAME = 'light';

const logo = document.querySelector('#logo');
const body = document.querySelector('body');
const formModal = document.querySelector('#form-modal');
const successModal = document.querySelector('#success-modal');
const form = document.querySelector('#form');

const openFormModalBtn = document.querySelector('#open-form-modal-btn');
const launchBtn = document.querySelector('#launch-btn');
const closeBtns = document.querySelectorAll('.close-btn');

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

openFormModalBtn.addEventListener('click', () => {
    formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
})

const closeFormModal = () => {
    formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const closeSuccessModal = () => {
    successModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessModal = () => {
    successModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
};

closeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeFormModal();
        closeSuccessModal();
    })
})


form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            closeFormModal();
            setTimeout(openSuccessModal, 700);
            setTimeout(closeSuccessModal, 3000);
        })
        .catch((error) => console.log('Sending form failed'));
})

