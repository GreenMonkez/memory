export function getDate() {
    const today = new Date();
    let day = today.getDate();
    if (day < 10) {
        day = "0" + day
    }
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = day + "/" + month + "/" + year;
    return date;
}

