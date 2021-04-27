/*Function that will be called by the continue button, once the user confirms about deleting the job from the wishlist.
This function will first delete the job and will render the updated list and update the summary. 
If there are no objects returned from local storage, then it will simply update total job to be 0 */

const deleteJobInfo = async(id)=>{
    
    await Client.removeJobList(id);
    const jobObjectArray = Client.fetchJobList();

    if(jobObjectArray.length>0)
    {   
        
        await Client.updateJobListClass(jobObjectArray); //Pass the jobListArray value as an array with values;
        await Client.updateJobSummary(jobObjectArray.length);
    
    }
    else {
        await Client.updateJobListClass(jobObjectArray); //Pass the jobListArray value as null
        await Client.updateJobSummary(0); //Pass the total job value to 0
        localStorage.removeItem('jobWishList'); //Cleanup the localStorage by removing the jobWishList item from the array.
    }
    


}


module.exports = {deleteJobInfo};