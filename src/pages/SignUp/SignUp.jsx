import React , {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'




const SignUp = () => {
    const emailRef= useRef()
    const passwdRef= useRef()
    const userRef= useRef()
    const {signUp} =useAuth()
    const navigate= useNavigate()
    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        const response = await signUp(emailRef.current.value, passwdRef.current.value, userRef.current.value)
        navigate('/login')
        console.log(response)

      }catch(err){
        console.log(err)
      }
   

    
    
    }
   
  return (
    <>
    <h1>SignUp</h1>
    <form onSubmit={handleSubmit} style = {{
        display:"flex",
        justifyContent: "center",
        alignItems : "center",
        height : '100px'
    }}>
        
        <input ref={emailRef} type="email" name="email" id="email" />
        <input ref ={passwdRef} type="password" name="passwd" id="passwd" />
        <input ref = {userRef} type="text" name="user" id="user" />
        <button type="submit">submit</button>


    </form>
    </>
  )
}
export default SignUp