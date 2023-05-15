import axios from "axios"
import { useEffect,useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const Dashboard = () => {
  const [adminProfile,setAdminProfile] = useState({})
  axios.defaults.withCredentials = true
  useEffect(() => {
    const getAdminProfile = () => { 
      axios.get("http://localhost:3000/auth/login", {withCredentials: true}).then(res => {
        setAdminProfile(res.data.admin)
      })
    }
    getAdminProfile()
  }, [])

  return (
    typeof adminProfile !== "undefined" 
    ?
    <div className="relative">
    <Header admin={adminProfile}/>
    <Sidebar />
    </div>
    :
    <Navigate to="/" />
    
  )
}

export default Dashboard