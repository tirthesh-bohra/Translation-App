let speech = document.getElementById("imgB");
let flag = true;
speech = new webkitSpeechRecognition();
speech.continuous = true;
revertBack();
speech.onend = revertBack();
let input = document.getElementById("input");

speech.onresult = ((e)=> {
    for(let i = e.resultIndex; i < e.results.length; i++) {
        input.value += e.results[i][0].transcript;
    }
})
function revertBack() {
    flag = false;
}

function showAudio() {
    if(flag) {
        speech.stop();
        revertBack();
    } else {
        speech.start();
        flag = true;
    }
}