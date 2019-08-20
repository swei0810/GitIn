import * as APIUtil from '../util/comment_api_util'; 

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = "DELETE_COMMENT"


export const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const receiveAllComments = (comments) => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
}

export const removeComment = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

export const fetchAllComments = postId => dispatch => {
    return APIUtil.receiveAllComments(postId).then(
        (comments) => dispatch(receiveAllComments(comments))
    )
}

export const deleteComment = commentId => dispatch => {
    return APIUtil.deleteComment(commentId).then( () => {
        dispatch(removeComment(commentId))
    })
}

export const updateComment = comment => dispatch => {
    return APIUtil.updateComment(comment).then( (updatedComment) => {
        dispatch(receiveComment(updatedComment))
    })
}

export const createComment = comment => dispatch => {
    return APIUtil.createComment(comment).then(comment => {
        dispatch(receiveComment(comment))
    })
}