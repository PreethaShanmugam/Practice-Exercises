import React,{useState} from 'react'

function Login() {
  const [username,setUsername]=useState('');
  const [Password,setPassword]=useState('');
  const [error,setError]=useState(false);
  const formHandler=(event)=>{
    event.preventDefault();
    if(username.length===0&&Password.length===0)
      {
        setError(true);
      }
      if(username && Password)
    {
    const loginObj={
      name:username,
      pwd:Password
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
  }
 }
   return (
    <div>
    <h3>Login page</h3>
    <form onSubmit={formHandler}>
    Username :<input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername (e.target.value)}></input><br />
    <div>
    {error&& username.length===0?
    <label style={{color:'red'}}>Username is required</label>:""}
    </div>
    password :<input type="password" value={Password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input><br />
    <div>
    {error && Password.length===0? <label style={{color:'red'}}>password is required</label>:""}
    </div>
    <button>login</button>
        </form>
    </div>
    
  )
}

export default Login