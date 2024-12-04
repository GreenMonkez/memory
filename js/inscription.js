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

function handleSubmit(event) {
    event.preventDefault();

    clearFieldErrors();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    let hasError = false;

    if (!nameValidator(formData.name)) {
        displayFieldError('name', "Nom invalide");
        hasError = true;
    }

    if (!nameUniqueValidator(formData.name)) {
        displayFieldError('name', "Nom indisponible");
        hasError = true;
    }

    if (!emailValidator(formData.email)) {
        displayFieldError('email', "Email invalide");
        hasError = true;
    }

    if (!emailUniqueValidator(formData.email)) {
        displayFieldError('email', "Email indisponible");
        hasError = true;
    }

    if (!passwordValidator(formData.password)) {
        displayFieldError('password', "Le mot de passe doit contenir au moins 6 caractères, un chiffre et un caractère spécial");
        hasError = true;
    }

    if (formData.password !== document.getElementById('passwordConfirm').value) {
        displayFieldError('passwordConfirm', "Le mot de passe ne correspond pas");
        hasError = true;
    }

    if (hasError) {
        return;
    }

    saveToLocalStorage(formData);
    alert('Inscription réussie !');
    location.href = 'connexion.html'
}

document.getElementById('userForm').addEventListener('submit', handleSubmit);

function clearAll() {
    clearFieldErrors();
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