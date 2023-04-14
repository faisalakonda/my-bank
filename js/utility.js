// function getInputFieldValueById(inputFieldId) {
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldValueString = inputField.value
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     return inputFieldValue
//     inputFieldValue = '';
// }

// function getTextElementValueById(textFieldId) {
//     const textField = document.getElementById(textFieldId);
//     const textFieldString = textField.innerText
//     const textFieldValue = parseFloat(textFieldString);
//     return textFieldValue;
// }

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}