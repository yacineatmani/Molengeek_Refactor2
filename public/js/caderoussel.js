const dragContainer = document.getElementById('drag-container');
const spinContainer = document.getElementById('spin-container');
const images = spinContainer.querySelectorAll('img');
const radius = 400; // Ajuster le rayon du carrousel pour les nouvelles dimensions
let angle = 0; // Angle initial
let autoRotate = true; // Rotation automatique
let startX, startY, currentX, currentY, isDragging = false;

// Fonction pour positionner les images autour du cercle
function positionImages() {
  const totalImages = images.length;
  images.forEach((image, i) => {
    // Calculer la position de chaque image sur l'axe X et Y
    const deg = (i / totalImages) * 360;
    const x = radius * Math.cos(deg * Math.PI / 180);
    const z = radius * Math.sin(deg * Math.PI / 180);
    
    // Appliquer la transformation CSS à chaque image
    image.style.transform = `translateX(${x}px) translateZ(${z}px)`;
  });
}

// Initialiser la position des images
positionImages();

// Ajouter une animation de rotation
function rotateCarousel() {
  if (autoRotate) {
    angle += 1;
    spinContainer.style.transform = `rotateY(${angle}deg)`;
  }
  requestAnimationFrame(rotateCarousel);
}
rotateCarousel();

// Gérer l'interaction avec la souris
dragContainer.addEventListener('mousedown', (e) => {
  autoRotate = false;
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    currentX = e.clientX;
    currentY = e.clientY;
    const deltaX = currentX - startX;
    angle += deltaX * 0.1;
    spinContainer.style.transform = `rotateY(${angle}deg)`;
    startX = currentX;
    startY = currentY;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  autoRotate = true;
});

document.querySelectorAll('.sound-toggle').forEach(button => {
  button.addEventListener('click', function() {
      const video = this.nextElementSibling;
      if (video.muted) {
          video.muted = false;
          this.textContent = '🔈';
      } else {
          video.muted = true;
          this.textContent = '🔊';
      }
  });
});