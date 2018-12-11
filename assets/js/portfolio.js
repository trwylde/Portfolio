$(document).ready(function(){
  
  $('.parallax').parallax();
  $('.carousel').carousel();

  var typed = new Typed("#typed", {
    strings: [
      "<strong>Full Stack Developer</strong>",
      "<strong>Web Developer</strong>",
      "<strong>Web Designer</strong>",
      "<strong>Frontend Developer</strong>",
      "<strong>Frontend Designer</strong>"
    ],
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30,
    // fadeOut: true
  });
});
