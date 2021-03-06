/*Helper function that is used to create the job list elements and append it to the fragment object.
This fragment object returned is then rendered by the calling function to the job list class element */

const createJobList = (data)=>{

    let fragment = document.createDocumentFragment();

    let jobInfoDiv = document.createElement('div');

    let companyNameDiv = document.createElement('div');

    let text = `<h2>${data.companyName}</h2>`;
    companyNameDiv.innerHTML = text;
    

    let jobTitleDiv = document.createElement('div');
    text= `<h4>${data.jobTitle}</h4>`
    jobTitleDiv.innerHTML = text;
    
    let jobDeleteDiv = document.createElement('div');
    text= `<span class="fa fa-trash w3-xlarge" id="${data.id}"></span>`
    jobDeleteDiv.innerHTML = text;
    jobDeleteDiv.classList.add('job-delete');

    jobInfoDiv.appendChild(companyNameDiv);
    jobInfoDiv.appendChild(jobTitleDiv);
    jobInfoDiv.appendChild(jobDeleteDiv);

    jobInfoDiv.classList.add('job-info');
    
    let jobListDiv = document.createElement('div');
    jobListDiv.appendChild(jobInfoDiv);
    jobListDiv.classList.add('job-list');
    jobListDiv.setAttribute('id',data.id);
    jobListDiv.style.background=`${data.color}`;
    jobListDiv.style.border= `1px solid ${data.color}`;
    fragment.appendChild(jobListDiv);
    return fragment;

}

module.exports = { createJobList }