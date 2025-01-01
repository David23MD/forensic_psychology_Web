let currentSlide = 0;

// Function to open the selected presentation
function openPresentation(presentationId) {
  // Hide all presentation sections
  const sections = document.querySelectorAll('.presentation-content');
  sections.forEach(section => {
    section.style.display = section.id === presentationId ? 'block' : 'none';
  });

  // Reset to the first slide and update the counter
  currentSlide = 0;
  updateSlideCounter(presentationId);
}

// Update the slide counter display
function updateSlideCounter(presentationId) {
  const slides = document.querySelector(`#slides-container-${presentationId}`).children;
  document.querySelector(`#${presentationId} .slide-controls #slide-counter`).innerText = `${currentSlide + 1} / ${slides.length}`;
}

// Show previous slide
function prevSlide(presentationId) {
  const slides = document.querySelector(`#slides-container-${presentationId}`).children;
  if (currentSlide > 0) {
    slides[currentSlide].style.display = 'none';
    currentSlide--;
    slides[currentSlide].style.display = 'block';
    updateSlideCounter(presentationId);
  }
}

// Show next slide
function nextSlide(presentationId) {
  const slides = document.querySelector(`#slides-container-${presentationId}`).children;
  if (currentSlide < slides.length - 1) {
    slides[currentSlide].style.display = 'none';
    currentSlide++;
    slides[currentSlide].style.display = 'block';
    updateSlideCounter(presentationId);
  }
}

// Initially hide all slides except the first in each presentation
document.querySelectorAll('.presentation-content .slides-container').forEach(container => {
  const slides = container.children;
  for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}); 


document.addEventListener("DOMContentLoaded", function() {
  const presentationLinks = document.querySelectorAll(".presentation-link");
  const presentations = document.querySelectorAll(".presentation-content");

  // Hide all presentations initially
  presentations.forEach(presentation => presentation.style.display = "none");

  // Add click event to each presentation link
  presentationLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      
      // Get the ID of the presentation to show
      const presentationId = link.getAttribute("data-presentation-id");

      // Hide all presentations
      presentations.forEach(presentation => presentation.style.display = "none");

      // Show the selected presentation
      document.getElementById(presentationId).style.display = "block";
    });
  });
});
