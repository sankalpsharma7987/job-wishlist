/*Helper function used to create the job list for every object present in the dataObject.
The fragment, returned by the createList function, is then appended to the wishlist of jobs */

const $JOB_LIST_ELEMENT = document.querySelector('.job-list-class');

const updateJobListClass = async(dataObject)=>{

    $JOB_LIST_ELEMENT.innerHTML = "";
    
    if(dataObject)
    {
        dataObject.forEach(data=>{
            const fragment = Client.createJobList(data)
            $JOB_LIST_ELEMENT.appendChild(fragment);
        })
    
    }
}


module.exports = { updateJobListClass }