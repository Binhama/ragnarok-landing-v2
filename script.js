function updateDesktopMessage() {
  const message = document.getElementById("desktop-message");
  if (message) {
    message.classList.toggle("desktop-visible", window.innerWidth < 1440);
  }
}

updateDesktopMessage();
window.addEventListener("resize", updateDesktopMessage);

const classLanguageButtons = document.querySelectorAll("[data-class-language]");
const classNames = document.querySelectorAll(".class-name");
const supportedLanguages = ["en", "id", "th"];
const savedLanguage = localStorage.getItem("rag_lang");
const initialLanguage = supportedLanguages.includes(savedLanguage)
  ? savedLanguage
  : "en";

function setClassLanguage(language) {
  if (!supportedLanguages.includes(language)) return;

  localStorage.setItem("rag_lang", language);
  classNames.forEach((className) => {
    className.textContent = className.dataset[language];
  });
  classLanguageButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.classLanguage === language),
    );
  });
}

classLanguageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setClassLanguage(button.dataset.classLanguage);
  });
});

setClassLanguage(initialLanguage);
