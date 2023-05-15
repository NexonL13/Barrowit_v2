import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import TableAsset from "./pages/dashboard/pages/TableAsset";
import UpdateAsset from "./pages/dashboard/components/UpdateAsset";
import AddAsset from "./pages/dashboard/components/AddAsset";
import Dashboard from "./pages/dashboard/Dashboard";
import Calendar from "./pages/dashboard/pages/Calendar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="assets" element={<TableAsset />}/>
            <Route path="add" element={<AddAsset />} />
            <Route path="update/:id" element={<UpdateAsset />} />
            <Route path="calendar" element={<Calendar />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
