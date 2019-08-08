export const fetchAllPosts = () => {
    return $.ajax({
        method: "GET",
        url: "api/posts"
    })
}

export const fetchPost = (id) => {
    return $.ajax({
        method: 'GET', 
        url: `api/posts/${id}`
    })
}

//should be nested under user?   if so change the route 
export const createPost = (formData) => {
    return $.ajax({
        method: "POST",
        url: `api/posts`,
        data: formData, 
        contentType: false, 
        processData: false
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