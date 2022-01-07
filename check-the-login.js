let ourH1 = document.getElementById("test");
let userNameInput = prompt("username", "");

if (userNameInput == "Admin") {
    let userPassInput = prompt("password", "");
    
    if (userPassInput == "TheMaster") {
       ourH1.innerHTML = "Welcome!"; 
    }
    else if (userPassInput == "" || userPassInput == undefined) {
        ourH1.innerHTML = "Canceled."; }
    else {
        ourH1.innerHTML = "Wrong Password";
    }
}

else if (userNameInput == "" || userNameInput == undefined) {
    ourH1.innerHTML = "Canceled.";
}

else {
    ourH1.innerHTML = "I don't know you.";
}