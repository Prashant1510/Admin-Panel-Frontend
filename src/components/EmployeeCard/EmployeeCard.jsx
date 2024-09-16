
import PropTypes from "prop-types";
import UseAddNewEmployee from "../../hooks/useAddNewEmployee"; // Custom hook for deleting employee
import { Link } from "react-router-dom";

const EmployeeCard = (props) => {
  const { DeleteEmployeeData } = UseAddNewEmployee();

  const {
    id,
    profilePic,
    name,
    gender,
    phoneNumber,
    designation,
    course,
    email,
  } = props.employee;

  return (
    <div className="flex flex-row justify-between m-5 border border-gray-400 rounded-lg max-[700px]:block">
      {/* Profile Info Section */}
      <div className="flex flex-col m-3 justify-between w-[400px] max-[700px]:w-auto">
        <img
          src={profilePic}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <h1 className="text-mygreen font-bold">{name}</h1>
        <p className="text-gray-700">Gender: {gender}</p>
        <p className="text-gray-700">Phone: {phoneNumber}</p>
        <p className="text-gray-700">Designation: {designation}</p>
        <p className="text-gray-700">Course: {course}</p>
        <p className="text-gray-700">Email: {email}</p>

      </div>

    
      <div className="flex flex-col justify-between m-3 w-[500px] max-[700px]:w-auto">
        <Link href="/addNewEmployee">
          <button
            onClick={() => {
              DeleteEmployeeData(id);
            }}
            className="h-9 pb-1 w-full border border-gray-400 font-semibold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-red-500 hover:text-white"
          >
            Delete Employee
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profilePic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
