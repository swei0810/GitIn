export const fetchAllPosts = () => {
    return $.ajax({
        method: "GET",
        url: "api/posts"
    })
}



//should be nested under user?   if so change the route 
export const createPost = (post) => {
    return $.ajax({
        method: "POST",
        url: `api/posts`,
        data: {post}
    })
}



export const updatePost = post => {
    return $.ajax({
        method: "PATCH",
        url: `api/posts/${post.id}`,
        data: {post}
    })
}

export const deletePost = post => {
    return $.ajax({
        method: "DELETE",
        url: `api/posts/${post.id}`
    })
}