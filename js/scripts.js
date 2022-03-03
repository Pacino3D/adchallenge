var newstop = 0;
var eventtop = 0;
var abouttop = 0;
var aboutbot = 0;

(function ($) {
window.addEventListener("load", () => {
    $(".site-slogan")[0].innerHTML = "<strong>Music</strong>Theme"; /*Popravek za izgled na logotu <strong značka>*/
    $(".menu-item")[1].childNodes[1].href = "http://localhost/#block-adchallenge-content"; /*Popravek da deluje news gumb>*/
    $(".menu-item")[0].className = "menu-item active";
    newstop = $("#block-adchallenge-content")[0].getBoundingClientRect().top + $(window).scrollTop();
    eventtop = $("#challenge-event")[0].getBoundingClientRect().top + $(window).scrollTop();
    abouttop = $("#block-about-me")[0].getBoundingClientRect().top + $(window).scrollTop();
    aboutbot = $("#block-about-me")[0].getBoundingClientRect().bottom + $(window).scrollTop();
}); 
/* var items = $(".menu-item");
for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function() {
        var current = $(".active");
        for (var j = 0; j < current.length; j ++)
          current[j].className = current[j].className.replace(" active", "");
        this.className += " active";
      });
    } */
window.addEventListener("scroll", () => {   
    var scroll = $(window).scrollTop() + 120;
        if (scroll < newstop) {
            $(".menu-item")[0].className = "menu-item active";
        } else {
            $(".menu-item")[0].className = "menu-item";
        }
        if (scroll >= newstop & scroll < eventtop) {
            $(".menu-item")[1].className = "menu-item active";
        } else {
            $(".menu-item")[1].className = "menu-item";
        }
        if (scroll >= eventtop & scroll < abouttop) {
            $(".menu-item")[2].className = "menu-item active";
        } else {
            $(".menu-item")[2].className = "menu-item";
        }
        if (scroll >= abouttop & scroll < aboutbot) {
            $(".menu-item")[3].className = "menu-item active";
        } else {
            $(".menu-item")[3].className = "menu-item";
        }
  });
})(jQuery);