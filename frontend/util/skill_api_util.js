export const fetchAllSkills = () => (
    $.ajax({
        method: 'GET', 
        url: 'api/skills'
    })
)


export const fetchSkill = (id) => (
    $.ajax({
        method: 'GET', 
        url: `api/skills/${id}`
    })
)


export const createSkill = (skill) => (
    $.ajax({
        method: 'POST', 
        url: 'api/skills', 
        data: {skill}
    })
)

export const deleteSkill = (id) => (
    $.ajax({
        method: 'DELETE', 
        url: `api/skills/${id}`
    })
)


export const fetchUserSkills = (userId) => (
    $.ajax({
        method: 'GET', 
        url: 'api/skills', 
        data: {userId}
    })
)