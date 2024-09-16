import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import UseAddNewEmployee from "../../hooks/useAddNewEmployee";

const AddNewEmployee = () => {
  // const BASE_URL = import.meta.env.VITE_BASE_URL;

  // const [Employee, setEmployee] = useState([]);

  // useEffect(() => {
  //   const fetchAllEmployes = async () => {
  //     try {
  //       const res = await fetch(
  //         `${BASE_URL}/api/employeeauth/fetchallemploye`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //         }
  //       );
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch Employee Data");
  //       }
  //       const data = await res.json();
  //       setEmployee(data);
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   };
  //   fetchAllEmployes();
  // }, [BASE_URL]);

  //-----------------------------------------------------------------------------------------------------------------------------------------------

  const [inputs, setInputs] = useState({
    profilePic: "",
    name: "",
    gender: "",
    phoneNumber: "",
    designation: "",
    course: "",
    email: "",
  });
  
  const { AddEmployeeData } = UseAddNewEmployee();
  const handleCreateEmployeeSubmit = async (e) => {
    e.preventDefault();

    await AddEmployeeData(inputs);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-200 h-auto">
        <Navbar/>

        <div className="w-2/5 p-6 rounded-lg shadow-md bg-white m-10  max-[1300px]:w-2/4 max-[900px]:w-2/3 max-[700px]:w-full ">
          <h1 className="text-3xl font-semibold text-center text-gray-500 pb-2">
            Add New{" "}
            <Link to={"#"}>
              <span className="text-mygreen"> Employee</span>
            </Link>
          </h1>
          <hr className="p-2" />
          <form onSubmit={handleCreateEmployeeSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">Profile Picture:</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.profilePic}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    profilePic: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="label  ">
                <span className="text-base label-text">Name:</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </div>

            <div>
              <select
                name=""
                id=""
                className="w-full py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full"
                onChange={(e) =>
                  setInputs({ ...inputs, gender: e.target.value })
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

            <div>
              <label className="label  ">
                <span className="text-base label-text">Phone No.:</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.phoneNumber}
                onChange={(e) =>
                  setInputs({ ...inputs, phoneNumber: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label  ">
                <span className="text-base label-text">Email:</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>

            <div>
              <select
                name=""
                id=""
                className="w-full py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full"
                onChange={(e) =>
                  setInputs({ ...inputs, designation: e.target.value })
                }
              >
                <option value="" disabled hidden selected className="">
                  Designation:*
                </option>
                <option value="HR" className="text-lg ">
                  HR{" "}
                </option>
                <option value="Manager" className="text-lg ">
                  Manager{" "}
                </option>
                <option value="Sales" className="text-lg ">
                  Sales{" "}
                </option>
              </select>
            </div>

            <div>
              <select
                name=""
                id=""
                className="w-full py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full"
                onChange={(e) =>
                  setInputs({ ...inputs, course: e.target.value })
                }
              >
                <option value="" disabled hidden selected className="">
                  Course*
                </option>
                <option value="B.Tech" className="text-lg ">
                  B.Tech{" "}
                </option>
                <option value="BCA" className="text-lg ">
                  BCA{" "}
                </option>
                <option value="BSC" className="text-lg ">
                  BSC{" "}
                </option>
                <option value="M.Tech" className="text-lg ">
                  M.Tech{" "}
                </option>
                <option value="MSC" className="text-lg ">
                  MSC{" "}
                </option>
              </select>
            </div>

            <div>
              <button className="h-9 w-full border border-gray-400 font-bold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-blue-500 hover:text-white ">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* <div className="w-full">
          {Jobs.map((job) => (
            <CompanyJobCard key={job._id} job={job} />
          ))}
        </div> */}
      </div>
    </>
  );
};
export default AddNewEmployee;
