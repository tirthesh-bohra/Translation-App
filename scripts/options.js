async function getLang() {
    let select = document.getElementById("resultLang");
    let searchLang = document.getElementById("searchLang");
    let res = await fetch(`https://libretranslate.de/languages`);
    let data = await res.json();
    appendLang(data, select);
    appendLang(data, searchLang);
}
function appendLang(arr, container) {
    arr.forEach(({code, name}) => {
        let option = document.createElement("option");
        option.value = code;
        option.textContent = name;
        container.append(option);
    });
}
export {getLang, appendLang}