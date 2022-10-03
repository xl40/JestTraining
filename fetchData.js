import axios from 'axios';

export const fetchData = (fn) => {
    axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
        fn(res.data)
    })
};

export const fetchWithOutCB = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo.json');
};

export const fetch404 = () => {
    return axios.get('http://www.dell-lee.com/react/api/demoxx.json');
};
