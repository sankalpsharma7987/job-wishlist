const updateJobSummary = async()=>{
    try{
        const $SUMMARY_ELEMENT = document.querySelector('#job-summary-id');
    
    const data = Client.fetchJobList();

    data?$SUMMARY_ELEMENT.innerText=`${data.length} Jobs`:$SUMMARY_ELEMENT.innerText=`No Jobs Saved`;
    }
    catch(e)
    {
        Client.updateErrorUI('Error updating Job Summary');
    }
    
    
}

window.addEventListener('load',updateJobSummary);
module.exports = {updateJobSummary};
