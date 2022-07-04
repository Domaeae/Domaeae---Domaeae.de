$(function () {

  // function isDark(color) {
  //   var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(color);
  //   return parseFloat(match[1])
  //     + parseFloat(match[2])
  //     + parseFloat(match[3])
  //     < 3 * 256 / 2; // r+g+b should be less than half of max (3 * 256)
  // }


  const app = $('.app'); // Ganze App (HTML fällt noch)
  const app_body = $('.app-body'); //innere teil

  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;


  if (isDarkMode) {

    console.log('Dark modefo is enabled');
    $('body').addClass('dark');
    app_body.addClass('dark-body');


    // Dark-Buttons verdunkeln
    $('.btn-md-outline-dark').addClass('btn-md-primary');
    $('.btn-md-outline-dark').removeClass('btn-md-outline-dark');

    $('.btn-back').addClass('btn-md-pink').removeClass('btn-md-outline-dark');
    // $('.btn-d-outline-dark').removeClass('btn-md-outline-dark');



  } else {
    console.log('Light mode is enabled');
  };

});
