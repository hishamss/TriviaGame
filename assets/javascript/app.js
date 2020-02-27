$(document).ready(function() {
  reposition();
  window.addEventListener("resize", reposition);
  function reposition() {
    var ContHeight = $(".bg").height();
    var CalculatedContHeight = ContHeight * 0.5 - 233;
    $(".welcome").css("margin-top", CalculatedContHeight);
  }
});
