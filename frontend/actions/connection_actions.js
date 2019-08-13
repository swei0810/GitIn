import * as APIUtil from '../util/connection_api_util';


export const RECEIVE_CONNECTION = 'RECEIVE_CONNECTION'; 
export const REMOVE_CONNECTION = 'REMOVE_CONNECTION'; 






export const receiveConnection = (connection) => ({
    type: RECEIVE_CONNECTION, 
    connection
})


export const removeConnection = (connectionId) => ({
    type: REMOVE_CONNECTION, 
    connectionId 

})

export const createConnection = (connection) => dispatch => (
    APIUtil.createConnection(connection).then(connection => dispatch(receiveConnection(connection)))
)


export const approveConenction = (connection) => dispatch => (
    APIUtil.approveConenction(connection).then(connection => dispatch(receiveConnection(connection)))
)


export const deleteConnection = (connectionId) => dispatch => (
    APIUtil.deleteConnection(connectionId).then(connection => dispatch(deleteConnection(connectionId)))
)


export const fetchConnection = () => dispatch => {
    return (
        APIUtil.fetchConnection().then(connection => { 
             return dispatch(receiveConnection(connection))})

    )
}