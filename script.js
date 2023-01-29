var btnTranslate = document.querySelector("#translate-btn");
var txtIput = document.querySelector("#txt-area");
var divOutput = document.querySelector("#output-div")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}


function clickHandler() {
    
    var inputText = txtIput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        divOutput.innerText = translatedText;
    } )
};

btnTranslate.addEventListener("click", clickHandler)

