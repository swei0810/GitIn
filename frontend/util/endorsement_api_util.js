export const fetchAllEndorsements = (skillId) => {
    return $.ajax({
        method: "GET", 
        url: `/api/skills/${skillId}/endorsements`
    })
}

export const createEndorsement = (payload) => {
    return $.ajax({
        method: "POST", 
        url: `api/skills/${payload.id}/endorsements`, 
        data: {endorsement: payload }
    })
}

export const deleteEndorsement = (skill) => {
    debugger
    return $.ajax({
        method: "DELETE", 
        url: `api/skills/${skill.id}/endorsements/${currentUser.id}`
    })

}