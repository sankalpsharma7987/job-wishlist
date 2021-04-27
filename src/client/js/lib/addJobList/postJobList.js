/* Helper function to post the job created to the local Storage */

const postJobList = async(jobObject)=>{

    let jobListArray = localStorage.getItem('jobWishList')?JSON.parse(localStorage.getItem('jobWishList')):[];
    jobListArray.push(jobObject);
    localStorage.setItem('jobWishList',JSON.stringify(jobListArray));
}

module.exports = {postJobList};