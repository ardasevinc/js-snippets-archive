let userRangeInput = prompt("Enter the end of the range", 0);

outer:
for (let i = 2; i <= userRangeInput; i++) {
    for (let j = 2; j < i; j++) {
        if (i == 2) {
            alert(i);
            continue outer;
        }
        if (i % j == 0) continue outer;
    }
    alert(i);
}
