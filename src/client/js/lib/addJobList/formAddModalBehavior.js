/*Helper function to show and hide form modal use to enter the job wish list details */

const $ADD_BUTTON_ELEMENT = document.querySelector('.add-button-class');
const $FORM_MODAL_ELEMENT = document.querySelector('#add-form-modal-id');
const $FORM_CLOSE_BUTTON_ELEMENT = document.querySelector('#form-close-btn-id');


const showFormModal = ()=>{

    $FORM_MODAL_ELEMENT.classList.add('form-modal-class-display');
    $ADD_BUTTON_ELEMENT.setAttribute('disabled',true);
}

const hideFormModal = (e)=>{

    if(e.target.nodeName==='SPAN'||e.target.nodeName==='BUTTON') //The modal is closed if the click occurs from the SPAN tag, which is the cross button, or the add button
    {
        $FORM_MODAL_ELEMENT.classList.remove('form-modal-class-display');
        $ADD_BUTTON_ELEMENT.removeAttribute('disabled');
    }   

    
}

$FORM_CLOSE_BUTTON_ELEMENT.addEventListener('click',hideFormModal);
$ADD_BUTTON_ELEMENT.addEventListener('click',showFormModal);

module.exports = {showFormModal,hideFormModal};