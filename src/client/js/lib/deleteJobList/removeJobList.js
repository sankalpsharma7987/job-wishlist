/* Helper function to delete the item from the array in localStorage */
const removeJobList = async(id)=>{

    
    const jobObjectArray = JSON.parse(localStorage.getItem('jobWishList'));

    const index = jobObjectArray.findIndex(jobList=>jobList.id===id);
    jobObjectArray.splice(index,1);
    
    localStorage.setItem('jobWishList',JSON.stringify(jobObjectArray));
    
}

module.exports = {removeJobList};