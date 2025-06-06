// Affiche un message d'erreur à l'endoit indiqué

export function displayFieldError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    errorElement.textContent = message;
}

// Enlève les messages d'erreur

export function clearFieldErrors() {
    const errorElements = document.querySelectorAll('[id$="Error"]');
    errorElements.forEach(element => element.textContent = '');
}