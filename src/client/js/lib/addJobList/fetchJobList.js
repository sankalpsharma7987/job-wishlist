/* Helper function that fetches data from the local storage and returns it to the calling function */

const fetchJobList = ()=>{

    const data = JSON.parse(localStorage.getItem('jobWishList'));
    return data;
}

module.exports = {fetchJobList};