// Vérifie le nom

export function nameValidator(name) {
    const nameRegex = /^[a-zA-Z ]{3,}$/;
    return nameRegex.test(name);
}

// Vérifie l'unicité du nom

export function nameUniqueValidator(name) {
    const users = JSON.parse(localStorage.getItem("userData")) ?? [];
    const result = users.find(user => user.name === name);

    if (result == null) {
        return true;
    }
    else {
        return false;
    }
}

// Vérifie l'email

export function emailValidator(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Vérifie l'unicité de l'email

export function emailUniqueValidator(email) {
    const users = JSON.parse(localStorage.getItem("userData")) ?? [];
    const result = users.find(user => user.email === email);

    if (result == null) {
        return true;
    }
    else {
        return false;
    }
}

// Véfifie le mot de passe

export function passwordValidator(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^_&*])(?=.{6,})/;
    return passwordRegex.test(password);
}

// Vérifie que le mot de passe soit fort

export function passwordStrongValidator(password) {
    const passwordRegexStrong = /^(?=.*\d)(?=.*[!@#$%^_&*])(?=.{9,})/;
    return passwordRegexStrong.test(password);
}

// Vérifie que le mot de passe soit moyen (avec un chiffre)

export function passwordMidValidator1(password) {
    const passwordRegexMid1 = /^(?=.*\d)(?=.{6,})/;
    return passwordRegexMid1.test(password);
}

// Vérifie que le mot de passe soit moyen (avec un caractère spécial)

export function passwordMidValidator2(password) {
    const passwordRegexMid2 = /^(?=.*[!@#$%^_&*])(?=.{6,})/;
    return passwordRegexMid2.test(password);
}

// Vérifie que l'email et le mot de passe correspondent

export function matchValidator(email, password) {
    const users = JSON.parse(localStorage.getItem("userData")) ?? [];
    const user = users.find(user => user.email === email) ?? [];
    const userPassword = user['password'];

    if (userPassword == password) {
        return true;
    }
    else {
        return false;
    }
}