var buttonTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-text");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";




function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}



function handleClick() {
    var inputText = inputTxt.value;
    var translatedURL=serverURL+"?text="+inputText;
    
    fetch(translatedURL)
        .then(response => response.json())
        .then(answer => {
            var translatedText = answer.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
}

buttonTranslate.addEventListener("click", handleClick);
