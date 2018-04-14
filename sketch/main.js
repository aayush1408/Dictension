var main = document.querySelector('#text');
(function () {
    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word;
    let url = `
    http://api.wordnik.com:80/v4/word.json/${word}/definitions?limit=1&includeRelated=true&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`
    let meaning = fetch(url).then((res) => {
        return res.json();
    }).then((myjson) => {
        return myjson;
    })
    meaning.then((data) => {
        main.innerHTML = data[0].text;
    })
})();