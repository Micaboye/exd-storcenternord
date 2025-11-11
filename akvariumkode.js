"use strict";
//kode til akvariumside

//fiske navn localstorage
const gemtfiskenavn = localStorage.getItem('savedFishName');
console.log(gemtfiskenavn)

// tegning localstorage
  document.addEventListener('DOMContentLoaded', () => {
  const imgElement = document.getElementById('fishDrawing');
  const savedDrawing = localStorage.getItem('savedDrawingOnly');
  

  if (savedDrawing) {
    imgElement.src = savedDrawing;
  } else {
    imgElement.alt = 'hvor er din fisk;(';
  }
});




const fishInfo = [
  {
    className: "fishOne",
    fishName: "Oscar",
    fishType: "Blå chromis",
    food: "Zooplankton, Alger",
    habitat: "Koralrev, Huler og Revstrukturer",
  },
  {
    className: "fishTwo",
    fishName: "Dory",
    fishType: "Kirurgfisk",
    food: "Alger",
    habitat: "Koraller",
  },
  {
    className: "fishTree",
    fishName: "Nemo",
    fishType: "Nemo fisk",
    food: "Smådyr og Alger",
    habitat: "Koraller",
  },
  {
    className: "fishFour",
    fishName: "Carl",
    fishType: "Pindsvinefisk",
    food: "Bløddyr og krebsdyr",
    habitat: "Rev og Koraller",
  },
  {
    className: "fishFive",
    fishName: "Emma",
    fishType: "Pudsefisk",
    food: "Parasitter og rester fra andre fisk",
    habitat: "Koralrev",
  },
  {
    className: "fishSix",
    fishName: "Robin",
    fishType: "Rævefjæs",
    food: "Alger",
    habitat: "Koralrev i Laguner ",
  },
  {
    className: "barnetegningfisketingonthegoatondrengenongod",
    fishName: gemtfiskenavn,
  },

];

//tooltip kode
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
         setTimeout( function() {
            // Fjerner css klassen så tooltip'en skjules igen
            tooltip.classList.remove("is-visible");
         },8000);
      }}


    fishInfo.forEach((fish) => {
      // Finder alle HTML-elementer med den aktuelle bils className
      document.querySelectorAll("." + fish.className).forEach((elem) => {
            // Tilføjer mouseover event listener til hvert element
            elem.addEventListener("mouseover", () => {
               // Opretter HTML-strengen med fiskedetaljer og sikrer at den ikke er den fisk barnet har tegnet
               if(fish.className != "barnetegningfisketingonthegoatondrengenongod"){
               const fiskeDetails = `

               <strong>${fish.fishName}</strong><br>
               Art: ${fish.fishType}<br>
               Jeg spiser: ${fish.food}<br>
               Jeg bor i: ${fish.habitat}
               `;
               showTooltip(fiskeDetails);
               }
               //tjekker om det er den fisk som barnet har tegnet på geden type shit
               if(fish.className === "barnetegningfisketingonthegoatondrengenongod"){
                const fiskeDetails = `

               <strong>${fish.fishName}</strong><br>
                `;
                 showTooltip(fiskeDetails);
               }
               // Kalder showTooltip funktionen med bilens detaljer
               showTooltip(fiskeDetails);
            });
            
      });
   });

/*
//tilbage til mainsiden
const tilbagebtn = document.getElementById('tilbagemain');

tilbagebtn.addEventListener('click', () => {
window.location.href = 'index.html';

})
*/