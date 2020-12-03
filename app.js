var buttonTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

        
function clickHandler()
{
        outputDiv.innerText = "hello" + txtInput.value;
};
buttonTranslate.addEventListener("click",clickHandler)
