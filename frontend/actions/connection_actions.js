import * as APIUtil from '../util/connection_api_util';


export const RECEIVE_USER_CONNECTIONS = "RECEIVE_USER_CONNECTIONS"; 
export const RECEIVE_CONNECTION = 'RECEIVE_CONNECTION'; 
export const REMOVE_CONNECTION = 'REMOVE_CONNECTIONS'; 

export const fetchUserConnections = (userId) => dispatch => (
    APIUtil.fetchUserConnections(userId).then(connections => dispatch(receiveUserConnections(connections)))
)


export const createConnection = connection => dispatch => (
    APIUtil.createConnection(connection).then(connection => dispatch(receiveConnection(connection)))
)


export const approveConenction = connection => dispatch => (
    APIUtil.approveConenction(connection).then(connection=> dispatch(receiveConnection(connection)))
)


export const deleteConnection = connectionId => dispatch => (
    APIUtil.deleteConnection(connectionId).then(connection => dispatch(removeConnection(connectionId)))
)


const receiveConnection = connection => ({
    type: RECEIVE_CONNECTION, 
    connection 
})

const receiveUserConnections = connections => ({
    type: RECEIVE_USER_CONNECTIONS, 
    connections
})

const removeConnection = connectionId => ({
    type: REMOVE_CONNECTION, 
    connectionId
})