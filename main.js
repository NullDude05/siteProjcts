var answer1 = document.getElementById('img1').innerHTML;
var answer2 = "Green Day";
var answer3 = "Eagles";
var answer4 = "Queen";
var answer5 = "Journey";
var answer6 = "Red Hot Chili Peppers";
var test = document.getElementById('minigame');

function getAnswer(answer1, answer2, answer3, answer4, answer5, answer6) {
  if (answer1 = "Aerosmith") {
    console.log("You got it!");
  }
  else {
    console.log("Incorrect");
  }
  if (answer2 = "Green Day") {
    console.log("Yes!");
  } else {
    console.log("Nope, Sorry.");
  }
  if (answer3 = "Eagles") {
    console.log("You did it!");
  } else {
    console.log("No");
  }
  if (answer4 = "Queen") {
    console.log("Correct!");
  } else {
    console.log("Incorrect");
  }
  if (answer5 = "Journey") {
    console.log("Good Job!");
  } else {
    console.log("Nope");
  }
  if (answer6 = "Red Hot Chili Peppers") {
    console.log("Great Job!");
  } else {
    console.log("Not right.");
  }
}
getAnswer();
