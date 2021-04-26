const $SUBMIT_BUTTON_ELEMENT = document.querySelector('#submit-button-id');
// const $FORM_ELEMENT = document.getElementsByTagName('#form');
const $JOB_TITLE_ELEMENT = document.querySelector('#job-title-id');
const $COMPANY_NAME_ELEMENT = document.querySelector('#company-name-id');

const getJobInfo = async(e)=>{

    e.preventDefault();
    Client.updateErrorUI("");

    try {
        const id = Client.generateId();
                
        const uniqueColorCode = Client.generateRandomColor();
        
        await Client.postJobList({id,companyName:$COMPANY_NAME_ELEMENT.value,jobTitle:$JOB_TITLE_ELEMENT.value,color:uniqueColorCode});
        const jobObjectArray = await Client.fetchJobList();
        await Client.updateJobListClass(jobObjectArray);
        await Client.updateJobSummary();
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
