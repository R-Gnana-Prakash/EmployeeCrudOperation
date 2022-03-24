import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddEmployee = () => {

    const [name , setName] = useState('');
    const [designation , setDesignation] = useState('');
    const [mailId , setMailId] = useState('');
    const [isPending, setIsPending] =useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const employee = {name,designation,mailId};

        setIsPending(true);

        fetch('http://localhost:8000/employees',{
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body:  JSON.stringify(employee)
        }).then(() =>{
            console.log('new blog add');
            setIsPending(false);
            history.push('/');
        })

    };

    return ( 
        <div className="addemployee">
            <h3>Add the employee details</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    placeholder="write your name here.."
                    required
                    value={name}
                    onChange = {(e) => {setName(e.target.value)}}
                /><br/>
                <label>Designation:</label>
                <input 
                    type="text"
                    placeholder="write your designation here.."
                    required 
                    value={designation}
                    onChange = {(e) => {setDesignation(e.target.value)}}
                /><br/>
                <label>E-mail Id:</label>
                <input 
                    type="text"
                    placeholder="write your email-id here.."
                    required 
                    value={mailId}
                    onChange = {(e) => {setMailId(e.target.value)}}
                /><br/>
                {!isPending && <button className="addbtn">Add Employee</button>}
                { isPending && <button className="addbtn" disabled>Adding...</button>}
            </form>            
        </div>
     );
}
 
export default AddEmployee;