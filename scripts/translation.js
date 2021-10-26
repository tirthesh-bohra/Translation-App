async function translate() {
    let output = document.getElementById("output");
    output.textContent = "";
    let input = document.getElementById("input").value;
    let lang = document.getElementById("resultLang").value;
    let res = await fetch(`https://libretranslate.de/translate`, {
        method: 'POST',
        body: JSON.stringify({
            q: input,
            source: "en",
            target: lang,
        }),
        headers: {
            "Content-Type": "application/json"
        },
    });
    let data = await res.json();
    output.textContent = data.translatedText;
}

export {translate}