var scrollTopButton = document.querySelector('#scroll-top');

window.addEventListener('scroll', function () {
  // Show the scroll button after the user has scrolled
  if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
    scrollTopButton.style.visibility = 'visible';
    scrollTopButton.style.opacity = '0.7';
  } else{
    // hide the scroll button when user is at top of page
    scrollTopButton.style.visibility = 'hidden';
    scrollTopButton.style.opacity = '0';
  }
});

// Scroll to the top; activated when the scroll button is clicked
function toTop() {
  $('html, body').animate({scrollTop: 0});
}


jQuery(document).ready();