var newstop = 0;
var eventtop = 0;
var abouttop = 0;
var aboutbot = 0;
var limits = [];

(function ($) {
    function UpdateScroll(scroll) {
        for (var i = 0; i < limits.length; i ++) {
            if (((limits[i][0] == undefined) || (scroll >= limits[i][0])) &&
                ((limits[i][1] == undefined) || (scroll < limits[i][1]))) {
                $(".menu-item").eq(i).addClass ("active");
            } else {
                $(".menu-item").eq(i).removeClass ("active");
            }
        }
    }
window.addEventListener("load", () => {
    $(".site-slogan")[0].innerHTML = "<strong>Music</strong>Theme"; /*Popravek za izgled na logotu <strong značka>*/
    $(".menu-item")[1].childNodes[1].href = "http://localhost/#block-adchallenge-content"; /*Popravek da deluje news gumb>*/
    
    newstop = $("#block-adchallenge-content").offset().top + $("#block-adchallenge-content").scrollTop();
    eventtop = $("#block-latest-event").offset().top + $("#block-latest-event").scrollTop();
    abouttop = $("#block-about-me").offset().top + $("#block-about-me").scrollTop();
    aboutbot = $("#block-about-me").offset().bottom;
    limits = [[undefined, newstop],
              [newstop, eventtop],
              [eventtop, abouttop],
              [abouttop, aboutbot]];

    UpdateScroll($(window).scrollTop());
});
window.addEventListener("resize", () => {
    newstop = $("#block-adchallenge-content").offset().top;
    eventtop = $("#block-latest-event").offset().top;
    abouttop = $("#block-about-me").offset().top;
    aboutbot = $("#block-about-me").offset().bottom;
    limits = [[undefined, newstop],
              [newstop, eventtop],
              [eventtop, abouttop],
              [abouttop, aboutbot]];

    UpdateScroll($(window).scrollTop());
});
window.addEventListener("scroll", () => {   
    var scroll = $(window).scrollTop() + $("header").outerHeight();

    UpdateScroll(scroll);
  });
})(jQuery);