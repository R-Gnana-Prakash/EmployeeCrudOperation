import React from "react";
import { GrUserWorker} from 'react-icons/gr'

const Header = () => {
    return ( 
        <div className="header">
            <div className="title">
                <h1>Employees <GrUserWorker /></h1>
            </div>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/addemp">Add Employee</a>
            </div>
        </div>
     );
}
 
export default Header;