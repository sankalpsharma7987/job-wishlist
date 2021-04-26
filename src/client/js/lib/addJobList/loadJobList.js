const loadJobList = ()=>{

    const jobListArray = Client.fetchJobList();

    if(jobListArray){
        Client.updateJobListClass(jobListArray);
    }
    
}

window.addEventListener('load',loadJobList);
module.exports = {loadJobList};