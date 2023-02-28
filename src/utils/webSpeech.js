const { speechSynthesis } = window;

export default function webSpeech(value) {
  if (!speechSynthesis.speaking) {
    const ssu = new SpeechSynthesisUtterance(value);
    ssu.lang = "en-US";
    speechSynthesis.speak(ssu);
  }
}
