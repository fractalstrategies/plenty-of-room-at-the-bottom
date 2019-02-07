import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        data: {jello: 'world'}
    })
}

export const newPost = () => dispatch => {
    dispatch({
        type: NEW_POST,
        data: {jello: 'world'}
    })
}
