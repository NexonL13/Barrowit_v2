import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import TableAsset from "./pages/dashboard/pages/TableAsset";
import UpdateAsset from "./pages/dashboard/components/UpdateAsset";
import AddAsset from "./pages/dashboard/components/AddAsset";
import Dashboard from "./pages/dashboard/Dashboard";
import Calendar from "./pages/dashboard/pages/Calendar";
import Analytics from "./pages/dashboard/pages/Analytics";
import Users from "./pages/dashboard/pages/Users";
import ApprovalTable from "./pages/dashboard/pages/ApprovalTable";
import AuditTrail from "./pages/dashboard/pages/AuditTrail";
import Document from "./pages/dashboard/pages/Document";
import ProfileCard from "./pages/dashboard/components/ProfileCard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="analytics"index element={<Analytics />}/> 
            <Route path="assets" element={<TableAsset />}/>
            <Route path="add" element={<AddAsset />} />
            <Route path="update/:id" element={<UpdateAsset />} />
            <Route path="calendar" element={<Calendar />}/>
            <Route path="users" element={<Users />}/>
            <Route path="approval" element={<ApprovalTable />} />
            <Route path="trail" element={<AuditTrail />} />
            <Route path="document" element={<Document />} />
            <Route path="profile" element={<ProfileCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
