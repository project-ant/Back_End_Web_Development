import React, {useState} from 'react'

const Login = ({title, angka}) => {

  const [welcomeText, setWelcomeText] = useState("Welcome :)");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setWelcomeText("Selamat Datang");
  };

    return (
      //JSX
      <div>
        <h3>{welcomeText}</h3>
        <br/>
        <h2>{title} {angka}</h2>
        <br/>
        <p>Email</p>
        <input placeholder="Masukkan Email" value={email}></input>
        <p>Password</p>
        <input placeholder="Masukkan Password" type="password" value={password}></input>
        <br></br>
        <br></br>
        <button type="button" onClick={()=> handleSubmit}>Sign In</button>
      </div>
    );
  };
  
  export default Login;