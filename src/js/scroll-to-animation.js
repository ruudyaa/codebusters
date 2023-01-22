function animationRight() {
  var subtitle = document.querySelectorAll('.animation-right');
  for (var i = 0; i < subtitle.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = subtitle[i].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      subtitle[i].classList.add('animate__animated', 'animate__fadeInRight');
    } else {
      subtitle[i].classList.remove('animate__animated', 'animate__fadeInRight');
    }
  }
}

window.addEventListener('scroll', animationRight);
animationRight();

function animationLeft() {
  var container = document.querySelectorAll('.animation-left');
  for (var i = 0; i < container.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = container[i].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      container[i].classList.add('animate__animated', 'animate__fadeInLeft');
    } else {
      container[i].classList.remove('animate__animated', 'animate__fadeInLeft');
    }
  }
}

window.addEventListener('scroll', animationLeft);
animationLeft();
