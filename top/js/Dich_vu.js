$(document).ready(function () {

    $(".menu-dich-vu-items:first-child").hover(function () {
            // over
            $(".content-dich-vu").css("border-top-left-radius", "unset");
        }, function () {
            // out
            $(".content-dich-vu").css("border-top-left-radius", "20px");
        }
    );

    $(".menu-dich-vu-items:last-child").hover(function () {
            // over
            $(".content-dich-vu").css("border-top-right-radius", "unset");
        }, function () {
            // out
            $(".content-dich-vu").css("border-top-right-radius", "20px");
        }
        
    );
});
