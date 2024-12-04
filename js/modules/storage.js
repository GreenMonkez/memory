export function saveToLocalStorage(userData) {

    const users = JSON.parse(localStorage.getItem('userData')) ?? []
    users.push(userData)

    localStorage.setItem('userData', JSON.stringify(users));
}

export function saveToLocalStorageActive(email) {
    localStorage.setItem('activeUser', JSON.stringify(email));
}