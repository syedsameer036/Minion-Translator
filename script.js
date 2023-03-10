var btnTranslate = document.querySelector("#translate-btn");
var txtIput = document.querySelector("#txt-area");
var divOutput = document.querySelector("#output-div")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured",error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    
    var inputText = txtIput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        divOutput.innerText = translatedText;
    } )
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

