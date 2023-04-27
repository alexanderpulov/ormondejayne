$(function() {

    let nav = $("#nav");
    let navH = nav.innerHeight();

    // Smooth scroll to sections ===========================
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos - navH
        }, 500);

    });


});