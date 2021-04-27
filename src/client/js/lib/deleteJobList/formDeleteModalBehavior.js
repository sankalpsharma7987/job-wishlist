/* Helper function that will show and hide the delete form modal */

const $FORM_MODAL_ELEMENT = document.querySelector('#delete-form-modal-id');
const $CANCEL_DELETE_ELEMENT = document.querySelector('#cancel-delete-id');
const $CONTINUE_DELETE_ELEMENT = document.querySelector('#confirm-delete-id');

const showDeleteFormModal = async(id)=>{
    
    $FORM_MODAL_ELEMENT.classList.add('form-modal-class-display');
    $CONTINUE_DELETE_ELEMENT.setAttribute('data-id',id);// The id passed by the deleteJobList function is set in order to pass it to the deleteJobInfo function.
}

const deleteList = async()=>{
    const id = $CONTINUE_DELETE_ELEMENT.getAttribute('data-id');
    await Client.deleteJobInfo(id); //The value of id, set in the above function, is use to pass in order to delete the job from the list.
    Client.hideDeleteFormModal();
}


const hideDeleteFormModal = ()=>{
    $FORM_MODAL_ELEMENT.classList.remove('form-modal-class-display');
    $CONTINUE_DELETE_ELEMENT.removeAttribute('data-id');
}

$CONTINUE_DELETE_ELEMENT.addEventListener('click',deleteList);
$CANCEL_DELETE_ELEMENT.addEventListener('click',hideDeleteFormModal);


module.exports = {showDeleteFormModal,hideDeleteFormModal};