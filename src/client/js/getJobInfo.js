const $SUBMIT_BUTTON_ELEMENT = document.querySelector('#submit-button-id');
const $JOB_TITLE_ELEMENT = document.querySelector('#job-title-id');
const $COMPANY_NAME_ELEMENT = document.querySelector('#company-name-id');

/*Event Handler function used to add the job to the wishlist. It first fetches the id and random color and job details from the Form modal.
After which, it will render the element to the job list and update total number of jobs created in summary section */

const getJobInfo = async(e)=>{

    e.preventDefault();
    Client.updateErrorUI("");

    try {
        const id = Client.generateId();
                
        const uniqueColorCode = Client.generateRandomColor();
        
        await Client.postJobList({id,companyName:$COMPANY_NAME_ELEMENT.value,jobTitle:$JOB_TITLE_ELEMENT.value,color:uniqueColorCode});
        const jobObjectArray = await Client.fetchJobList(); //After the job is posted to the local storage, the fetchList will fetch the updated Local Storage.
        await Client.updateJobListClass(jobObjectArray); //Update List of Jobs
        await Client.updateJobSummary(jobObjectArray.length); //Update Total job created
        Client.hideFormModal(e);
        Client.clearUI();
    }
    catch(error)
    {   
        Client.hideFormModal(e);
        Client.updateErrorUI('Could not add to the list at this time.Please try again later');
        Client.clearUI();
    }
    

}

$SUBMIT_BUTTON_ELEMENT.addEventListener('click',getJobInfo);

module.exports = {getJobInfo};
