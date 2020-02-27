var questions = [
  "How many legs does a spider have?",
  "What is the color of an emerald?",
  "What’s the name of a place you go to see lots of animals?",
  "What colors are the stars on the American flag?",
  "Which ocean is off the California coast?"
];
var options = [
  ["Eight", "Seven", "Six", "Five"],
  ["Blue", "Red", "Green", "Black"],
  ["Airport", "Zoo", "Park", "Lake"],
  ["Red", "Blue", "Black", "White"],
  ["The Pacific", "The Atlantic", "The Indian", "The Arctic"]
];
var answers = [options[0], options[2], options[1], options[3], options[0]];
var time_sec = 35;
var count = 0;
var IntervaID;
$(document).ready(function() {
  reposition();
  $(".game").hide();
  window.addEventListener("resize", reposition);
  function reposition() {
    var ContHeight = $(".bg").height();
    var GameHeight = $(".game").height();
    var WelcomeHeight = $(".welcome").height();
    var CalculatedContHeight = ContHeight * 0.5 - WelcomeHeight / 2;
    var CalculatedGameHeight = ContHeight * 0.5 - GameHeight / 2;
    $(".welcome").css("margin-top", CalculatedContHeight);
    $(".game").css("margin-top", CalculatedGameHeight);
  }
  $("#start").click(function() {
    $(".welcome").hide();
    DisplayQuestion();
    $(".game").show();
    StartGame();
  });

  function StartGame() {
    IntervaID = setInterval(function() {
      DisplayQuestion();
    }, 3000);
  }

  function DisplayQuestion() {
    console.log("hit");
    $(".questions").html(questions[count]);

    for (i = 0; i < 4; i++) {
      $("#" + i).html(options[count][i]);
    }
    count++;
    if (count == questions.length) {
      clearInterval(IntervaID);
    }
  }

  // function timer() {
  //   time_sec--;
  //   $("#sec").html(time_sec);
  // }
  // function sleep(milliseconds) {
  //   var date = Date.now();
  //   var currentDate = null;
  //   do {
  //     currentDate = Date.now();
  //   } while (currentDate - date < milliseconds);
  // }
});
