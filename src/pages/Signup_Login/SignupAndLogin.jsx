import { Link } from "react-router-dom";
import { useState } from "react";
import UseSignUp from "../../hooks/useSignupAndLogin.js";
import Navbar from "../../components/Navbar/Navbar.jsx";

const SignUp = () => {
  const [signupInputs, setsignupInputs] = useState({
    profilePic: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [loginInputs, setloginInputs] = useState({
    email: "",
    password: "",
  });

  const [userType, setUserType] = useState("login");

  const { SignupUser, LoginUser } = UseSignUp();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await SignupUser(signupInputs);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await LoginUser(loginInputs);
    console.log("login");
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        
        <div className="flex-1 flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1519219788971-8d9797e0928e?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="w-2/5 p-6 rounded-lg shadow-md bg-gray-50 max-[1300px]:w-2/4 max-[900px]:w-2/3 max-[700px]:w-full m-10">
            <h1 className="text-3xl font-semibold text-center text-gray-500">
              SignUp / LogIn{" "}
              <Link to={"/"}>
                <span className="text-blue-400">Admin Panel</span>
              </Link>
            </h1>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setUserType("login")}
                className="h-14 w-36 font-bold text-gray-500 rounded-md text-2xl border border-gray-400 mx-1 my-3 hover:bg-blue-500 hover:text-white"
              >
                Login
              </button>
              <button
                onClick={() => setUserType("signup")}
                className="h-14 w-36 font-bold text-gray-500 rounded-md text-2xl border border-gray-400 mx-1 my-3 hover:bg-blue-500 hover:text-white"
              >
                SignUp
              </button>
            </div>

            <hr className="p-2" />

            {userType === "signup" && (
              <form onSubmit={handleSignupSubmit}>
                {/* Form fields for signup */}
                <div>
                  <label className="label">
                    <span className="text-base label-text">
                      Profile Picture URL:
                    </span>
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Paste URL"
                    className="w-full input input-bordered h-10 border rounded-lg my-1"
                    value={signupInputs.profilePic}
                    onChange={(e) =>
                      setsignupInputs({ ...signupInputs, profilePic: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="text-base label-text">Full Name:</span>
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter user name"
                    className="w-full input input-bordered h-10 border rounded-lg my-1"
                    value={signupInputs.name}
                    onChange={(e) =>
                      setsignupInputs({ ...signupInputs, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="text-base label-text">Email Id:</span>
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="example123@gmail.com"
                    className="w-full input input-bordered h-10 border rounded-lg my-1"
                    value={signupInputs.email}
                    onChange={(e) =>
                      setsignupInputs({ ...signupInputs, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="text-base label-text">Password:</span>
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full input input-bordered h-10 border rounded-lg my-1"
                    value={signupInputs.password}
                    onChange={(e) =>
                      setsignupInputs({ ...signupInputs, password: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="text-base label-text">
                      Confirm Password:
                    </span>
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter confirm password"
                    className="w-full input input-bordered h-10 border rounded-lg my-1"
                    value={signupInputs.confirmPassword}
                    onChange={(e) =>
                      setsignupInputs({
                        ...signupInputs,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
              <select
                name=""
                id=""
                className="w-full py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full"
                onChange={(e) =>
                  setsignupInputs({ ...signupInputs, gender: e.target.value })
                }
              >
                <option value="" disabled hidden selected className="">
                  Gender:*
                </option>
                <option value="Male" className="text-lg ">
                  Male
                </option>
                <option value="Female " className="text-lg ">
                  Female{" "}
                </option>
              </select>
            </div>

                <p className="text-sm text-orange-500">
                  <span className="text-sm text-blue-500">Note: </span>Please
                  remember your credentials
                </p>

                <div>
                  <button className="h-9 w-full border border-gray-400 font-bold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-blue-500 hover:text-white">
                    SignUp
                  </button>
                </div>
              </form>
            )}

            {userType === "login" && (
              <form onSubmit={handleLoginSubmit}>
                {/* Form fields for login */}
                <div>
                  <label className="label">
                    <span className="text-base label-text">Email Id:</span>
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="example123@gmail.com"
                    className="w-full input input-bordered h-10 border rounded-lg my-1"
                    value={loginInputs.email}
                    onChange={(e) =>
                      setloginInputs({
                        ...loginInputs,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="text-base label-text">Password:</span>
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full input input-bordered h-10 border rounded-lg my-1"
                    value={loginInputs.password}
                    onChange={(e) =>
                      setloginInputs({
                        ...loginInputs,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="h-9 w-full border border-gray-400 font-bold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-blue-500 hover:text-white"
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
