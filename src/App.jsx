
import './App.css';
import SignUp from './pages/Signup_Login/SignupAndLogin.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home/Home.jsx';
import AddNewEmployee from './pages/addNewEmployee/AddNewEmployee.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/createEmployee" element={<AddNewEmployee/>} />

      </Routes>
      <Toaster/>
    </Router>
    
  );
}

export default App;