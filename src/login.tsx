import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassowrd] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const loginDetails = {username, password}

        console.log(username)
        console.log(password)

        setIsPending(true)

        fetch('http://localhost:8080/raps/users/login', {
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(loginDetails)
        }).then((response) => {
            console.log(response)
            setIsPending(false)
            return response.json();
        }).then((data) => {
            console.log(`Error is`)
                
            console.log(data);
            if(data.authorized === true){
                navigate('/home');
            }else{
                alert(data.message)
            }
        })
    }

  return(
      <div className="login">
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
              <label>
                  Username
              </label>
              <input
              type="text"
              required
              value={username} 
              onChange={(e) => setUsername(e.target.value)} />
              <label>
                  Password
              </label>
              <input
              type="password"
              required
              value={password} 
              onChange={(e) => setPassowrd(e.target.value)} />
              {isPending ? <button>Logging in...</button> : <button>Login</button>}
          </form>
      </div>
  ) ;
};

export default Login;
