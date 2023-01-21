$(document).ready(function () {


  const app = $('.app'); // Ganze App (HTML fällt noch)
  const app_body = $('.app-body'); //innere teil
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  var DarkModeBool;

  const tr1 = $('.tr-1');
  const tr2 = $('.tr-2');
  const tr3 = $('.tr-3');
  // ============
  const btn1 = $(".gl1");
  const btn2 = $(".gl2");
  const btn3 = $(".gl3");
  const btnall = $(".glall");
  const btnformularmodal = $(".btn-formular-modal");
  // ============
  const btn_proj_1 = $("#btn-proj-1");
  const btn_proj_2 = $("#btn-proj-2");
  const btn_proj_3 = $("#btn-proj-3");
  const btn_proj_4 = $("#btn-proj-4");
  var boolactive = true;
  var proj_int = 0;



  const $btndark = $('#btn-dark');
  const $thmdark = $('.theme-selector-dark');
  const $thmlight = $('.theme-selector-light');
  let $themebool = true;






  // $btndark.toggleClass('btn-md-dark');
  $btndark.click(function (e) {
    // if ($themebool !== true) {
    //   $thmdark.toggleClass('animation');
    //   $thmlight.toggleClass('animation');
    // }
    enable_darkmode();
    $('.theme-button').toggleClass('animation');
    $('.theme-button').toggleClass('animatied');
    // $btndark.toggleClass('btn-md-dark').toggleClass('btn-md-outline-dark').removeClass('btn-md-primary');


    e.preventDefault();
  });


  // btn1.click(function (e) {
  //   if (boolactive) {
  //     btn1.toggleClass("btn-md-primary-active");
  //     tr1.show();
  //     tr2.hide();
  //     tr3.hide();
  //     e.preventDefault();
  //     boolactive = false;
  //   } else {
  //     btn1.toggleClass("btn-md-primary-active");
  //     tr1.show();
  //     tr2.show();
  //     tr3.show();
  //     boolactive = true;
  //   }
  // });

  // btn2.click(function (e) {
  //   if (boolactive) {
  //     btn2.toggleClass("btn-md-primary-active");
  //     tr2.show();
  //     tr1.hide();
  //     tr3.hide();
  //     e.preventDefault();
  //     boolactive = false;
  //   } else {
  //     btn2.toggleClass("btn-md-primary-active");
  //     tr1.show();
  //     tr2.show();
  //     tr3.show();
  //     boolactive = true;
  //   }
  // });

  // btn2.click(function (e) {
  //   tr2.show();
  //   tr1.hide();
  //   tr3.hide();
  //   e.preventDefault();

  // });

  // btn3.click(function (e) {
  //   tr3.show();
  //   tr1.hide();
  //   tr2.hide();
  //   e.preventDefault();

  // });


  // IF-Schleifen
  // let lsDarkmode = localStorage.getItem("darkmode");

  // if (lsDarkmode == null) {
  //   localStorage.setItem("darkmode", false);
  //   enable_darkmode();
  // } else {
  //   enable_darkmode();
  // }



  function check_darkmode() {

    if (lsDarkmode === "true") {
      // enable_darkmode();
      enable_darkmode();
      console.log("saved darkmode");
      console.log(lsDarkmode);
    } else {
      localStorage.setItem("darkmode", false);
      console.log(lsDarkmode);
    }

  }


  // if (isDarkMode) {
  //   enable_darkmode();
  //   localStorage.setItem('isDarkMode', true);
  //   console.log("true");
  // } else {
  // };



  // Funktionen

  function enable_darkmode() {
    $('body').toggleClass('dark');
    app_body.toggleClass('dark-body');
    // Dark-Buttons verdunkeln
    $('.btn-md-outline-dark').toggleClass('btn-md-primary');
    $('.btn-md-outline-dark').removeClass('btn-md-outline-dark');
    $('.btn-back').toggleClass('btn-md-pink').removeClass('btn-md-outline-dark');
    // $('.btn-d-outline-dark').removeClass('btn-md-outline-dark');
  }

  check_darkmode();


});
