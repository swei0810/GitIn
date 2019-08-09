import * as APIUtil from '../util/company_api_util';

export const RECEIVE_ALL_COMPANIES = 'RECEIVE_ALL_COMPANIES';
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";



export const receiveAllCompanies = (companies)  => ({
    type: RECEIVE_ALL_COMPANIES, 
    companies
});

export const receiveCompany = (company) => ({
    type: RECEIVE_COMPANY, 
    company
})

export const fetchAllCompanies = () => dispatch => (
    APIUtil.fetchAllCompanies().then(companies => dispatch(receiveAllCompanies(companies)))
)

export const fetchCompany = (id) => dispatch => (
    APIUtil.fetchCompany(id).then(company => dispatch(receiveCompany(company)))
)