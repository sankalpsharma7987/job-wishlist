/* Helper function to delete the job list. The event listener is added to the parent node of the job list, 
in order to avoid duplicate the event listener to every job list */

const $JOB_LIST_ElEMENT = document.querySelector('.job-list-class');

const deleteJobList = (e)=>{
    Client.showDeleteFormModal(e.target.id);
}

$JOB_LIST_ElEMENT.addEventListener('click',deleteJobList);

module.exports = {deleteJobList};