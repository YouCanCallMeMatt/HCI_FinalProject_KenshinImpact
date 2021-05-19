$(document).ready(function () {
  // slides

  function showCheck($num) {
    if ($num < 0) {
      $num = 3;
    } else if ($num > 3) {
      $num = 0;
    }
    return $num;
  }

  $show = 0;

  $("slide").eq($show).css("opacity", 1);

  $(".arrow").click(function () {
    $(".slide").eq($show).removeClass("active");
    if ($(this).hasClass("prev")) {
      $show -= 1;
    } else {
      $show += 1;
    }
    $show = showCheck($show);
    $(".slide").eq($show).addClass("active");
  });
});
