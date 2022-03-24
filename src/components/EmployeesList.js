import { Link } from "react-router-dom/cjs/react-router-dom.min";

const EmployeesList = (props) => {

    const employees = props.employees;

    const handleDelete = (id) => {
        fetch('http://localhost:8000/employees/' + id,{
            method: 'DELETE'
        })
        .then(() => {
            console.log("this employee details are deleted successfully");
        })
    };

    return ( 
        <div className="employeeslist">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DESIGNATION</th>
                <th>EMAIL ID</th>
                <th>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {employees.map((employee) =>  {
                return (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.designation}</td>
                        <td>{employee.mailId}</td>
                        <td><Link to={`/edit/${employee.id}`} className="editbtn">edit</Link> <button onClick={() => {handleDelete(employee.id)}} className="deletebtn">delete</button></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
     );
}
 
export default EmployeesList;