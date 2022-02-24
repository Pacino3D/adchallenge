<<<<<<< HEAD
var menu = document.getElementById("menu");
var links = menu.getElementsByClassName("menu-item");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
=======
var menu = document.getElementById("menu");
var links = menu.getElementsByClassName("menu-item");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
>>>>>>> 8566b2f12c8ec2e04112d923f47cdabdd3bee805
