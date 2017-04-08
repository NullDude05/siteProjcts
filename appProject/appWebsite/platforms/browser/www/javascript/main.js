function submitButton() {
    var answer1 = document.getElementById("response1").value;
    var answer2 = document.getElementById("response2").value;
    var answer3 = document.getElementById("response3").value;
    var answer4 = document.getElementById("response4").value;
    var answer5 = document.getElementById("response5").value;
    var answer6 = document.getElementById("response6").value;

    if (answer1 == "Aerosmith") {

        document.getElementById("correction1").innerHTML = "You got the first one right!";
        answer1 = true;
    } else {
        document.getElementById("correction1").innerHTML = "You got the first one wrong!";
        answer1 = false;
    }
    if (answer2 == "Green Day") {
        document.getElementById("correction2").innerHTML = "You got the second one right!";
        answer2 = true;
    } else {
        document.getElementById("correction2").innerHTML = "You got the second one wrong!";
        answer2 = false;
    }
    if (answer3 == "The Eagles") {
        document.getElementById("correction3").innerHTML = "You got the third one right!";
        answer3 = true;
    } else {
        document.getElementById("correction3").innerHTML = "You got the third one wrong!";
        answer3 = false;
    }
    if (answer4 == "Queen") {
        document.getElementById("correction4").innerHTML = "You got the fourth one right!";
        answer4 = true;
    } else {
        document.getElementById("correction4").innerHTML = "You got the fourth one wrong!";
        answer4 = false;
    }
    if (answer5 == "Journey") {
        document.getElementById("correction5").innerHTML = "You got the fifth one right!";
        answer5 = true;
    } else {
        document.getElementById("correction5").innerHTML = "You got the fifth one wrong!";
        answer5 = false;
    }
    if (answer6 == "Red Hot Chili Peppers") {
        document.getElementById("correction6").innerHTML = "You got the sixth one right!";
        answer6 = true;
    } else {
        document.getElementById("correction6").innerHTML = "You got the sixth one wrong!";
        answer6 = false;
    }

    var a = 1;
    var b = 1;
    var c = 1;
    var d = 1;
    var e = 1;
    var f = 1;
     if (answer1 === true) {
            a = 1;
        }
        else {
            a = 0;
        }
        if (answer2 === true) {
            b = 1;
        }
        else {
            b = 0;
        }
        if (answer3 === true) {
            c = 1;
        }
        else {
            c = 0;
        }
        if (answer4 === true) {
            d = 1;
        }
        else {
            d = 0;
        }
        if (answer5 === true) {
            e = 1;
        }
        else {
            e = 0;
        }
        if (answer6 === true) {
            f = 1;
        }
        else {
            f = 0;
        }
        var total = a + b + c + d + e + f;
        if (total == 6) {
        document.getElementById("calculation").innerHTML = "You got 100%!";
    }
    else if (total == 5) {
        document.getElementById("calculation").innerHTML = "You got 83%!";
    }
    else if (total == 4) {
        document.getElementById("calculation").innerHTML = "You got 66%";
    }
    else if (total == 3) {
        document.getElementById("calculation").innerHTML = "You got 50%";
    }
    else {
        document.getElementById("calculation").innerHTML = "Better luck next time.";
    }
 }
//    switch (total) {
//            case 0:
//                total == 6;
//                document.getElementById("calculation").innerHTML = "You got 100%!";
//                break;
//            case 1:
//                total == 5;
//                document.getElementById("calculation").innerHTML = "You got 83%!";
//                break;
//            case 2:
//                total == 4;
//                document.getElementById("calculation").innerHTML = "You got 66%!";
//                break;
//            case 3:
//                total == 3;
//                document.getElementById("calculation").innerHTML = "You got 50%!";
//                break;
//            default:
//                document.getElementById("calculation").innerHTML = "Better luck next time.";
//                break;
//
//                     };
