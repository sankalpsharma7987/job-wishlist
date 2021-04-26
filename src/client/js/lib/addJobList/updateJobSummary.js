const updateJobSummary = async(jobObjectArrayLength)=>{
    try{
        const $SUMMARY_ELEMENT = document.querySelector('#job-summary-id');
    
        if(jobObjectArrayLength>0)
        {   
            $SUMMARY_ELEMENT.innerText=`${jobObjectArrayLength} Jobs`;
        }
        else {
            $SUMMARY_ELEMENT.innerText=`No Jobs Saved`;
        }

    }
    catch(e)
    {   console.log(e);
        Client.updateErrorUI('Error updating Job Summary');
    }
    
    
}

module.exports = {updateJobSummary};
