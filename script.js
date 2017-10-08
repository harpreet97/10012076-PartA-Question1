
//Set variables based on the HTML element id's
let un = document.querySelector('#un')
let pw = document.querySelector('#pw')
let pw2 = document.querySelector('#pw2')
let submit = document.querySelector('#submit')


// This functions is used to run control events
$(document).ready(function () {

    //Step 1:
    alert("Welcome");

    //Step 2:
    $("#submit").click(function () {
        if (un.value == "" || pw.value == "" || pw2.value == "") {
            alert("Please fill the Username and Password fields first.");
            e.preventDefault();
        }
        else {
            submitFunction();
        }
    });

})

// Checking the username should be at least 8 characters.
function CheckUsernameLength() {
    if (un.value.length <= 8) {
        return true;
    }
    else{
        alert("Make sure your Username is less than 8 characters.");
        return false;
    }
}

// Checking if the password is similar in both the fields or not.
function compareValues() {
    if (pw.value == pw2.value) {
        return true;
    } else {
        alert("Make sure both the passwords are similar.")
        return false;
    }
}

// Checking all the details.
function submitFunction() {
    if (CheckUsernameLength() == true) {
        if (compareValues() == true) {
            alert("Your Username and Password is sent.");
        }
    }
}