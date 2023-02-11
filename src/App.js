import React ,{useRef} from 'react'
import AuthProvider from './context/AuthProvider'
import ManageRouter from './context/ManageRouter'


const App = () => {



  return (
    <AuthProvider>
        <ManageRouter/>
        {/* <SignIn/> */}
    </AuthProvider>
  


  )
}

export default App