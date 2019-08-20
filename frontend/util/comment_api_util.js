
export const receiveAllComments = (postId) => {
    return $.ajax({
        method: "GET",
        url: `/api/posts/${postId}/comments`
    })
}

export const createComment = (payload) => {
    return $.ajax({
        method: "POST",
        url: `/api/posts/${payload.post_id}/comments`,
        data: {comment: payload}
    })
}

export const updateComment = (postId, comment) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${postId}/comments/${comment.id}`,
        data: { comment }
    })
}

export const deleteComment = (postId, commentId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${postId}comments/${commentId}`
    })
}