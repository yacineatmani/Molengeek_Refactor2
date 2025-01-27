document.addEventListener('DOMContentLoaded', () => {
  // 1. Gestion de la navbar
  function initNavbarToggle() {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const mobileMenu = document.querySelector('.navbar__menu');

    if (hamburgerButton && mobileMenu) {
      hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('responsive');
      });
    }
  }

  // 2. FAQ Accordion
  function initFAQAccordion() {
    const faqAccordion = document.getElementById('faqAccordion');
    if (faqAccordion) {
      faqAccordion.querySelectorAll('.accordion-item').forEach(item => {
        const button = item.querySelector('.accordion-button');
        const collapse = item.querySelector('.accordion-collapse');
        button.addEventListener('click', () => {
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
          faqAccordion.querySelectorAll('.accordion-item').forEach(otherItem => {
            const otherButton = otherItem.querySelector('.accordion-button');
            const otherCollapse = otherItem.querySelector('.accordion-collapse');
            if (otherButton !== button) {
              otherButton.setAttribute('aria-expanded', 'false');
              otherCollapse.classList.remove('show');
            }
          });
          button.setAttribute('aria-expanded', !isExpanded);
          collapse.classList.toggle('show', !isExpanded);
        });
      });
    }
  }

  // 3. Gestion des vidéos
  function initVideoControls() {
    document.querySelectorAll('.video-container').forEach(container => {
      const video = container.querySelector('.testimonial-video');
      const playButton = container.querySelector('.btn-play');
      const soundButton = container.querySelector('.btn-sound');
      const stopButton = container.querySelector('.btn-stop');
      const poster = container.querySelector('.video-poster');

      // Lancer la vidéo
      playButton?.addEventListener('click', () => {
        poster.style.display = 'none';
        playButton.style.display = 'none';
        video.style.display = 'block';
        video.play();
      });

      // Activer/désactiver le son
      soundButton?.addEventListener('click', () => {
        video.muted = !video.muted;
        soundButton.textContent = video.muted ? '🔊' : '🔇';
      });

      // Arrêter la vidéo
      stopButton?.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
        poster.style.display = 'block';
        playButton.style.display = 'block';
      });
    });
  }

  // // 4. FPS Counter
  // function initFPSCounter() {
  //   const fpsDisplay = document.getElementById('fps');
  //   if (!fpsDisplay) return;

  //   const fpsCounter = {
  //     times: [],
  //     span: 20,
  //     tick() {
  //       this.times.push(+new Date());
  //       const seconds = (this.times[this.times.length - 1] - this.times[0]) / 1000;
  //       return this.times.length > this.span ? Math.round(this.span / seconds) : null;
  //     },
  //   };

  //   function updateFPS() {
  //     fpsDisplay.textContent = `Framerate: ${fpsCounter.tick() || 'N/A'}/60 FPS`;
  //     requestAnimationFrame(updateFPS);
  //   }
  //   updateFPS();
  // }

  // 5. Carousel gestion des éléments actifs
  function initCarousel() {
    const carouselItems = document.querySelectorAll('.custom-carousel .item');
    carouselItems.forEach(item => {
      item.addEventListener('click', () => {
        carouselItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }

  // Appel des fonctions
  initNavbarToggle();
  initFAQAccordion();
  initVideoControls();
  initFPSCounter();
  initCarousel();
});
