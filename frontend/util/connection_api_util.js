export const fetchConnection = () => {
    return $.ajax ({
        type: 'GET', 
        url: 'api/connections'
    })
}

export const createConnection = connection => {
    return $.ajax({
        type: 'POST', 
        url: 'api/connections',
        data: {connection}
    })
} 

export const approveConenction = connection => {
    return $.ajax({
        type: 'PATCH', 
        url: `api/connections/${connection.id}`, 
        data: {connection}
    })
}

export const deleteConnection = connectionId => {
    return $.ajax({
        type: 'DELETE', 
        url: `api/connections/${connectionId}`
    })
}


