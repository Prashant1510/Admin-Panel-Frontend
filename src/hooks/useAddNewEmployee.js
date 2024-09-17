
import toast from "react-hot-toast";

const UseAddNewEmployee = () =>{
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const AddEmployeeData = async ({ profilePic, name, gender, phoneNumber, designation, course, email}) =>{
        const success = handleEmployeeDataInputError({ profilePic, name, gender, phoneNumber, designation, course, email })
        if(success) return;
        try {
            const res = await fetch(`${BASE_URL}/api/employeeauth/employeeCreate`,{
                method : "POST",
                headers:{"content-Type":"application/json"},
                body: JSON.stringify({ profilePic, name, gender, phoneNumber, designation, course, email }),
                credentials: 'include'
            });
            const data = await res.json();
            
            if(data.error){
                throw new Error(data.error)
            }
            if(data){
                toast.success("Job data saved successfully");
                window.location.reload();
            }
        } catch (error) {
			toast.error(error.message);
        }
    }


    const DeleteEmployeeData = async(id) =>{

        try {
            const res = await fetch(`${BASE_URL}/api/employeeauth/employeeDelete/${id}`,{
                method: "DELETE",
                headers:{
                    "content-Type":"application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            
            if(data.error){
                throw new Error(data.error)
            }
            if(res.ok){
                toast.success("Data deleted successfully")
                window.location.reload();


            }
        } catch (error) {
			toast.error(error.message);
        }
    }


    return {AddEmployeeData, DeleteEmployeeData}
}
export default UseAddNewEmployee;


function handleEmployeeDataInputError({ profilePic, name, gender, phoneNumber, designation, course, email }){
    if( !profilePic || !name || !gender || !phoneNumber || !designation || !course || !email ){
        toast.error("Please fill in all fields");
        return true
    }
}