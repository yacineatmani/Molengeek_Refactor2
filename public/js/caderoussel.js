document.addEventListener('DOMContentLoaded', () => {
  const dragContainer = document.getElementById('drag-container');
  const spinContainer = document.getElementById('spin-container');
  const images = spinContainer.getElementsByTagName('img');

  // Configuration
  const numberOfImages = images.length;
  const angleStep = 360 / numberOfImages;
  const radius = 200; // Ajuste cette valeur pour contrôler la distance des images

  // Variables pour la rotation
  let currentRotation = 0;
  let targetRotation = 0;
  let isDragging = false;
  let startX;

  // Positionner initialement les images en cercle 3D
  function positionImages() {
    for (let i = 0; i < numberOfImages; i++) {
      const angle = angleStep * i;
      const rad = angle * Math.PI / 180;
      const x = radius * Math.sin(rad);
      const z = radius * Math.cos(rad);

      images[i].style.transform = 
        `translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`;
    }
  }

  // Animation de rotation
  function animate() {
    if (!isDragging) {
      currentRotation += (targetRotation - currentRotation) * 0.1;
      if (Math.abs(targetRotation - currentRotation) < 0.1) {
        currentRotation = targetRotation;
      }

      spinContainer.style.transform = `rotateY(${currentRotation}deg)`;
    }
    requestAnimationFrame(animate);
  }

  // Gestionnaires d'événements pour la rotation manuelle
  dragContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - currentRotation;
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      targetRotation = e.clientX - startX;
      spinContainer.style.transform = `rotateY(${targetRotation}deg)`;
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Ajout de la rotation automatique
  function autoRotate() {
    if (!isDragging) {
      targetRotation += 0.5;
    }
    requestAnimationFrame(autoRotate);
  }

  // Initialisation
  positionImages();
  animate();
  autoRotate();
});
