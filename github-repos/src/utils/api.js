import axios from "axios";

function setDate() {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    const dateString = date.toISOString().split('T')[0];
    return dateString;
}

export function fetchRepos(pageNum) {
    const dateString = setDate()
    return(
        axios.get(`https://api.github.com/search/repositories?q=created:>${dateString}&sort=stars&order=desc&page=${pageNum}&per_page=100`)
    )
}



export default fetchRepos;