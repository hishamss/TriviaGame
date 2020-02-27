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
    $(".game").show();
  });
});
