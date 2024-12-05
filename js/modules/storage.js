export function saveToLocalStorage(userData) {

    const users = JSON.parse(localStorage.getItem('userData')) ?? []
    users.push(userData)

    localStorage.setItem('userData', JSON.stringify(users));
}

export function saveToSessionStorage(email) {
    sessionStorage.setItem('activeUser', JSON.stringify(email));
}

export function updateLocalStorage(users, user) {

    users.push(user);
    localStorage.setItem('userData', JSON.stringify(users));
}

export function saveScoreToLocalStorage(scoreData) {

    const scores = JSON.parse(localStorage.getItem('scoreData')) ?? []
    scores.push(scoreData)

    localStorage.setItem('scoreData', JSON.stringify(scores));
}