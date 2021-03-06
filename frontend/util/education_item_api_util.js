
export const createEducationItem = (educationItem) => (
    $.ajax({
        method: 'POST', 
        url: 'api/education_items', 
        data: {educationItem}
    })
);

export const updateEducationItem = (educationItem) => (
    $.ajax({
        method: 'PATCH', 
        url: `api/education_items/${educationItem.id}`, 
        data: {educationItem}   
    })
);

export const deleteEducationItem = (id) => (
    $.ajax({
        method: 'DELETE', 
        url: `api/education_items/${id}`   
    })
);

export const fetchUserEducationItems = (userId) => (
    $.ajax({
        method: 'GET', 
        url: 'api/education_items', 
        data: {userId}
    })
)