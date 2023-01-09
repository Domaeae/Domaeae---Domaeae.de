$(document).ready(function () {
  const app = $('.app'); // Ganze App (HTML fällt noch)
  const app_body = $('.app-body'); //innere teil
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

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
  var boolactive = true;


  btn1.click(function (e) {
    if (boolactive) {
      btn1.toggleClass("btn-md-primary-active");
      tr1.show();
      tr2.hide();
      tr3.hide();
      e.preventDefault();
      boolactive = false;
    } else {
      btn1.toggleClass("btn-md-primary-active");
      tr1.show();
      tr2.show();
      tr3.show();
      boolactive = true;
    }
  });

  btn2.click(function (e) {
    if (boolactive) {
      btn2.toggleClass("btn-md-primary-active");
      tr2.show();
      tr1.hide();
      tr3.hide();
      e.preventDefault();
      boolactive = false;
    } else {
      btn2.toggleClass("btn-md-primary-active");
      tr1.show();
      tr2.show();
      tr3.show();
      boolactive = true;
    }
  });

  // btn2.click(function (e) {
  //   tr2.show();
  //   tr1.hide();
  //   tr3.hide();
  //   e.preventDefault();

  // });

  btn3.click(function (e) {
    tr3.show();
    tr1.hide();
    tr2.hide();
    e.preventDefault();

  });

  btnall.click(function (e) {
    tr1.show();
    tr2.show();
    tr3.show();
    e.preventDefault();

  });

  btnformularmodal.click(function (e) {
    let modal = $('.formular-modal-down');
    if (modal.hasClass('modal-hide')) {
      modal.slideDown();
    } else {
      modal.addClass("modal-hide");
      modal.hide();
    }

    e.preventDefault();
  });


  // IF-Schleifen

  if (isDarkMode) {
    // Enabled when Optimize
    // enable_darkmode();
  } else {
    console.log('Light mode is enabled');
  };


  // Funktionen

  function enable_darkmode() {
    $('body').addClass('dark');
    app_body.addClass('dark-body');
    // Dark-Buttons verdunkeln
    $('.btn-md-outline-dark').addClass('btn-md-primary');
    $('.btn-md-outline-dark').removeClass('btn-md-outline-dark');
    $('.btn-back').addClass('btn-md-pink').removeClass('btn-md-outline-dark');
    // $('.btn-d-outline-dark').removeClass('btn-md-outline-dark');
  }


});
