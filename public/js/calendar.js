
  const events = {
    "2025-01-27": ["Formation HTML - Niveau débutant"],
    "2025-01-28": ["Formation Réseaux Sociaux - Niveau débutant"],
    "2025-01-30": ["Formation Shopify - Niveau avancé"],
    "2025-02-03": ["Formation JavaScript - Niveau débutant"],
  };

  const calendarGrid = document.querySelector(".calendar-grid");
  const currentMonthLabel = document.getElementById("currentMonth");
  const eventList = document.getElementById("eventList");

  let currentDate = new Date();

  function renderCalendar(date) {
    calendarGrid.innerHTML = ""; // Efface la grille précédente
    eventList.innerHTML = ""; // Efface les événements précédents

    const year = date.getFullYear();
    const month = date.getMonth();
    currentMonthLabel.textContent = date.toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Remplissage des jours avant le 1er jour du mois
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      calendarGrid.innerHTML += `<div class="col border p-2 text-muted"></div>`;
    }

    // Ajout des jours du mois
    for (let day = 1; day <= daysInMonth; day++) {
      const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;

      const isEventDay = events[fullDate] ? "bg-warning" : "";
      calendarGrid.innerHTML += `
        <div class="col border p-2 ${isEventDay}" data-date="${fullDate}">
          ${day}
        </div>
      `;
    }

    // Ajoute les événements du mois dans la liste
    Object.keys(events).forEach((date) => {
      if (date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`)) {
        const eventItems = events[date]
          .map((event) => `<li>${event}</li>`)
          .join("");
        eventList.innerHTML += `
          <li class="mb-3 p-3 border rounded shadow-sm">
            <h5>${date}</h5>
            <ul>${eventItems}</ul>
          </li>
        `;
      }
    });
  }

  // Navigation entre les mois
  document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  // Initialisation
  renderCalendar(currentDate);

