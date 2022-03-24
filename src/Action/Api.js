import axios from 'axios';

const url = 'http://localhost:8000/employees';


export const getEmployees = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const editDetails = async (id, employee) => {
    return await axios.put(`${url}/${id}`, employee)
}