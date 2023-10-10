import Header from './Header';
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';

function Login()
{
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
	const navigate = useNavigate();

	async function login()
	{
		let item={email,password};
		console.warn(item);
		let result= await fetch("http://localhost:8000/api/login",{
			method:'POST',
			body:JSON.stringify(item),
			headers:{
				"Content-Type":'application/json',
				"Accept":'application/json'
			}
		})
		result = await result.json();
		console.warn("result",result);
		navigate('/home');
	}
	return(
		<div>
			<Header />
			<div className="flex justify-center items-center bg-black  w-full h-screen">
				<div className='col-sm-6 text-cente  bg-gray-100 rounded-xl shadow border'>
			      <h1 className='text-black font-bold py-2 rounded'>Login page</h1>
			      <input className="form-control py-2" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
			      <input className="form-control my-4" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
			      <button onClick={login} className="btn btn-primary">Login</button>
			    </div>
		    </div>
		</div>
	)
}
export default Login