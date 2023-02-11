import { NavLink, useLocation, useNavigate  } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"
import Chat from "../chat/Chat"

const FarmerDashboard = () => {
    const {logout , currentUser} =useAuth()
    const navigate= useNavigate()
    const location = useLocation()
    const handleSubmit = async(e)=>{
      e.preventDefault()
        try{
            await logout();
            navigate('/login')
        }catch(err){
            console.log(err)
        }
    }
  return (
    <>

         <h1>FarmerDashBoard</h1>
       
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <NavLink to ={`${location.pathname}/chat`} class="nav-link active" aria-current="page"> chat</NavLink>
        </li>
      </ul>
      <form class="d-flex">
      <li class="nav-link disabled" href="#" tabindex="-1">  {currentUser.email}   </li>
        <button class="btn btn-outline-success" type="submit" onClick={handleSubmit}>Logout</button>
      </form>
    </div>
  </div>
</nav>
        
    </>
  )
}
export default FarmerDashboard