import {auth} from "../../firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import "../../Components/load.css";
import { Helmet } from 'react-helmet';
import logdoc from '../../Components/img/doc2.jpg'

function DoctorLogin()
{
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/doctors-portal");
        })
        .catch((error) => {
            setLoading(false);
            setError(true);
        });
    };

    return(
        <div className="bg-gray-900" >
            <Helmet>
                <title>Login | Doctor</title>
            </Helmet>
            {loading && 
            <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
                <span class="loader">Loading</span>
            </div>
            }


            <div class='flex justify-center lg:divide-x-2 lg:divide-gray-500 lg:divide-dashed '>
                <img class='w-1/2 hidden lg:block rounded-lg max-w-screen-2xl m-10' src={logdoc} alt='log doc img'></img>
                <div class='mr-10 my-10'>
                <div className="bg-tram p-8 mx-10 w-[400px] ml-20 rounded-md rounded-b-none">
                    <h1 className="text-4xl text-white">Doctor's Login</h1>
                </div>
                    <form onSubmit={handleLogin} className="bg-white border-0 rounded-t-none rounded-md mx-10 ml-20 p-5 md:p-10 lg:py-20">
                        <div className="mb-6">
                            <div>
                            <label className="text-gray-500 font-bold" for="email-id">
                                Email Id :
                            </label>
                            </div>
                            <div>
                            <input onChange={e=>setEmail(e.target.value)} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="email" placeholder="Email Id" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div class="flex justify-between">
                            <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">
                                Password :
                            </label>
                            <a href='/reset' class="text-tram text-sm">Forgot Password?</a>
                            </div>

                            <div>
                            <input onChange={e=>setPassword(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" id="password" type="password" placeholder="Password" />
                            <div className="text-end p-2 px-4">
                                
                                
                            </div>
                            </div>
                        </div>
                        <div className="sm:flex-col md:flex text-center gap-3 m-0 sm:m-2 justify-center items-center">
                            <div className="flex justify-center">
                                <button className="shadow py-2 px-6 bg-tram hover:bg-white hover:text-tram focus:shadow-outline focus:outline-none text-white font-bold rounded" type="submit">
                                    Log In
                                </button>
                                
                            </div>
                            {error && <span className="m-2 sm:m-2 text-red-500 font-black underline">Incorrect Mail Id/Password</span>}
                            <div className="my-auto ">
                                <p class="text-center">Don't have an Account: <a className="text-tram" href="Doctorsignup">Register</a></p>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}
export default DoctorLogin;