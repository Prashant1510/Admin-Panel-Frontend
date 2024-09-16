import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 bg-opacity-90">
      <Link to="/" className="text-white text-2xl font-bold">
        <span className="font-bold text-blue-300">Admin Panel</span>
      </Link>
      <div>
        <Link
          to="/createEmployee"
          className="text-white px-4 py-2 hover:bg-gray-700 rounded"
        >
          Create Employee
        </Link>
        <button className="text-white px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 rounded">
          LogOut
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
