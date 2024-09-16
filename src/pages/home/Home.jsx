import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";

const Home = () => {
  return (
    <div className=" min-h-screen to-gray-800 w-full h-screen bg-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/floral-ornaments_23-2148134091.jpg?t=st=1726503831~exp=1726507431~hmac=d4f5955c68a6079dc6fa50ed5bae928e9a2f7589aec0f9d931a4037d9addee01&w=1060')]  max-[700px]:bg-none bg-gray-100 max-[700px]:p-0">
      <Navbar />
      <div className="flex flex-col  mt-16 w-2/5 ml-5 max-[1020px]:w-3/5 max-[920px]:w-4/5 max-[700px]:w-full max-[700px]:m-0 max-[700px]:p-0 ">
        <main className="flex-1 p-8 md:pr-0 max-[700px]:flex-col max-[700px]:justify-center max-[700px]:text-center max-[700px]:mt-24 max-[700px]:p-0">
          <h1 className="text-4xl font-bold text-black max-[600px]:text-3xl max-[420px]:text-2xl">
            Welcome to the Admin Panel
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Here you can <span className="text-blue-600">Manage</span> all
            Employee Details.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            You Can <span className="text-blue-600">Create</span> new Employee
            Database.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            You Can <span className="text-blue-600">View</span> your Employee
            List.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            You Can <span className="text-blue-600">Update</span> your Employee
            Data.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            You Can <span className="text-blue-600">Delete</span> your Employee
            Data.
          </p>
        </main>

        <div className="flex flex-row justify-start max-[700px]:justify-around max-[700px]:mt-10">
          <Link to={"/signup"}>
            <button className="h-14 w-36 ml-8 font-bold text-gray-600 rounded-md text-2xl border border-blue-400 mx-1 hover:bg-blue-500 hover:text-white max-[700px]:m-0">
              SignUp
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="h-14 w-36 ml-8 font-bold text-gray-600 rounded-md text-2xl border border-blue-400 mx-1 hover:bg-blue-500 hover:text-white max-[700px]:m-0">
              Login
            </button>
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-70 text-white text-center">
        <p>&copy; 2024 MyAdminPanel. All rights reserved.</p>
        <p>
          Contact:{" "}
          <a href="mailto:mauryaprashant1510@gmail.com" className="underline">
            mauryprashant1510@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
