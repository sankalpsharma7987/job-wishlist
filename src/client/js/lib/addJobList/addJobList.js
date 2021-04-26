const $JOB_LIST_ELEMENT = document.querySelector('.job-list-class');

const updateJobListClass = async(dataObject)=>{

    $JOB_LIST_ELEMENT.innerHTML = "";
    
    dataObject.forEach(data=>{
        const fragment = Client.createJobList(data)
        $JOB_LIST_ELEMENT.appendChild(fragment);
    })
}


module.exports = { updateJobListClass }