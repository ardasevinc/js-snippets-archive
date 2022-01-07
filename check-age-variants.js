// Original

function checkAgeOriginal(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Did parents allow you?");
    }
}

// With ||, one line

function checkAgeOR(age) {
    return age > 18 || confirm("Did parents allow you?");
}

// with ?

function checkAgeTernary(age) {
    return (age > 18) ? true : confirm("Did parents allow you?");
}
