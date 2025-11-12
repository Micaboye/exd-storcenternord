"use strict";

(() => {
  const KEY_TIME = "bgSound:time";
  const KEY_ENABLED = "bgSound:enabled";

  function init() {
    const el = document.getElementById("bgSound");
    if (!el) return;

    // Forsøg at spille (muted autoplay)
    const playSafe = () => {
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    };

    // Genoptag tid hvis gemt
    try {
      const saved = sessionStorage.getItem(KEY_TIME);
      if (saved) {
        const { t } = JSON.parse(saved) || {};
        const setTime = () => {
          try {
            if (typeof t === "number") el.currentTime = t;
          } catch {}
        };
        if (el.readyState >= 1) setTime();
        else el.addEventListener("loadedmetadata", setTime, { once: true });
      }
      // Hvis allerede “godkendt”, unmute
      if (sessionStorage.getItem(KEY_ENABLED) === "1") el.muted = false;
    } catch {}

    playSafe();

    // Første brugerinteraktion = unmute + gem godkendelse
    const enable = () => {
      el.muted = false;
      try {
        sessionStorage.setItem(KEY_ENABLED, "1");
      } catch {}
      playSafe();
      window.removeEventListener("pointerdown", enable, { passive: true });
    };
    window.addEventListener("pointerdown", enable, { passive: true });

    // Gem afspilningsposition jævnligt
    const save = () => {
      try {
        sessionStorage.setItem(KEY_TIME, JSON.stringify({ t: el.currentTime }));
      } catch {}
    };
    el.addEventListener("timeupdate", save);

    // Ved navigation: gem (pagehide dækker både reload og links)
    window.addEventListener("pagehide", save);
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();


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

