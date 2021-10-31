let textToSpeech = document.getElementById("speak");
textToSpeech.addEventListener("click", textToAudio);

function textToAudio() {
    let msg = document.getElementById("output").value;
    console.log(msg);
    let lang = document.getElementById("resultLang").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = lang;
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
  
    window.speechSynthesis.speak(speech);
}