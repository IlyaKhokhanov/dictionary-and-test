const { speechSynthesis } = window;

function speakWord(value) {
  if (!speechSynthesis.speaking) {
    const ssu = new SpeechSynthesisUtterance(value);
    ssu.lang = "en-US";
    speechSynthesis.speak(ssu);
  }
}

export function speakHandler(e) {
  speakWord(e.target.name);
}
