import {
    matchValidator
} from './modules/validators.js';
import { saveToSessionStorage } from './modules/storage.js';

// Logique de la connexion (event submit)

function handleSubmit(event) {
    event.preventDefault();

    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    let hasError = false;

    formData.password = MD5.generate(formData.password);
    if (!matchValidator(formData.email, formData.password)) {
        alert('Erreur, veuillez saisir les informations correctement');
        hasError = true;
    }

    if (hasError) {
        return;
    }

    saveToSessionStorage(formData.email);
    alert("L'email " + formData.email + " est connecté");
    location.href = 'profil.html'
}

document.getElementById('userForm').addEventListener('submit', handleSubmit);
