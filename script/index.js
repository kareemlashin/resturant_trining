// & when all html render
$(document).ready(function () {


  
  //$(".loading").fadeOut(1500);
    
    /*=============================================
    =            Section comment magnificPopup            =
    =============================================*/
   /* 
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
      });
      */
    /*=====  End of Section comment magnificPopup  ======*/
    
    /*=============================================
    =            Section comment language            =
    =============================================*/
    // todo get dir html first
    // ! remove  old 
    // ^ change dir
    
   
    
    /*=====  End of Section comment language  ======*/
/*    $(window).scroll(function () { 
      let wScroll=$(window).scrollTop();
      let sec=$("#count__section").offset().top - 100;
if(sec <= wScroll){

  let count_num1 = $(".count1").attr("count-num");
  let count_default1 = $(".count1").text();
  let count_num_convert1 = parseInt(count_num1);
  let increase1 = () => {
      if (count_default1 < count_num_convert1) {
          count_default1++;
          $(".count1").text(count_default1);
      } else {
          clearInterval(increase1);
      }
  }
  setInterval(increase1, 100);
  
  let count_num2 = $(".count2").attr("count-num");
  let count_default2 = $(".count2").text();
  let count_num_convert2 = parseInt(count_num2);
  let increase2 = () => {
      if (count_default2 < count_num_convert2) {
          count_default2++;
          $(".count2").text(count_default2);
      } else {
          clearInterval(increase2);
      }
  }
  setInterval(increase2, 100);


    
  let count_num3 = $(".count3").attr("count-num");
  let count_default3 = $(".count3").text();
  let count_num_convert3 = parseInt(count_num3);
  let increase3 = () => {
      if (count_default3 < count_num_convert3) {
          count_default3++;
          $(".count3").text(count_default3);
      } else {
          clearInterval(increase3);
      }
  }
  setInterval(increase3, 100);


}

    });
*/


  /*  $(".nav-item .nav-link , .links li a").click(function() {
      let LinkHref = $(this).attr("href");
      $("html,body").animate({ scrollTop: $(LinkHref).offset().top }, 1000)
  })
  $("#up").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 1000)
})
*/

$('#owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  rtl:false,
  center:true,
  dots:true,
  mouseDrag:true,
  touchDrag:true,
  mergeFit:true,
  autoplay:true,
  smartSpeed:1500,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:5.5
      },
      1000:{
          items:8
      }
  }
})


//owl-carouse__rtl
/*

$(".language").click(function () { 
  // ~ get current dir
  let dir=$("html").attr("dir");
  // ~ check current dir

  if(dir=="rtl"){
    $("html").removeAttr("dir");
    $("html").attr("dir","ltr");
    $(".language").text("العربيه")

  }else{
    $("html").removeAttr("dir");
    $("html").attr("dir","rtl");
    $(".language").text("English")

  }
});*/
});

/* 
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("demo").innerHTML = days + "  day   " + hours + "  h  " +
            minutes + "    m    " + seconds + "   s  ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
*/