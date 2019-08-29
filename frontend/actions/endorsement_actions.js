import * as APIUtil from '../util/endorsement_api_util'; 

export const RECEIVE_ALL_ENDORSEMENTS = 'RECEIVE_ALL_ENDORSEMENTS'; 
export const RECEIVE_ENDORSEMENT = 'RECEIVE_ENDORSEMENT'; 
export const DELETE_ENDORSEMENT = 'DELETE_ENDORSEMENT'; 

const receiveEndorsement = (endorsement) => {
    return {
        type: RECEIVE_ENDORSEMENT, 
        endorsement 
    }
}

const receiveAllEndorsements = (endorsements) => {
    return {
        type: RECEIVE_ALL_ENDORSEMENTS, 
        endorsements
    }
}


const removeEndorsement = (endorsementId) => {
    return {
        type: DELETE_ENDORSEMENT, 
        endorsementId
    }
}

export const fetchAllEndorsements = skillId => dispatch => {
    return APIUtil.fetchAllEndorsements(skillId).then(
        (endorsements) => dispatch(receiveAllEndorsements(endorsements))
    )
}

export const createEndorsement = endorsement => dispatch => {
    return APIUtil.createEndorsement(endorsement).then(endorsement => {
        dispatch(receiveEndorsement(endorsement))
    })
}

export const deleteEndorsement = skillId => dispatch => {
    return APIUtil.deleteEndorsement(skillId).then(()=> {
        dispatch(removeEndorsement(skillId))
    })
}