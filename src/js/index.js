$(document).ready(function () {
    const header_height = $("header img").height();
    // $(window).scroll(function (e) {
    //     console.log($(window).scrollTop());
    // });

    $(window).on("scroll", function () {
        var currentPosition = $(window).scrollTop();
        console.log(currentPosition);
        // var newPosition = header_height * currentPosition;
        $("header img").animate({ top: "-" + currentPosition * 3 + "px" }, 1);

        if (currentPosition > 70) {

            $('header h2').css({
                position: "fixed",
                color: "black"
            });

        };

        // $("header img").css("opacity", "0." + scrolled);
        // $("header img").css("height", "5vh");

    });
});