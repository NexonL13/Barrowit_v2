import axios from "axios"
import { useEffect,useState } from "react"
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [adminProfile,setAdminProfile] = useState({})
  const navigate = useNavigate()

  axios.defaults.withCredentials = true
  const logOut = () => {
    axios.get("http://localhost:3000/auth/logout").then(() => {
      navigate('/')
    })
  }

  useEffect(() => {
    const getAdminProfile = () => { 
      axios.get("http://localhost:3000/auth/login").then(res => {
        setAdminProfile(res.data.admin)
      })
    }
    getAdminProfile()
  }, [])

  return (
    typeof adminProfile === 'undefined' ?
    <Navigate to="/" />
    :
    <>
    <div className="flex space-between px-10 py-5">
    <h1>{`Profile Name: ${adminProfile?.firstName} ${adminProfile?.middleName} ${adminProfile?.lastName}`}</h1>
    <button className="btn btn-xs block ms-auto" onClick={logOut}>Log out</button> 
    </div>
    <Outlet/>
    </>
  )
}

export default Dashboard