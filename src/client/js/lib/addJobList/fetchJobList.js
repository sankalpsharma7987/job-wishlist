const fetchJobList = ()=>{

    const data = JSON.parse(localStorage.getItem('jobWishList'));
    return data;
}

module.exports = {fetchJobList};