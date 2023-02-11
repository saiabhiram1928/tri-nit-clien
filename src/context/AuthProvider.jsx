import React,{createContext, useEffect, useState ,useContext} from 'react'
import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

const AuthContext = createContext()

const useAuth = ()=>{
    return useContext(AuthContext)
}


const AuthProvider = ({children}) => {
    const [currentUser ,setCurrentUser] =useState()
    const [streamUser , setStreamuser] =useState()
    const [token ,setToken ]= useState()
    const [loading ,setLoading] = useState(false)
    const [type , setType] =useState("FARMER")
    const addusertodb = async (email ,userId ) => {
      const id =userId+ new Date().getTime().toString()
      const response =await fetch(`${process.env.REACT_APP_SERVER}/application/createUser` ,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({ email :email , type : type , id: id  })
      })
      console.log(response)
    }
const connectTostream = async (email)=>{
  setLoading(true)
  const response = await fetch (`${process.env.REACT_APP_SERVER}/application/login`,{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({ email : email})

  })
  // console.log(await response.json())
  const data= await response.json()
  setStreamuser(data.userDetails)
  setToken(data.token)
  setLoading(false)
}
const signUp = (email, password ,userId)=>{
     addusertodb(email ,userId)
    return  createUserWithEmailAndPassword(auth ,email, password)

}
const login = (email,password)=>{
     connectTostream(email)
  return signInWithEmailAndPassword(auth, email , password)
}
const logout = ()=>{
  return signOut(auth)
}

useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth , (user) =>{
      setCurrentUser(user)
      setLoading(false)
    })
    return unSubscribe
},[])

const value={
    currentUser,
    loading ,
    signUp,
    type,
    login,
    logout
}



  return (
    <AuthContext.Provider value={value}>
        {!loading && children}  
    </AuthContext.Provider>
  )
}
export default AuthProvider
export {useAuth}