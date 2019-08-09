export const fetchAllCompanies = () => (
    $.ajax({
        method: 'GET', 
        url: 'api/companies'
    })
)


export const fetchCompany = id => (
    $.ajax({
        method: 'GET', 
        url: `api/companies/${id}`
    })
);
