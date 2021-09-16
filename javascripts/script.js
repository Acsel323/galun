$(document).ready(function(){

  $('.button_back').click(function(){
    $('.figures').toggleClass('click')
  });
  $('.press_one').click(function(){
    $('.a').toggleClass('visible')
  });
  $('.press_two').click(function(){
    $('.b').toggleClass('visible')
  });

  $('.first').click(function(){
    $('.figure1').toggleClass('spin')
  });
  $('.second').click(function(){
    $('.figure2').toggleClass('spin2')
  });
  $('.third').click(function(){
    $('.figure3').toggleClass('spin')
  });
  $('.forth').click(function(){
    $('.figure4').toggleClass('spin2')
  });
  $('.fifth').click(function(){
    $('.figure5').toggleClass('spin')
  });

  $('.rectangle').click(function(){
    $('.glass').find('#glass').attr('src',"images/glasses/glasses_rectangle_black.svg");
  });
  $('.star').click(function(){
    $('.glass').find('#glass').attr('src',"images/glasses/glasses_star_black.svg");
  });
  $('.circle').click(function(){
    $('.glass').find('#glass').attr('src',"images/glasses/glasses_round_black.svg");
  });

  $(".green").click(function() {

      let rectangle1 = "images/glasses/glasses_rectangle_black.svg";
      let rectangle2 = "images/glasses/glasses_rectangle_purple.svg";

      if ([rectangle1, rectangle2].includes($('#glass').attr("src"))) {
        $('#glass').attr("src", "images/glasses/glasses_rectangle_green.svg");
        return;
      }

      let star1 = "images/glasses/glasses_star_black.svg";
      let star2 = "images/glasses/glasses_star_purple.svg";

      if ([star1, star2].includes($('#glass').attr("src"))) {
        $('#glass').attr("src", "images/glasses/glasses_star_green.svg");
        return;
      }

      let round1 = "images/glasses/glasses_round_black.svg";
      let round2 = "images/glasses/glasses_round_purple.svg";

      if ([round1, round2].includes($('#glass').attr("src"))) {
        $('#glass').attr("src", "images/glasses/glasses_round_green.svg");
      }
    });

    $(".purple").click(function() {

        let rectangle1 = "images/glasses/glasses_rectangle_black.svg";
        let rectangle2 = "images/glasses/glasses_rectangle_green.svg";

        if ([rectangle1, rectangle2].includes($('#glass').attr("src"))) {
          $('#glass').attr("src", "images/glasses/glasses_rectangle_purple.svg");
          return;
        }

        let star1 = "images/glasses/glasses_star_black.svg";
        let star2 = "images/glasses/glasses_star_green.svg";

        if ([star1, star2].includes($('#glass').attr("src"))) {
          $('#glass').attr("src", "images/glasses/glasses_star_purple.svg");
          return;
        }

        let round1 = "images/glasses/glasses_round_black.svg";
        let round2 = "images/glasses/glasses_round_green.svg";

        if ([round1, round2].includes($('#glass').attr("src"))) {
          $('#glass').attr("src", "images/glasses/glasses_round_purple.svg");
        }
      });

      $(".black").click(function() {

          let rectangle1 = "images/glasses/glasses_rectangle_purple.svg";
          let rectangle2 = "images/glasses/glasses_rectangle_green.svg";

          if ([rectangle1, rectangle2].includes($('#glass').attr("src"))) {
            $('#glass').attr("src", "images/glasses/glasses_rectangle_black.svg");
            return;
          }

          let star1 = "images/glasses/glasses_star_purple.svg";
          let star2 = "images/glasses/glasses_star_green.svg";

          if ([star1, star2].includes($('#glass').attr("src"))) {
            $('#glass').attr("src", "images/glasses/glasses_star_black.svg");
            return;
          }

          let round1 = "images/glasses/glasses_round_purple.svg";
          let round2 = "images/glasses/glasses_round_green.svg";

          if ([round1, round2].includes($('#glass').attr("src"))) {
            $('#glass').attr("src", "images/glasses/glasses_round_black.svg");
          }
        });
});
