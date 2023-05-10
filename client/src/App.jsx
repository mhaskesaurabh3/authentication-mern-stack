import './App.css';
import { Routes, Route } from 'react-router-dom';

import Signup from './Components/Pages/Signup/Signup';
import Login from './Components/Pages/Login/Login';
import Home from './Components/Pages/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import ProductEdit from './Components/Pages/EditProduct/ProductEdit';

function App() {
  return (
    <>
      <div>{/* <Navbar /> */}</div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/product/edit' element={<ProductEdit />} />
      </Routes>
    </>
  );
}

export default App;
