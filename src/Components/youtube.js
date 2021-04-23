import axios from 'axios';
const KEY = 'AIzaSyAswCwst4XLL7WJ3uAOh58u0dccNBH5ztE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})