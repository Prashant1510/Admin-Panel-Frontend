import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UseSignUp = () =>{
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const SignupUser = async ({profilePic, name,  email, password, confirmPassword, gender }) =>{
        const success = handleUserInputError({ profilePic, name,  email, password, confirmPassword, gender })
        if(success) return;
        try {
            const res = await fetch(`${BASE_URL}/api/adminauth/adminSignup`,{
                method : "POST",
                headers:{"content-Type":"application/json"},
                body: JSON.stringify({ profilePic, name,  email, password, confirmPassword, gender }),
                credentials: 'include'
            });
            const data = await res.json();
            if(data){
                toast.success("SingUp Successfully");
                navigate("/");
            }
			localStorage.setItem("userData", JSON.stringify(data));

            if(data.error){
                throw new Error(data.error)
            }
        } catch (error) {
			toast.error(error.message);
        }
    }
    

    // ----------------------------Login  --------------------------

    const LoginUser = async ({  email, password }) =>{

        const success = handleLoginInputError({ email, password });
        if(success) return;
        
        try {
            const res = await fetch(`${BASE_URL}/api/adminauth/adminLogin`,{
                method : "POST",
                headers:{"content-Type":"application/json"},
                body: JSON.stringify({  email, password }),
                credentials: 'include'
            });
            const data = await res.json();
            
            if(data.error){
                throw new Error(data.error)
            }
            if(data){
                toast.success("Login Successfully");
            }
            if(res.ok){
                navigate("/")
            }
			localStorage.setItem("userData", JSON.stringify(data));

        } catch (error) {
			toast.error(error.message);
        }
    }
    return {SignupUser, LoginUser}
}
export default UseSignUp;

function handleUserInputError({ profilePic, name,  email, password, confirmPassword, gender  }){
    if( !profilePic || !name || !email || !password || !confirmPassword || !gender ){
        toast.error("Please fill in all fields");
        return true
    }
    if(password !== confirmPassword){
        toast.error("Password do not matched")
        return true
    }
    if(password.length < 6){
        toast.error("Password must be atleast 6 characters")
        return true
    }
}

function handleLoginInputError({ email, password }){
    if(  !email || !password ){
        toast.error("Please fill in all fields");
        return true
    }
    if(password.length < 6){
        toast.error("Password must be atleast 6 characters")
        return true
    }
}