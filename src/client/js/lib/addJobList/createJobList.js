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

    jobInfoDiv.appendChild(jobDeleteDiv);
    jobInfoDiv.appendChild(companyNameDiv);
    jobInfoDiv.appendChild(jobTitleDiv);

    let jobCreatedTimeStampDiv = document.createElement('div');
    text=`<p>Added ago</p>`;
    jobCreatedTimeStampDiv.innerHTML= text;

    jobInfoDiv.classList.add('job-info');
    jobCreatedTimeStampDiv.classList.add('job-created');
    
    
    let jobListDiv = document.createElement('div');
    jobListDiv.appendChild(jobInfoDiv);
    jobListDiv.appendChild(jobCreatedTimeStampDiv);
    jobListDiv.classList.add('job-list');
    jobListDiv.setAttribute('id',data.id);

    fragment.appendChild(jobListDiv);
    return fragment;

}

module.exports = { createJobList }