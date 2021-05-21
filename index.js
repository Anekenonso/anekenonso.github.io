// let slidder = 1

// nextSlidder(slidder)

// function prevSlidder(slide){
//     nextSlidder(slidder += slide)
// }

// function nextSlidder(slide) {
//     let mood;

//     var next = document.getElementsByClassName('slides')

//     if (slide > next.length) {
//         slidder = 1
//     }

//     if (slide < 1) {
//         slidder = next.length
//     }

//     for (mood = 0; mood < next.length; mood++) {
//         next[mood].style.display = "none"
//     }

//     next[slidder-1].style.display = "block"
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}