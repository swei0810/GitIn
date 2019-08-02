export const fetchEducationItem = id => {
    $.ajax({
        method: 'GET', 
        url: `api/education_items/${id}`
    })
;}

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
        url: `api/education_items/edit/${educationItem.id}`, 
        data: {educationItem}   
    })
);

export const deleteEducationItem = (id) => {
    $.ajax({
        method: 'DELETE', 
        url: `api/education_items/${id}`   
    })
};