const $JOB_TITLE_ELEMENT = document.querySelector('#job-title-id');
const $COMPANY_NAME_ELEMENT = document.querySelector('#company-name-id');

const clearUI = ()=>{
    $JOB_TITLE_ELEMENT.value="";
    $COMPANY_NAME_ELEMENT.value="";
}

module.exports = {clearUI};