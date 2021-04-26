const $JOB_LIST_ElEMENT = document.querySelector('.job-list-class');

const deleteJobInfo = async(e)=>{

    await Client.removeJobList(e.target.id);
    const jobObjectArray = Client.fetchJobList();

    if(jobObjectArray.length>0)
    {   
        
        await Client.updateJobListClass(jobObjectArray);
        await Client.updateJobSummary(jobObjectArray.length);
    
    }
    else {
        await Client.updateJobListClass(jobObjectArray);
        await Client.updateJobSummary(0);
        localStorage.removeItem('jobWishList');
    }

}

$JOB_LIST_ElEMENT.addEventListener('click',deleteJobInfo);
module.exports = {deleteJobInfo};