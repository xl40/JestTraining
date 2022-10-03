import axios from 'axios';
const url = 'http://www.dell-lee.com/react/api/';

export const fetchData = (fn) => {
    axios.get(url + 'demo.json').then(res => {
        fn(res.data)
    })
};

export const fetch = () => {
    return axios.get(url + 'demo.json');
};

export const fetch404 = () => {
    return axios.get(url + '');
};
