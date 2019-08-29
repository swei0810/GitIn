export const fetchAllEndorsements = (skillId) => {
    return $.ajax({
        method: "GET", 
        url: `/api/skills/${skillId}/endorsements`
    })
}

export const createEndorsement = (payload) => {
    return $.ajax({
        method: "POST", 
        url: `api/skills/${payload.skill_id}/endorsements`, 
        data: { endorsement }
    })
}

export const deleteEndorsement = (endorsement) => {
    return $.ajax({
        method: "DELETE", 
        url: `api/skills/${endorsement.skill_id}/endorsements/${endorsement.id}`
    })

}