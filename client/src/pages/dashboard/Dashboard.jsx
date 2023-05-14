import axios from "axios"
import { useEffect,useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"


const Dashboard = () => {
  const [adminProfile,setAdminProfile] = useState({})
  const navigate = useNavigate()
  const logOut = () => {
    axios.get("http://localhost:3000/auth/logout").then(() => {
      navigate('/')
    })
  }

  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get("http://localhost:3000/auth/login").then((res) => {
      if(res.data.loggedIn === true){
        setAdminProfile(res.data.admin)
      }else {
        setAdminProfile(undefined)
      }
    })
  }, [])

  return (
    <>
    <div className="flex space-between px-10 py-5">
    {typeof adminProfile === "undefined" ?
    <button className="btn btn-xs btn-teal-500 block ms-auto" onClick={() => navigate('/')}>Log in</button>
    :
    <>
    <h1>{`Profile Name: ${adminProfile.firstName} ${adminProfile.middleName} ${adminProfile.lastName}`}</h1>
    <button className="btn btn-xs block ms-auto" onClick={logOut}>Log out</button>
    {console.log(adminProfile)}
    </>  
  }
    </div>
    
    <Outlet/>
    <Link to="assets">Assets</Link>
    </>
  )
}

export default Dashboard