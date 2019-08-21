import * as APIUtil from '../util/skill_api_util'; 

export const RECEIVE_ALL_SKILLS = 'RECEIVE_ALL_SKILLS'; 
export const RECEIVE_SKILL = 'RECEIVE_SKILL'; 
export const REMOVE_SKILL = 'REMOVE_SKILL'; 
export const RECEIVE_USER_SKILLS = 'RECEIVE_USER_SKILLS'; 


export const fetchUserSkills = (userId) => dispatch => (
    APIUtil.fetchUserSkills(userId).then(skills => dispatch(receiveUserSkills(skills)))
)


export const fetchSkill = id => dispatch => (
    APIUtil.fetchSkill(id).then(skill => dispatch(receiveSKill(skill)))
)

export const createSkill = skill => dispatch => (
    APIUtil.createSkill(skill).then(skill => dispatch(receiveSKill(skill)))
)

export const deleteSkill = id => dispatch => (
    APIUtil.deleteSkill(id).then((skill) => dispatch(removeSkill(id)))
)

const receiveSKill = skill => ({
    type: RECEIVE_SKILL, 
    skill
})

const removeSkill = skillId => ({
    type: REMOVE_SKILL, 
    skillId
})

const receiveUserSkills = skills => ({
    type: RECEIVE_USER_SKILLS, 
    skills
})