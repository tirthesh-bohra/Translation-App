async function getLang() {
    let res = await fetch(`https://libretranslate.de/languages`);
    let data = await res.json();
    appendLang(data);
}
function appendLang(arr) {
    let select = document.getElementById("resultLang")
    arr.forEach(({code, name}) => {
        let option = document.createElement("option");
        option.value = code;
        option.textContent = name;
        select.append(option);
    });
}

export {getLang, appendLang}