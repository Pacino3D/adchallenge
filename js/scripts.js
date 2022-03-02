var newstop = 0;
var eventtop = 0;
var abouttop = 0;
var aboutbot = 0;

window.addEventListener("load", () => {
    newstop = $("#block-adchallenge-content")[0].getBoundingClientRect().top + $(window).scrollTop();
    eventtop = $("#challenge-event")[0].getBoundingClientRect().top + $(window).scrollTop();
    abouttop = $("#block-about-me")[0].getBoundingClientRect().top + $(window).scrollTop();
    aboutbot = $("#block-about-me")[0].getBoundingClientRect().bottom + $(window).scrollTop();  
}); 

window.addEventListener("scroll", () => {   
    var scroll = $(window).scrollTop() + 140;
    console.log(scroll);
    if (scroll < newstop) {
      $("#one").addClass("active");
    } else {
      $("#one").removeClass("active");
    }
    if (scroll >= abouttop & scroll < threetop) {
      $("#two").addClass("active");
    } else {
      $("#two").removeClass("active");
    }
    if (scroll >= threetop & scroll < threebot) {
      $("#three").addClass("active");
  } else {
      $("#three").removeClass("active");
  }
  });