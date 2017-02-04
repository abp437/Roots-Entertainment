$(document).ready(function() {
    $(".wear").hide();
    $('.wear:first').show();
    $(".Costume li a").click(function () {
        var tablink = $(this).attr('href');
        $(".wear").fadeOut(0);
        $(tablink).stop().fadeIn(400);
        $(this).parents(".Costume").find('li').removeClass("active");
        $(this).parents(".Costume li").addClass("active");
        return false;
    });
});