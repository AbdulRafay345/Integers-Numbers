
// show output
function showOutput(output) {
    document.getElementById("output").innerHTML = output
}

// toast function 
function toastError(text) {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "red",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


// round a number
function roundNumber() {
    let input = document.getElementById("input").value;
    if (!input) {
        toastError("Please Enter A Floating Number")
        return;
    } else {
        let roundNumber = Math.round(input);
        showOutput("<span class = 'fs-4'>" + roundNumber + "</span>")
    }
}


// ceil a number
function ceilNumber() {
    let input = document.getElementById("input").value;
    if (!input) {
        toastError("Please Enter A Floating Number")
        return;
    } else {
        let ceilNumber = Math.ceil(input);
        showOutput("<span class = 'fs-4'>" + ceilNumber + "</span>")
    }
}


// floor a number
function floorNumber() {
    let input = document.getElementById("input").value;
    if (!input) {
        toastError("Please Enter A Floating Number")
        return;
    } else {
        let floorNumber = Math.floor(input);
        showOutput("<span class = 'fs-4'>" + floorNumber + "</span>")
    }
}


// random number
function randomNumber() {
    let randomNumber = Math.random();
    showOutput("<span class = 'fs-4'>" + randomNumber + "</span>")
}


// throw a dice
function throwDice() {
    let throwdice = Math.random();
    let diceNumber = (throwdice * 6) + 1
    diceNumber = Math.floor(diceNumber);
    showOutput("<span class = 'fs-4'>" + diceNumber + "</span>")
}


// strong password
function strongPassword() {
    let limit = 16
    let possiblePassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/[]~.;'";
    let randomPassword = ""
    for (let i = 0; i <= limit; i++) {
        let randomNumber = Math.random()
        randomPassword += possiblePassword.charAt(Math.floor(randomNumber * possiblePassword.length))
    }
    showOutput("<span class = 'fs-4'>" + randomPassword + "</span>")
}


// converting string into number
function convertingStrings() {
    let input = document.getElementById("input").value;
    if (!input) {
        toastError("Please Enter A Number(string)")
        return;
    } else {
        let inputType = typeof (input)
        num = Number(input)
        numType = typeof (num)
        showOutput("Orignal string = <span class = 'fs-4'>'" + input + "'</span></br>" + "Input type = <span class = 'fs-4'>" + inputType + "</span></br>" + "Converted String = <span class = 'fs-4'>" + num + "</span></br>" + "Output type = <span class = 'fs-4'>" + numType + "</span>")
    }
}


// control length of decimal points
function decimalLength() {
    let input = document.getElementById("input").value;
    if (!input) {
        toastError("Enter a Floating Number")
        return;
    } else {
        let num = Number(input)
        num = num.toFixed(2)
        showOutput("Original Floating Number = <span class = 'fs-4'>" + input + "</span>" + "<br>" + "Controlled Length = <span class = 'fs-4'>" +num + "</span>")
    }
}


// calculate gst
function totalGst() {
    let input = document.getElementById("input").value;
    if (!input) {
        toastError("Please Enter The Amount")
        return;
    } else {
        let num = Number(input)
        let gst = num * (18 / 100)
        gst.toFixed(2)
        totalAmount = num + gst
        totalAmount.toFixed(2)
        showOutput ("<span class = 'fs-4'>Amount = " + input + "</br>" + "GST = " + gst + "</br>" + "Total Price = " + totalAmount + "</span>")
    }
}


// clear input
function clearInput() {
    document.getElementById("input").value = ""
}

// clear output
function clearOutput () {
    document.getElementById("output").innerHTML = "" 
}