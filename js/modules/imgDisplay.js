// Affiche une vignette à l'endroit indiqué

export function displayImg(fieldId, imgClass) {
    const element = document.getElementById(`${fieldId}`);
    element.classList.add(imgClass);
}

// Enlève les images

export function clearImg() {
    const elements = document.querySelectorAll('input');
    elements.forEach(element => element.classList.remove('errorImg', 'checkImg'));
}