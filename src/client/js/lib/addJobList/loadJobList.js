/* Helper function to load the job list everytime page is loaded */

const loadJobList = async()=>{

    const jobListArray = Client.fetchJobList();
    if(jobListArray)
    {
        await Client.updateJobListClass(jobListArray);
        await Client.updateJobSummary(jobListArray.length);
    
    }
    else {
        await Client.updateJobListClass(jobListArray);
        await Client.updateJobSummary(0);
    }

}

window.addEventListener('load',loadJobList);
module.exports = {loadJobList};