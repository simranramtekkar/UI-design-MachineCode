import React from 'react'
import './Style.css';
import {Link} from 'react-router-dom';


const Navbar =()=>{
	return (


<div className="navbar">
<ul>
  <li className ="margin">LOGO</li>
  <li className ="margin"> <Link to="/">Home</Link></li>
  <li className ="margin"> <Link to="/Task">Task</Link></li>
  <li className ="margin"> <Link to="/User">User</Link></li>
 </ul>
</div>


		);
} ;
export default Navbar