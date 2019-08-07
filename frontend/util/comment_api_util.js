export const createComment = (postId, comment) => {
    return $.ajax({
        method: "POST",
        url: `/api/posts/${postId}/comments`,
        data: {comment}
    })
}



//routes? 
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