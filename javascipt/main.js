function submitButton() {
    var answer1 = document.getElementById("response1").value;
    var answer2 = document.getElementById("response2").value;
    var answer3 = document.getElementById("response3").value;
    var answer4 = document.getElementById("response4").value;
    var answer5 = document.getElementById("response5").value;
    var answer6 = document.getElementById("response6").value;

    if (answer1 == "Aerosmith") {

        document.getElementById("correction1").innerHTML = "You got the first one right!";
    } else {
        document.getElementById("correction1").innerHTML = "You got the first one wrong!";
    }
    if (answer2 == "Green Day") {
        document.getElementById("correction2").innerHTML = "You got the second one right!";
    } else {
        document.getElementById("correction2").innerHTML = "You got the second one wrong!";
    }
    if (answer3 == "The Eagles") {
        document.getElementById("correction3").innerHTML = "You got the third one right!";
    } else {
        document.getElementById("correction3").innerHTML = "You got the third one wrong!";
    }
    if (answer4 == "Queen") {
        document.getElementById("correction4").innerHTML = "You got the fourth one right!";
    } else {
        document.getElementById("correction4").innerHTML = "You got the fourth one wrong!";
    }
    if (answer5 == "Journey") {
        document.getElementById("correction5").innerHTML = "You got the fifth one right!";
    } else {
        document.getElementById("correction5").innerHTML = "You got the fifth one wrong!";
    }
    if (answer6 == "Red Hot Chili Peppers") {
        document.getElementById("correction6").innerHTML = "You got the sixth one right!";
    } else {
        document.getElementById("correction6").innerHTML = "You got the sixth one wrong!";
    }


function amountCorrect () {
    function createPoints (){
        if (answer1 === true) {
            a = true;
        }
        else {
            a = false;
        }
        if (answer2 === true) {
            b = true;
        }
        else {
            b = false;
        }
        if (answer3 === true) {
            c = true;
        }
        else {
            c = false;
        }
        if (answer4 === true) {
            d = true;
        }
        else {
            d = false;
        }
        if (answer5 === true) {
            e = true;
        }
        else {
            e = false;
        }
        if (answer6 === true) {
            f = true;
        }
        else {
            f = false;
        }
    }
    var a = 1;
    var b = 1;
    var c = 1;
    var d = 1;
    var e = 1;
    var f = 1;
    var total = a + b + c + d + e + f;
    if (total = 6) {
        document.getElementById("calculation").innerHTML = "You got 100%!";
    }
    if (total = 5) {
        document.getElementById("calculation").innerHTML = "You got 83%!";
    }
    if (total = 4) {
        document.getElementById("calculation").innerHTML = "You got 66%";
    }
    if (total = 3) {
        document.getElementById("calculation").innerHTML = "You got 50%";
    }
    else {
        document.getElementById("calculation").innerHTML = "Better luck next time.";
    }
}
}
