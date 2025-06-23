// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

  // Dark Mode Toggle
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Lightbox Zoom on Achievement Images
  const achievementImages = document.querySelectorAll('.achievement img');
  achievementImages.forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
      document.body.appendChild(lightbox);

      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
      });
    });
  });

  // Scroll-triggered fade-in animation
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
