export function displayImg(fieldId, imgClass) {
    const element = document.getElementById(`${fieldId}`);
    element.classList.add(imgClass);
}

export function clearImg() {
    const elements = document.querySelectorAll('input');
    elements.forEach(element => element.classList.remove('errorImg', 'checkImg'));
}