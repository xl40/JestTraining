import axios from 'axios'

export const runCallback = (callback) => {
    callback();
}

export const crateObject = (classItem) => {
    new classItem();
}

export const getData = () => {
    return axios.get('/api').then(res => res.data);
}
