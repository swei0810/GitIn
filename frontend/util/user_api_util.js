export const fetchAllUsers = () => (
    $.ajax({
        method: 'GET', 
        url: 'api/users'
    })
)


export const fetchUser = id => (
    $.ajax({
        method: 'GET', 
        url: `api/users/${id}`
    })
);


export const updateUser= (user) => (
    $.ajax({
        method: 'PATCH', 
        url: `api/users/edit/${user.id}`, 
        data: {user}   
    })
);