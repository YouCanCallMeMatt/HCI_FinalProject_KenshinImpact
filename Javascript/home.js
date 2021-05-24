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

  $(".hero .slide").eq($show).css("opacity", 1);

  $(".hero .arrow").click(function () {
    $(".hero .slide").eq($show).removeClass("active");
    $(".hero .dots li").eq($show).removeClass("dot-active");
    if ($(this).hasClass("prev")) {
      $show -= 1;
    } else {
      $show += 1;
    }
    $show = showCheck($show);
    $(".hero .slide").eq($show).addClass("active");
    $(".hero .dots li").eq($show).addClass("dot-active");
  });

  $mid = 0;
  $l = 3;
  $r = 1;
  $(".characters .arrow").click(function () {
    $(".characters .card").eq($l).removeClass("left");
    $(".characters .card").eq($mid).removeClass("middle");
    $(".characters .card").eq($r).removeClass("right");
    if ($(this).hasClass("prev")) {
      $mid--;
      $l--;
      $r--;
    } else {
      $mid++;
      $l++;
      $r++;
    }
    $mid = showCheck($mid);
    $l = showCheck($l);
    $r = showCheck($r);
    $(".characters .card").eq($l).addClass("left");
    $(".characters .card").eq($mid).addClass("middle");
    $(".characters .card").eq($r).addClass("right");
  });
});
