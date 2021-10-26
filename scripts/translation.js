async function translate() {
    let output = document.getElementById("output");
    output.textContent = "";
    let input = document.getElementById("input").value;
    if(!input) {
        return;
    }
    let lang = document.getElementById("resultLang").value;
    let searchLang = document.getElementById("searchLang").value;
    if(searchLang != "auto") {
        var source = searchLang;
    } else {
        var source = await detectLang(input);
    }
    let res = await fetch(`https://libretranslate.de/translate`, {
        method: 'POST',
        body: JSON.stringify({
            q: input,
            source,
            target: lang,
        }),
        headers: {
            "Content-Type": "application/json"
        },
    });
    let data = await res.json();
    output.textContent = data.translatedText;
}


async function detectLang(input) {
    let res = await fetch(`https://libretranslate.de/detect`, {
        method: "POST",
        body: JSON.stringify({
            q: input,
        }),
        headers: { 
            "Content-Type": "application/json" 
        }
    });
    let data = await res.json();
    return data[0].language;
}

export {translate, detectLang}