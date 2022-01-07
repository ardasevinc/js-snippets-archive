"use strict";

function capitalize(str) {
    return str.charAt(0).toUpperCase().concat('', str.substring(1));
}

function capitalizeIter(str) {
    let strIter = str.split("");

    strIter[0] = strIter[0].toUpperCase();

    return (strIter.join("").toString());
}

// console.log( capitalize("arda") );
// console.log( capitalize("ARDA") );
