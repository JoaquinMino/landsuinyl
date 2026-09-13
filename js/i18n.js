const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.music": "Producciones",
    "nav.contact": "Contacto",
    "hero.bio": "DJ y productor de Buenos Aires, Argentina.",
    "hero.about": "Sobre mi",
    "bio.text": `Suinyl es un DJ y productor de Buenos Aires, Argentina. Su vínculo con la música comenzó desde muy temprana edad, influenciado por su padre, músico (percusionista), y por las visitas a salas de ensayo que despertaron su curiosidad por el mundo musical. Durante su adolescencia comenzó a tocar el bajo, profundizando poco a poco su relación con la música.

          Con el tiempo, su interés fue mutando hacia la música electrónica, primero desde el lugar de raver, y luego a través de la búsqueda y selección musical, lo que llevó a convertirlo en DJ para luego profundizar en la producción.

          Su música ha sido editada en Curtea Veche, donde cuenta con un lanzamiento en vinilo, como también en Sobriquet, Saraw, Música Lunar, entre otros.

          Su recorrido como DJ lo ha llevado a distintas provincias del país, con presentaciones en clubes y fiestas como Under Club/Blow, Bahrein, Feuer (Rosario), Wallmapu y Besarabia, compartiendo cabina con CAP, Alan Castro, entre otros.

          Junto a Shaped, forman el aka SyS y a su vez, ambos, junto a Nachzz, forman Enjambre, sello discográfico y aka, utilizado como un espacio abierto a la experimentación, conviviendo con diferentes ideas, sonidos y caminos sin seguir una dirección predeterminada.`,
    "music.moreSoundcloud": "Ver más en SoundCloud",
    "music.moreBandcamp": "Ver más en Bandcamp",
    "track.open": "Abrir",
    "social.title": "Redes",
  },
  en: {
    "nav.home": "Home",
    "nav.music": "Productions",
    "nav.contact": "Contact",
    "hero.bio": "DJ and producer from Buenos Aires, Argentina.",
    "hero.about": "About",
    "bio.text": `Suinyl is a DJ and producer from Buenos Aires, Argentina. His connection with music began at a very early age, influenced by his father, a musician (percussionist), and by visits to rehearsal rooms that sparked his curiosity about the musical world. During his adolescence, he began playing the bass, gradually deepening his relationship with music.

          Over time, his interest shifted towards electronic music, first as a raver, and then through the search and selection of music, which led him to become a DJ and later delve into production.

          His music has been released on Curtea Veche, where he has a vinyl release, as well as on Sobriquet, Saraw, Música Lunar, among others.

          His journey as a DJ has taken him to different provinces of the country, with performances in clubs and parties such as Under Club/Blow, Bahrein, Feuer (Rosario), Wallmapu and Besarabia, sharing the booth with CAP, Alan Castro, among others.

          Together with Shaped, they form the aka SyS and both of them, along with Nachzz, form Enjambre, a record label and aka used as an open space for experimentation, coexisting with different ideas, sounds and paths without following a predetermined direction.`,
    "music.moreSoundcloud": "More on SoundCloud",
    "music.moreBandcamp": "More on Bandcamp",
    "track.open": "Open",
    "social.title": "Social",
  },
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value) el.textContent = value;
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = lang === "es" ? "EN" : "ES";

  try {
    localStorage.setItem("suinyl-lang", lang);
  } catch (e) {
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let saved = "es";
  try {
    saved = localStorage.getItem("suinyl-lang") || "es";
  } catch (e) {
    // ignore
  }

  setLanguage(saved);

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.lang === "es" ? "en" : "es";
      setLanguage(current);
    });
  }
});