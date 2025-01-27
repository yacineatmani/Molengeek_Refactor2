
 
    document.addEventListener('DOMContentLoaded', () => {
      const faqTitles = document.querySelectorAll('.faq-title');
      faqTitles.forEach((title) => {
        title.addEventListener('click', () => {
          // Sélectionne l'élément collapse associé
          const target = document.querySelector(title.getAttribute('data-target'));
          
          // Ferme tous les autres collapses
          const allCollapses = document.querySelectorAll('.collapse');
          allCollapses.forEach((collapse) => {
            if (collapse !== target) {
              collapse.classList.remove('show');
            }
          });
          
          // Active ou désactive la classe "show"
          target.classList.toggle('show');
        });
      });
    });
 