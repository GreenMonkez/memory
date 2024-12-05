import {
    nameValidator,
    nameUniqueValidator,
    emailValidator,
    emailUniqueValidator,
    passwordValidator,
    passwordStrongValidator,
    passwordMidValidator1,
    passwordMidValidator2
} from './modules/validators.js';
import { saveToLocalStorage } from './modules/storage.js';
import {
    displayFieldError,
    clearFieldErrors
} from './modules/errorDisplay.js';
import {
    clearStrenght,
    displayWeak,
    displayMid,
    displayStrong
} from './modules/strenghtDisplay.js';
import {
    displayImg,
    clearImg,
} from './modules/imgDisplay.js';

function handleSubmit(event) {
    event.preventDefault();

    clearFieldErrors();
    clearImg();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    let hasError = false;
    let hasNameError = false;
    let hasEmailError = false;
    let hasPasswordError = false;
    let hasPasswordConfirmError = false;

    if (!nameValidator(formData.name)) {
        displayFieldError('name', "Nom invalide");
        hasError = true;
        hasNameError = true;
    }

    if (!nameUniqueValidator(formData.name)) {
        displayFieldError('name', "Nom indisponible");
        hasError = true;
        hasNameError = true;
    }

    if (!emailValidator(formData.email)) {
        displayFieldError('email', "Email invalide");
        hasError = true;
        hasEmailError = true;
    }

    if (!emailUniqueValidator(formData.email)) {
        displayFieldError('email', "Email indisponible");
        hasError = true;
        hasEmailError = true;
    }
    if (!passwordValidator(formData.password)) {
        displayFieldError('password', "Le mot de passe doit contenir au moins 6 caractères, un chiffre et un caractère spécial");
        hasError = true;
        hasPasswordError = true;
    }

    let passwordConfirm = document.getElementById('passwordConfirm').value;
    if (formData.password !== passwordConfirm || passwordConfirm === "") {
        displayFieldError('passwordConfirm', "Le mot de passe ne correspond pas");
        hasError = true;
        hasPasswordConfirmError = true;
    }

    if (hasNameError) {
        displayImg('name', 'errorImg');
    } else {
        displayImg('name', 'checkImg');
    }

    if (hasEmailError) {
        displayImg('email', 'errorImg');
    } else {
        displayImg('email', 'checkImg');
    }

    if (hasPasswordError) {
        displayImg('password', 'errorImg');
    } else {
        displayImg('password', 'checkImg');
    }

    if (hasPasswordConfirmError) {
        displayImg('passwordConfirm', 'errorImg');
    } else {
        displayImg('passwordConfirm', 'checkImg');
    }

    if (hasError) {
        document.getElementById('myDiv').classList.add('error');
        setTimeout(() => {
            document.getElementById('myDiv').classList.remove('error');
        }, 500);
        return;
    }

    formData.password = MD5.generate(formData.password);
    saveToLocalStorage(formData);
    alert('Inscription réussie !');
    location.href = 'connexion.html'
}

document.getElementById('userForm').addEventListener('submit', handleSubmit);

function clearAll() {
    clearFieldErrors();
    clearImg();
    clearStrenght();
}

document.getElementById('userForm').addEventListener('reset', clearAll);

function strenghtCheck() {
    const password = document.getElementById('password').value;

    clearStrenght();
    if (passwordStrongValidator(password)) {
        displayStrong();
    } else if (passwordMidValidator1(password) || passwordMidValidator2(password)) {
        displayMid();
    } else if (password) {
        displayWeak();
    }
}

document.getElementById('password').addEventListener('keyup', strenghtCheck);