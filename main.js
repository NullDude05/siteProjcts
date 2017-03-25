
$(document).ready(function() {
    $('.button-click').click(function() {
    var answer1 = document.getElementsByClassName("answer1");
    var answer2 = document.getElementsByClassName("answer2");
    var answer3 = document.getElementsByClassName("answer3");
    var answer4 = document.getElementsByClassName('answer4');
    var answer5 = document.getElementsByClassName('answer5');
    var answer6 = document.getElementsByClassName('answer6');

        
    if (answer1 === "Aerosmith") {
      alert("You got the first one right!");
    }
    else {
      alert("You got the first one wrong");
    }
    if (answer2 === "Green Day") {
      alert("You got the second one right!");
    } else {
      alert("You got the second one wrong");
    }
    if (answer3 === "The Eagles") {
      alert("You got the third one right!");
    } else {
      alert("You got the third one wrong");
    }
    if (answer4 === "Queen") {
      alert("You got the fourth one right!");
    } else {
      alert("You got the fourth one wrong");
    }
    if (answer5 === "Journey") {
      alert("You got the fifth one right!");
    } else {
      alert("You got the fifth one wrong");
    }
    if (answer6 === "Red Hot Chili Peppers") {
      alert("You got the sixth one right!");
    } else {
      alert("You got the sixth one wrong");
    }
  });

});
