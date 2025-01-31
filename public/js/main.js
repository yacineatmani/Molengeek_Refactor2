document.addEventListener('DOMContentLoaded', () => {
  initNavbarToggle();  // Gestion du menu burger
});

function initNavbarToggle() {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerButton && navMenu) {
    // Ajouter un gestionnaire de clic pour afficher/masquer le menu
    hamburgerButton.addEventListener('click', () => {
      navMenu.classList.toggle('responsive');
    });

    // Ferme le menu si on clique en dehors
    document.addEventListener('click', (e) => {
      if (!hamburgerButton.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('responsive');
      }
    });
  }
}


// 2. Fonction pour gérer l'accordéon FAQ
function initFAQAccordion() {
  const searchInput = document.getElementById('faqSearch');
  const faqItems = document.querySelectorAll('.faq-item');
  
  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    faqItems.forEach(item => {
      const question = item.querySelector('h3').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
      
      if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.style.display = 'block';
        if (searchTerm) {
          highlightText(item, searchTerm);
        }
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  // Animation des icônes et scroll
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(question => {
    question.addEventListener('click', function() {
      const icon = this.querySelector('.faq-icon');
      icon.classList.toggle('active');
      
      // Smooth scroll to the clicked question
      setTimeout(() => {
        question.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 300);
    });
  });

  // Fonction de mise en surbrillance
  function highlightText(element, term) {
    const question = element.querySelector('h3');
    const answer = element.querySelector('.faq-answer p');
    
    question.innerHTML = question.textContent.replace(
      new RegExp(term, 'gi'),
      match => `<mark>${match}</mark>`
    );
    
    answer.innerHTML = answer.textContent.replace(
      new RegExp(term, 'gi'),
      match => `<mark>${match}</mark>`
    );
  }
}

// 3. Fonction pour gérer les vidéos
function initVideoControls() {
  document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('.testimonial-video');
    const playButton = container.querySelector('.btn-play');
    const soundButton = container.querySelector('.btn-sound');
    const stopButton = container.querySelector('.btn-stop');
    const poster = container.querySelector('.video-poster');

    playButton?.addEventListener('click', () => {
      poster.style.display = 'none';
      playButton.style.display = 'none';
      video.style.display = 'block';
      video.play();
    });

    soundButton?.addEventListener('click', () => {
      video.muted = !video.muted;
      soundButton.textContent = video.muted ? '🔊' : '🔇';
    });

    stopButton?.addEventListener('click', () => {
      video.pause();
      video.currentTime = 0;
      video.style.display = 'none';
      poster.style.display = 'block';
      playButton.style.display = 'block';
    });
  });
}

// 4. Fonction pour gérer le carousel
function initCarousel() {
  const carouselItems = document.querySelectorAll('.custom-carousel .item');
  carouselItems.forEach(item => {
    item.addEventListener('click', () => {
      carouselItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}
