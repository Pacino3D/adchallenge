var newstop = 0;
var eventtop = 0;
var abouttop = 0;
var aboutbot = 0;

// window.addEventListener('load', () => {
    
//     console.log("abc:",item);
//     const newstop = document.getElementById("block-adchallenge-content").getBoundingClientRect().top;
//     const eventtop = document.getElementById("block-latest-event").getBoundingClientRect().top;
//     const aboutop = document.getElementById("block-about-me").getBoundingClientRect().top;
//     const aboutbot = document.getElementById("block-about-me").getBoundingClientRect().bottom;
//     console.log(newstop);
//     var scroll = window.getBoundingClientRect().top;
//     console.log(scroll);
//     // eventtop = $("#challenge-event")[0].getBoundingClientRect().top + $(window).scrollTop();
//     // abouttop = $("#block-about-me")[0].getBoundingClientRect().top + $(window).scrollTop();
//     // aboutbot = $("#block-about-me")[0].getBoundingClientRect().bottom + $(window).scrollTop();
// });
(function ($) {
window.addEventListener("load", () => {
    $(".menu-item")[1].childNodes[1].href = "http://localhost/#block-adchallenge-content";
    newstop = $("#block-adchallenge-content")[0].getBoundingClientRect().top + $(window).scrollTop();
    eventtop = $("#challenge-event")[0].getBoundingClientRect().top + $(window).scrollTop();
    abouttop = $("#block-about-me")[0].getBoundingClientRect().top + $(window).scrollTop();
    aboutbot = $("#block-about-me")[0].getBoundingClientRect().bottom + $(window).scrollTop();  
}); 

// var items = $(".menu-item");
// for (var i = 0; i < items.length; i++) {
//       items[i].addEventListener("click", function() {
//         var current = $(".active");
//         for (var j = 0; j < current.length; j ++)
//           current[j].className = current[j].className.replace(" active", "");
//         this.className += " active";
//       });
//     }
window.addEventListener("scroll", () => {   
    var scroll = $(window).scrollTop() + 130;
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