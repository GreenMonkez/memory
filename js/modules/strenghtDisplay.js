// Affiche la barre " forte "

export function displayStrong() {
    document.getElementById('passwordStrenghtStrong').classList.add('strong');
    document.getElementById('passwordStrenghtStrong').innerText = "fort"
    displayMid();
}

// Affiche la barre " moyenne "

export function displayMid() {
    document.getElementById('passwordStrenghtMid').classList.add('mid');
    document.getElementById('passwordStrenghtMid').innerText = "moyen"
    displayWeak();
}

// Affiche la barre " faible "

export function displayWeak() {
    document.getElementById('passwordStrenghtWeak').classList.add('weak');
    document.getElementById('passwordStrenghtWeak').innerText = "faible"
}

// Enlève les barres

export function clearStrenght() {
    document.getElementById('passwordStrenghtStrong').classList.remove('strong');
    document.getElementById('passwordStrenghtMid').classList.remove('mid');
    document.getElementById('passwordStrenghtWeak').classList.remove('weak');
    document.getElementById('passwordStrenghtStrong').innerText = "";
    document.getElementById('passwordStrenghtMid').innerText = "";
    document.getElementById('passwordStrenghtWeak').innerText = "";
}
