import React, {useState} from "react";
import axios from "axios"
import image from "../../assests/login/Other 07.png"
import "./styles.css"
import {Idle, Processing, Success, Exception, ProcessStatus} from "../../core/Process";

interface FormData {
  username: string;
  password: string;
  error: string | null
}

// interface props {
//   setToken: React.Dispatch<React.SetStateAction<string | null>>
// }
//{setToken}: props
const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    error:null
  })
  const [loginProcess, setLoginProcess] = useState<ProcessStatus<boolean>>(new Idle())

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoginProcess(new Processing())
    try{
     const response = await axios.post(`http://localhost:9000/api/auth/signin`, formData)
      const token = response.data.token
      localStorage.setItem("kuepa_token", token)
      setLoginProcess(new Success(true))
    }catch (e) {
      setLoginProcess(new Exception(e))
      if (e.response.status){
        setFormData(prevState => {
          const newState = Object.assign({}, prevState)
          newState.error = "Invalid username or password. Try again."
          return newState
        })
      }
    }
  }
  if (loginProcess instanceof Processing) {
    return (
      <div className={"formContainer"}>
        Loading...
      </div>
    );
  }else if (loginProcess instanceof Success){
    return <div>Successfully</div>
  }else{
    return (<div className={"formContainer"}>
      <form onSubmit={handleSubmit} className={"form"}>
        <img src={image} alt={"Computer login"} className={"loginImage"}/>
        <label className={"label"}>
          Username:
          <input
            className={"input"}
            type={"text"}
            onChange={(event) => {
              setFormData(prevState => {
                const newState = Object.assign({}, prevState)
                newState.username = event.target.value
                return newState
              })
            }}
          />
        </label>
        <label className={"label"}>
          Password:
          <input
            className={"input"}
            type={"password"}
            onChange={(event) => {
              setFormData(prevState => {
                const newState = Object.assign({}, prevState)
                newState.password = event.target.value
                return newState
              })
            }}
          />
        </label>
        <p className={"textError"}>{formData.error}</p>
        <button type={"submit"} className={"button"}>Login</button>
      </form>
    </div>)
  }
}

export default Login