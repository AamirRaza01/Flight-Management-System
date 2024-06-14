import React from 'react';
import { Link, Route, Routes, useNavigate, useResolvedPath } from 'react-router-dom';
import AddFlight from './AddFlight';

const AdminDashboard = () => {
  const { pathname } = useResolvedPath('');
  const navigate = useNavigate()

  const handleLogout = () => {
    //logout logic will be here
    //for example:
    navigate("/")
  }

  return (
    <div className="flex">
      <div className="w-1/5 bg-indigo-900 text-white h-screen p-5 fixed top-0 left-0">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link to={`${pathname}/add-flight`} className="text-white hover:text-gray-300">Add Flight</Link>
          </li>
          <li className="mb-4">
            <Link to={`${pathname}/add-user`} className="text-white hover:text-gray-300">Add User</Link>
          </li>
        </ul>
        <button onClick={handleLogout} className="text-white bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded absolute bottom-8 left-[50%] translate-x-[-50%] ">Logout</button>
      </div>
      <div className="w-4/5 absolute right-0 p-5 shadow-sm ">
        <Routes>
          <Route path="/" element={<h3>Please select an option from the sidebar</h3>} />
          <Route path="add-flight" element={<AddFlight/>} />
          <Route path="add-user" element={<AddUser />} />
        </Routes>
      </div>
    </div>
  );
};


// To be used when Add User feature will be implemented
// const AddUser = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">Add User</h2>
//     {/* Add your form or content for adding users here */}
//   </div>
// );

export default AdminDashboard;
