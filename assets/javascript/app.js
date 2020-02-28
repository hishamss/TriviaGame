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
var answers = [
  options[0][0],
  options[1][2],
  options[2][1],
  options[3][3],
  options[4][0]
];
var time_sec = 20;
var count = 0;
var DisplayIntervaID, TimerIntervaID;
var TimerCount = 1;
$(document).ready(function() {
  reposition();
  $(".game").hide();
  $(".result").hide();
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
    // to display the first question after you click start button
    DisplayQuestion();
    // StartGame();
  });

  function StartGame() {
    // DisplayIntervaID = setInterval(function() {
    //   DisplayQuestion();
    // }, 20000);
    // TimerIntervaID = setInterval(function() {
    //   timer();
    // }, 1000);
  }
  function DisplayQuestion() {
    // when we get the last question
    if (count == questions.length) {
      clearInterval(TimerIntervaID);
      $(".game").hide();
      $(".result").text("End of Game");
      $(".result").show();
      return;
    }
    time_sec = 20;
    TimerIntervaID = setInterval(function() {
      timer();
    }, 1000);
    $(".questions").html(questions[count]);
    for (i = 0; i < 4; i++) {
      $("#" + i).html(options[count][i]);
    }
    $(".game").show();
    count++;
  }

  $(".answers").click(function() {
    clearInterval(TimerIntervaID);
    $(".game").hide();
    if ($(this).text() === answers[count - 1]) {
      $(".result").text("Great!");
    } else {
      $(".result").text("Hard Luck!");
    }
    $(".result").show();
    setTimeout(function() {
      $(".result").hide();
      DisplayQuestion();
    }, 2000);
  });

  function timer() {
    // if (TimerCount == 5) {
    //   clearInterval(TimerIntervaID);
    // }

    $("#sec").html(time_sec);
    time_sec--;
    if (time_sec < 0) {
      clearInterval(TimerIntervaID);
      $(".game").hide();
      $(".result").text("Time Out");
      $(".result").show();
      setTimeout(function() {
        $(".result").hide();
        DisplayQuestion();
      }, 2000);
    }
  }
});
