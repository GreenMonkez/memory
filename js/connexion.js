import {
    matchValidator
} from './modules/validators.js';

function handleSubmit(event) {
    event.preventDefault();

    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    let hasError = false;

    if (!matchValidator(formData.email, formData.password)) {
        alert('Erreur, veuillez saisir les informations correctement');
        hasError = true;
    }

    if (hasError) {
        return;
    }

    alert("L'email " + formData.email + " est connecté");
    location.href = 'profil.html'
}

document.getElementById('userForm').addEventListener('submit', handleSubmit);
