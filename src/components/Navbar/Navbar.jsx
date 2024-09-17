import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = async () =>{
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    try {
      const res = await fetch(`${BASE_URL}/api/adminauth/adminLogout`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials:'include',
      });
      if(!res.ok){
        throw new Error('Failed to Sign Out');
      }
      if(res.ok){
        localStorage.removeItem('userData');
        navigate('/')
        toast.success("Successfully Sign Out")
      }
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setIsUserLoggedIn(!!userData); 
  }, []);

  return (
    <nav className="top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 bg-opacity-90">
      <Link to="/" className="text-white text-2xl font-bold">
        <span className="font-bold text-blue-300">Admin Panel</span>
      </Link>
      <div>
        <Link
          to="/createEmployee"
          className={`text-white px-4 py-2 hover:bg-gray-700 rounded max-[500px]:p-1 ${!isUserLoggedIn && "hidden"}`}
          disabled={!isUserLoggedIn}
        >
          Create Employee
        </Link>
        <button
          onClick={handleLogOut}
          className={`text-white px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 rounded max-[500px]:p-1 ${!isUserLoggedIn && "hidden"}`}
          disabled={!isUserLoggedIn}
        >
          LogOut
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
