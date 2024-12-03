export function nameValidator(name) {
    const nameRegex = /^[a-zA-Z ]{3,}$/;
    return nameRegex.test(name);
}

export function emailValidator(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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



