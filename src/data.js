import axios from 'axios'
import faker from 'faker'

const users = [
    { name: 'chief', species: 'dog' },
    { name: 'chi', species: 'cat' },
    { name: 'karen', species: 'human'}
];

const fetchData = async event => {

    const baseUrl = 'http://star-cors.herokuapp.com/';
    const catagories = ['people', 'films', 'vehicles', 'starships'];

    const promises = catagories.map(cat => { return axios.get(`${baseUrl}${cat}`) });
    const requestResults = await Promise.all(promises);

    const sanitizedObj = requestResults.reduce((acc, item, idx) => {
        acc[catagories[idx]] = item.data;
        return acc;
    }, {})
    return sanitizedObj; //this is an object as expected since this doesn't happen until await finishes
}

const catData = fetchData();

const data = { users, catData };
export default data;