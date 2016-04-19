import axios from 'axios';

const API_KEY = '?key=jjelosua'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'

// To sync with our reducers
export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'

export function fetchPosts() {
    //Select book is an action creator
    const url = `${ROOT_URL}/posts${API_KEY}`

    const request = axios.get(url);
    console.log('url: ', url);
    
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(post) {
    //Select book is an action creator
    const url = `${ROOT_URL}/posts${API_KEY}`

    const request = axios.post(url, post);
    console.log('url: ', url);
    
    return {
        type: CREATE_POST,
        payload: request
    };
}