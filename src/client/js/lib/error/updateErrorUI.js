const $ERROR_ELEMENT = document.querySelector('.error-class');

const updateErrorUI = (errorMessage)=>{
    $ERROR_ELEMENT.innerHTML = "";
    $ERROR_ELEMENT.innerHTML = `<p>${errorMessage}</p>`
}

module.exports = {updateErrorUI};