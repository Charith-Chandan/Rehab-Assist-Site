import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";
import "../../Components/load.css";
import { Helmet } from 'react-helmet';
import sent from '../../Components/img/mailsent.svg'
import forgot from '../../Components/img/forgot.jpg'

function ForgotPassword()
{
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [loading,setLoading] = useState(false);
    const [start,setStart] = useState(true);
    const [done,setDone] = useState(false);

    const navigate = useNavigate();
    function signin()
    {
        navigate('/Doctorlogin');
    }
    const handleLogin = (e) =>{
        e.preventDefault();
        setLoading(true);
        var auth = getAuth();
        sendPasswordResetEmail(auth,email)
        .then(() => 
        {
            setDone(true);
            setStart(false);
            setLoading(false);
            setError(false);
        })
        .catch((error) => {
            setLoading(false);
            setError(true);
        });
    };

    return(
        <div class='bg-gray-900 py-10'>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            {loading && 
            <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
                <span class="loader">Loading</span>
            </div>
            }
            {done &&
                <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <img class="w-1/5 h-1/3" src={sent} alt="mail sent"/>
                    <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-300">We've Sent Password reset Instructions to: {email}</p>
                    <button onClick={signin} class="text-tram">Back to SignIn</button>
                </div>
            </section>
            }
            {start &&
            <div class='flex justify-center lg:divide-x-2 lg:divide-gray-500 lg:divide-dashed '>
            <img class='w-1/2 hidden lg:block rounded-lg max-w-screen-2xl m-10' src={forgot} alt='log doc img'></img>
            <div class='my-auto'>
            <div className="bg-tram p-8 mx-10 w-[400px] rounded-md rounded-b-none">
                <h1 className="text-4xl text-white">Reset Password</h1>
            </div>
                    <form onSubmit={handleLogin} className="bg-white border-0 rounded-t-none rounded-md mx-10 p-5 md:p-10 lg:py-20">
                        <div className="mb-6">
                            <div>
                            <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email-id">
                                Email Id :
                            </label>
                            </div>
                            <div>
                            <input onChange={e=>setEmail(e.target.value)} required className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="email" placeholder="Email Id" />
                            </div>
                        </div>
                        <div className="sm:flex-col md:flex text-center gap-3 m-0 sm:m-2 justify-center items-center">
                            <div className="flex justify-center">
                                <button className="shadow py-2 px-6 bg-tram hover:bg-white hover:text-tram focus:shadow-outline focus:outline-none text-white font-bold rounded" type="submit">
                                    Reset
                                </button>
                            </div>
                            {error && <span className="m-2 sm:m-2 text-red-500 text-sm underline">Email Not Found. Create an Account:<a class='text-tram' href='/Doctorsignup'> Signup</a></span>}
                        </div>
                    </form>
                    
                </div>
            </div>}
        </div>
    );
}
export default ForgotPassword;