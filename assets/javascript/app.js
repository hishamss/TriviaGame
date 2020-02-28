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
var time_sec = 15;
var count = 0;
var TimerIntervaID;
var Correct = 0,
  Incorrect = 0,
  Unanswered = 0;
$(document).ready(function() {
  reposition();
  $(".game").hide();
  $(".result").show();
  $(".message_cont").hide();
  $(".welcome").hide();
  window.addEventListener("resize", reposition);
  function reposition() {
    var ContHeight = $(".bg").height();
    var GameHeight = $(".game").height();
    var ResultHeight = $(".result").height();
    var WelcomeHeight = $(".welcome").height();
    var CalculatedContHeight = ContHeight * 0.5 - WelcomeHeight / 2;
    var CalculatedGameHeight = ContHeight * 0.5 - GameHeight / 2;
    var CalculatedResultHeight = ContHeight * 0.5 - ResultHeight / 2;
    $(".welcome").css("margin-top", CalculatedContHeight);
    $(".game").css("margin-top", CalculatedGameHeight);
    $(".result").css("margin-top", CalculatedResultHeight);
  }
  $("#start").click(function() {
    $(".welcome").hide();
    // to display the first question after you click start button
    DisplayQuestion();
  });

  function DisplayQuestion() {
    // when we get the last question
    if (count == questions.length) {
      clearInterval(TimerIntervaID);
      $(".game").hide();
      $("#correct").text(Correct);
      $("#incorrect").text(Incorrect);
      $("#unanswered").text(Unanswered);
      $(".result").show();
      // exit the function after all questions have been displayed
      return;
    }
    time_sec = 15;
    $("#sec").html(time_sec);
    TimerIntervaID = setInterval(function() {
      timer();
    }, 1000);
    $(".questions").html(questions[count]);
    for (i = 0; i < 4; i++) {
      $("#" + i).html(options[count][i]);
    }
    $("#score").html(Correct);
    $(".game").show();
    count++;
  }

  $(".answers").click(function() {
    clearInterval(TimerIntervaID);
    $(".game").hide();
    if ($(this).text() === answers[count - 1]) {
      $("#message").text("Great!");
      Correct++;
    } else {
      $("#message").text("Hard Luck!");
      Incorrect++;
    }
    $(".message_cont").show();
    setTimeout(function() {
      $(".message_cont").hide();
      DisplayQuestion();
    }, 2000);
  });

  function timer() {
    $("#sec").html(time_sec);
    time_sec--;
    // Timeout
    if (time_sec < 0) {
      Unanswered++;
      clearInterval(TimerIntervaID);
      $(".game").hide();
      $("#message").text("Time Out");
      $(".message_cont").show();
      setTimeout(function() {
        $(".message_cont").hide();
        DisplayQuestion();
      }, 2000);
    }
  }

  $("#StartOver").click(function() {
    console.log("clicked");
    $(".result").hide();
    count = 0;
    Correct = 0;
    Incorrect = 0;
    Unanswered = 0;
    DisplayQuestion();
  });
});
