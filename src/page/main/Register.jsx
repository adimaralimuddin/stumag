import useAuth from "../../logic/auth";


export default function Register() {
    const { loginWithGoogle } = useAuth();
    return (
        <div className='Register'>
            <h1>Register</h1>
            <button onClick={loginWithGoogle}>login with google</button>
        </div>
    )
}