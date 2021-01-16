// The debounce function stops us from calling a function on every
// recorded scroll. This would kill performance. This function
// was not written by me.

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

// Select all the images with the correct class
const slideImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    slideImages.forEach(slideImage => {
        // ScrollY is the amount we scroll from the top.
        // We add the innerHeight to give us how far we've scrolled from
        // the bottom of our window. We then also minus the images height
        // so that it animates in when it's 50% visible, not just as soon 
        // as it starts peeking in at the bottom. 
        const slideInAt = (window.scrollY + window.innerHeight) - (slideImage.height / 4);
        const isHalfShown = slideInAt > slideImage.offsetTop;
        if(isHalfShown) {
            slideImage.classList.add('active');
        }

    })
}

window.addEventListener('scroll', debounce(checkSlide));

