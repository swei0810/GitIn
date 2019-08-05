
export const fetchAllExperienceItems = () => (
    $.ajax({
        method: 'GET', 
        url: 'api/experience_items'
    })
)


export const fetchExperienceItem = id => (
    $.ajax({
        method: 'GET', 
        url: `api/experience_items/${id}`
    })
);

export const createExperienceItem = (experienceItem) => (
    $.ajax({
        method: 'POST', 
        url: 'api/experience_items', 
        data: {educationItem}
    })
);

export const updateExperienceItem = (experienceItem) => (
    $.ajax({
        method: 'PATCH', 
        url: `api/experience_items/edit/${experienceItem.id}`, 
        data: {educationItem}   
    })
);

export const deleteExperienceItem = (id) => (
    $.ajax({
        method: 'DELETE', 
        url: `api/experience_items/${id}`   
    })
);