"use strict";
// --------------------------forside--------------------------------------------------
const fishInfo = [
  {
    className: "fish1",
    fishName: "Oscar",
    fishType: "Blå chromis",
    food: "Zooplankton, Alger",
    habitat: "Koralrev, Huler og Revstrukturer",
  },
  {
    className: "fish2",
    fishName: "Dory",
    fishType: "Kirurgfisk",
    food: "Alger",
    habitat: "Koraller",
  },
  {
    className: "fish3",
    fishName: "Nemo",
    fishType: "Klovnefisk",
    food: "Smådyr og Alger",
    habitat: "Koraller",
  },
  {
    className: "fish4",
    fishName: "Carl",
    fishType: "Pindsvinefisk",
    food: "Bløddyr og krebsdyr",
    habitat: "Rev og Koraller",
  },
  {
    className: "fish5",
    fishName: "Emma",
    fishType: "Pudsefisk",
    food: "Parasitter og rester fra andre fisk",
    habitat: "Koralrev",
  },
  {
    className: "fish6",
    fishName: "Robin",
    fishType: "Rævefjæs",
    food: "Alger",
    habitat: "Koralrev i Laguner ",
  },
];

// finder tooltip id og gemmer det i en variabel
const tooltip = document.getElementById("tooltip");

// Funktion der viser tooltip med biloplysninger
// Parameter: html = den tekst indeholdende html-tags som vi vil vise i tooltip'en
function showTooltip(html) {
  // Tjekker om tooltip-elementet eksisterer i DOM'en
  if (tooltip) {
    // Indsætter teksten i tooltip'en
    tooltip.innerHTML = html;
    // Gør tooltip'en synlig med css klassen
    tooltip.classList.add("is-visible");

    // Sætter en timer til at skjule tooltip'en efter 8 sekunder
    setTimeout(function () {
      // Fjerner css klassen så tooltip'en skjules igen
      tooltip.classList.remove("is-visible");
    }, 8000);
  }
}

fishInfo.forEach((fish) => {
  // Finder alle HTML-elementer med den aktuelle bils className
  document.querySelectorAll("." + fish.className).forEach((elem) => {
    // Tilføjer mouseover event listener til hvert element
    elem.addEventListener("mouseover", () => {
      // Opretter HTML-strengen med bilens detaljer
      const fiskeDetails = `

               <strong>${fish.fishName}</strong><br>
               Art: ${fish.fishType}<br>
               Jeg spiser: ${fish.food}<br>
               Jeg bor i: ${fish.habitat}
               `;
      // Kalder showTooltip funktionen med bilens detaljer
      showTooltip(fiskeDetails);
    });
  });
});

/*

 // Hent DOM Elementer 
   const fish1 = document.getElementById("fish1");
   const fish2 = document.getElementById("fish2");
   const fish3 = document.getElementById("fish3");
   const fish4 = document.getElementById("fish4");
   const fish5 = document.getElementById("fish5");
   const fish6 = document.getElementById("fish6");


   */
