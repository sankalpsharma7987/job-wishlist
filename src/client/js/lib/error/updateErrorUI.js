/* Helper function to update the error UI to clear the message and update error UI with new message */

const $ERROR_ELEMENT = document.querySelector('.error-class');

const updateErrorUI = (errorMessage)=>{
    $ERROR_ELEMENT.innerHTML = "";
    $ERROR_ELEMENT.innerHTML = `<p>${errorMessage}</p>`
}

module.exports = {updateErrorUI};