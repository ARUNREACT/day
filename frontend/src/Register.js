import React, {useState} from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import './App.scss'

function Register()
{
	const [name,setName]=useState("");
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
	const navigate = useNavigate();

	async function signUp()
	{
		let item={name,email,password};
		console.warn(item);
		let result= await fetch("http://localhost:8000/api/register",{
			method:'POST',
			body:JSON.stringify(item),
			headers:{
				"Content-Type":'application/json',
				"Accept":'application/json'
			}
		})
		result = await result.json();
		console.warn("result",result);
		navigate('/login');
	}
	return(
		<div>
			<Header />
		<div className='col-sm-6 offset-sm-3 head'>
	      <h1>Register page</h1>
	      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="username" /><br />
	      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" /><br />
	      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" /><br />
	      <button onClick={signUp} className="btn btn-primary">Sign up</button>
	    </div>
	    </div>
	);
}
export default Register