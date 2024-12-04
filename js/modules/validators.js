export function nameValidator(name) {
    const nameRegex = /^[a-zA-Z ]{3,}$/;
    return nameRegex.test(name);
}

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

export function emailValidator(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

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

export function passwordValidator(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^_&*])(?=.{6,})/;
    return passwordRegex.test(password);
}

export function passwordStrongValidator(password) {
    const passwordRegexStrong = /^(?=.*\d)(?=.*[!@#$%^_&*])(?=.{9,})/;
    return passwordRegexStrong.test(password);
}

export function passwordMidValidator1(password) {
    const passwordRegexMid1 = /^(?=.*\d)(?=.{6,})/;
    return passwordRegexMid1.test(password);
}

export function passwordMidValidator2(password) {
    const passwordRegexMid2 = /^(?=.*[!@#$%^_&*])(?=.{6,})/;
    return passwordRegexMid2.test(password);
}

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