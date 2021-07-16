import {useEffect, useState} from 'react'
import Axios from 'axios'
import './style.css'

function App() {

  const [usernameReg,setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')



  Axios.defaults.withCredentials = true

  const register = () => {
    Axios.post('http://localhost:3002/register', {
      username: usernameReg,
      password: passwordReg,
    }).then((response)=>{
      console.log(response)
    })
  }

  const login = () => {
    Axios.post('http://localhost:3002/login', {
      username: username,
      password: password,
    }).then((response)=>{
      if(response.data.message){
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus('Hi! ' + response.data[0].username)
      }
    })
  }

  useEffect(()=>{
    Axios.get("http://localhost:3002/login").then((response)=>{
      if(response.data.loggedIn === true){
      setLoginStatus('Hi! ' + response.data.user[0].username)
    }
  })
  }, [])

  return (
    <div className="app">
      <div className="cnt">
        <div className="form">
          <h1 className="reg">Registration</h1>
          <h2>Username</h2>
          <input placeholder="Username" type="text" onChange = {(event)=>{
            setUsernameReg(event.target.value)
          }} />
          <h2>Password</h2>
          <input placeholder="Password" type="password" onChange = {(event)=>{
            setPasswordReg(event.target.value)
          }}/><br />
          <button onClick = {register}>Register</button>
        </div>
        <br />
        <br />
        <div className="form">
          <h1>Login <span>{loginStatus}</span></h1>
          <h2>Username</h2>
          <input placeholder="Username" type="text" onChange = {(event)=>{
            setUsername(event.target.value)
          }}/>
          <h2>Password</h2>
          <input placeholder="Password" type="password" onChange = {(event)=>{
            setPassword(event.target.value)
          }}/><br />
          <button onClick={login}>Login</button>
        </div>
        {/*<h1>{loginStatus}</h1>*/}
      </div>
    </div>

  );
}

export default App;
