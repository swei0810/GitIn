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

export const deleteEndorsement = (endorsement) => {
    return $.ajax({
        method: "DELETE", 
        url: `api/skills/${endorsement.skill_id}/endorsements/${endorsement.id}`
    })

}