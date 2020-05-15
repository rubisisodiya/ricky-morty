import axios from 'axios';

function fetchData(endpoint, param) {
    let url = 'https://rickandmortyapi.com/api/';
    let identifier = param;
    if(!param) identifier = '';
    let data = axios.get(`${url}${endpoint}/${identifier}`);
    console.log(`${url}${endpoint}/${identifier}`);
    console.log(data);
    return data;
}

export default fetchData