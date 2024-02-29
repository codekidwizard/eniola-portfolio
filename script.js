let $path = document.querySelector(".path"),
    $logo = document.querySelector(".logo"),
    repeat = false,
    animate = () => {
      const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
      const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
      new TimelineMax(repeat ? { paused: true } : {repeat: 0, repeatDelay: 1})
        .to($path, 0.8, {attr: { d: start }, ease: Power2.easeIn})
        .to($path, 0.6, {attr: { d: end }, ease: Power2.easeOut})
        .from($logo, .6, {y: 75}, '-=.6')
        .play(0);
    };

animate();

const popupButton = document.getElementById('popup-button');
const popupMenu = document.getElementById('myPopup');

// Function to toggle the visibility of the popup menu
function togglePopup() {
  popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
}

// Event listener for the popup button to open/close the popup menu
popupButton.addEventListener('click', togglePopup);

// Event listener to close the popup menu when clicking outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('#popup-button') && !event.target.matches('#myPopup')) {
    popupMenu.style.display = 'none';
  };
});
const slides = slider.getElementsByTagName('.text6');
const totalSlides = slides.length;

// Function to adjust the slide width based on the total number of slides
function adjustSlideWidth() {
    slider.style.width = `${totalSlides * 100}%`;
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.width = `${100 / totalSlides}%`;
    }
}

// Adjust the slide width initially
adjustSlideWidth();



