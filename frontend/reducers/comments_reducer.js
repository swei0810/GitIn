import { merge } from "lodash"

import {
    RECEIVE_ALL_COMMENTS,
    RECEIVE_COMMENT,
    DELETE_COMMENT,
} from "../actions/comment_actions";

import { RECEIVE_ALL_POSTS } from "../actions/post_action";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        
        case RECEIVE_ALL_COMMENTS: 
            return merge({}, state, action.comments)
        case RECEIVE_COMMENT:
            return merge({}, state, action.comment)
        case DELETE_COMMENT:

            const newState = Object.assign({}, state)
  
            delete newState[action.commentId]
            return newState
        case RECEIVE_ALL_POSTS: 
            return merge({}, state, action.posts.comments)
        default:
            return state
    }
}

export default commentsReducer