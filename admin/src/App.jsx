import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddExpert from './pages/Admin/AddExpert';
import ExpertsList from './pages/Admin/ExpertsList';
import ExpertAppointments from './pages/Expert/ExpertAppointments';
import ExpertDashboard from './pages/Expert/ExpertDashboard';
import ExpertProfile from './pages/Expert/ExpertProfile';
import Meet from "./pages/Admin/Meet"; 

const App = () => {
  return (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-expert' element={<AddExpert />} />
          <Route path="/admin-meet" element={<Meet />} />
          <Route path='/expert-list' element={<ExpertsList />} />
          <Route path='/expert-dashboard' element={<ExpertDashboard />} />
          <Route path='/expert-appointments' element={<ExpertAppointments />} />
          <Route path='/expert-profile' element={<ExpertProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
