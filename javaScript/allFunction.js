// function for getting input value in integer or number form
function getInputValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputValue = parseInt(inputField.value);
    inputField.value = '';
    return inputValue;
}
//--------------------------- function for getting element value ---------------------------
function getElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.innerText);
    return elementValue;
}

//--------------------------- function for setting inner Text to another element ------------------
function seInnerText(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}

