const $ADD_BUTTON_ELEMENT = document.querySelector('.add-button-class');
const $FORM_MODAL_ELEMENT = document.querySelector('.form-modal-class');
const $FORM_CLOSE_BUTTON_ELEMENT = document.querySelector('#form-close-btn-id');
const $HEADER_ELEMENT = document.querySelector('.header-class');
const $SUMMARY_ELEMENT = document.querySelector('.summary-class');


const showFormModal = ()=>{

    $FORM_MODAL_ELEMENT.classList.add('form-modal-class-display');
    $ADD_BUTTON_ELEMENT.setAttribute('disabled',true);
    // $HEADER_ELEMENT.classList.add('header-color');
}

const hideFormModal = (e)=>{

    if(e.target.nodeName==='SPAN'||e.target.nodeName==='BUTTON')
    {
        $FORM_MODAL_ELEMENT.classList.remove('form-modal-class-display');
        $ADD_BUTTON_ELEMENT.removeAttribute('disabled');
        // $HEADER_ELEMENT.classList.remove('header-color');
    }   

    
}

$FORM_CLOSE_BUTTON_ELEMENT.addEventListener('click',hideFormModal);
$ADD_BUTTON_ELEMENT.addEventListener('click',showFormModal);

module.exports = {showFormModal,hideFormModal};