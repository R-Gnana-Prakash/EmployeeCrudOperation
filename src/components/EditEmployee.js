import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { editDetails, getEmployees } from '../Action/Api';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initialValue = {
    name: '',
    designation: '',
    mailId: '',
}

const EditEmployee = () => {

    const [employee, setEmployee] = useState(initialValue);
    const { name, designation, mailId} = employee;
    const { id } = useParams();
    let history = useHistory();
       
    useEffect(() => {
        loadEmployeeDetails();
    }, []);

    const loadEmployeeDetails = async() => {
        const response = await getEmployees(id);
        setEmployee(response.data);
    }

    const editEmployeeDetails = () => {
        editDetails(id, employee).then(() => {
            history.replace('/');
        });
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setEmployee({...employee, [e.target.name]: e.target.value})
    }


    return ( 
        <div className="addemployee">
            <h3>Edit the employee details</h3>
            <form onSubmit={editEmployeeDetails}>
                <label>Name:</label>
                <input 
                    type="text" 
                    required
                    onChange={(e) => onValueChange(e)} 
                    name='name' 
                    value={name || ""}
                />
                <label>Designation:</label>
                <input 
                    type="text"
                    required 
                    onChange={(e) => onValueChange(e)} 
                    name='designation' 
                    value={designation || ""}
                />
                <label>E-mail Id:</label>
                <input 
                    type="text"
                    required 
                    onChange={(e) => onValueChange(e)} 
                    name='mailId' 
                    value={mailId || ""}
                />
                <button className="addbtn">update Employee</button>
            </form>
        </div>
     );
}
 
export default EditEmployee;