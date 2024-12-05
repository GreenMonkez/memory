// Enregistre l'utilisateur dans le localStorage

export function saveToLocalStorage(userData) {

    const users = JSON.parse(localStorage.getItem('userData')) ?? []
    users.push(userData)

    localStorage.setItem('userData', JSON.stringify(users));
}

// Enregistre l'email de l'utilisateur connecté dans le sessionStorage

export function saveToSessionStorage(email) {
    sessionStorage.setItem('activeUser', JSON.stringify(email));
}

// Met à jour l'utilisateur

export function updateLocalStorage(users, user) {

    users.push(user);
    localStorage.setItem('userData', JSON.stringify(users));
}

// Enregistre le score dans le localStorage

export function saveScoreToLocalStorage(scoreData) {

    const scores = JSON.parse(localStorage.getItem('scoreData')) ?? []
    scores.push(scoreData)

    localStorage.setItem('scoreData', JSON.stringify(scores));
}