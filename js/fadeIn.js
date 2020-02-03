$('head').append(
    '<style>.wrapMain{display:none;}'
    );
    $(window).on("load", function() {
    $('.wrapMain').delay(200).fadeIn(1000);
    });

