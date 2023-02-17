import {auth} from "../../firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import {collection,doc,setDoc,} from "firebase/firestore";
import { useNavigate } from "react-router";
import "../../Components/load.css";
import { Helmet } from 'react-helmet';
import sigdoc from '../../Components/img/docsignup.jpg';
import Swal from 'sweetalert2';


function Doctorsignup()
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const register = async (e) =>
    {
        setLoading(true);
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            const docref = collection(db,"Doctors");
            await setDoc(doc(docref,user.uid),
            {
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Uid: user.uid,
                CreatedAt: new Date()
            });
            setLoading(false);
            navigate("/doctors-portal");
            Toast.fire({
                icon: 'success',
                title: 'Account Created'
              })
          } catch (err) {
            setLoading(false);
            Toast.fire({
                icon: 'error',
                title: err.message
              })
          }
    }; 
    

    return(
        
        <div className="bg-gray-900" >
            <Helmet>
                <title>SignUp</title>
            </Helmet>
            {loading && 
            <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
                <span class="loader">Loading</span>
            </div>
            }

            <div class='flex justify-center lg:divide-x-2 lg:divide-gray-500 lg:divide-dashed '>
                <img class='w-1/2 hidden lg:block rounded-lg max-w-screen-2xl m-10' src={sigdoc} alt='log doc img'></img>
                <div class='mr-10 my-10'>
                    <div className="bg-tram p-8 mx-10 ml-20 w-[400px] rounded-md rounded-b-none">
                        <h1 className=" text-4xl text-white">Doctor's Register</h1>
                    </div>
            <form onSubmit={register} className="bg-white border-0 rounded-t-none rounded-md mx-10 ml-20 p-5 md:p-10 lg:py-10">
                    
                    <div className="mb-6">
                        <div>
                        <label className="text-gray-500 font-bold" for="email-id">
                            First Name :
                        </label>
                        </div>
                        <div>
                        <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram"
                            name="firstName"
                            type="text"
                            value={firstName}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                        />
                        </div>
                    </div>

                    <div className=" mb-6">
                        <div>
                        <label className="text-gray-500 font-bold" for="email-id">
                            First Name :
                        </label>
                        </div>
                        <div>
                        <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram"
                            name="lastName"
                            type="text"
                            value={lastName}
                            required
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                        />
                        </div>
                    </div>
                    
                    <div className=" mb-6">
                        <div>
                        <label className="text-gray-500 font-bold" for="email-id">
                            Email Id :
                        </label>
                        </div>
                        <div>
                        <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram"
                            name="email"
                            type="text"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <div>
                        <label className=" text-gray-500 font-bold" for="password">
                            Password :
                        </label>
                        </div>
                        <div>
                        <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram"
                        name="password"
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        />
                        </div>
                    </div>
                    
                    <div className="flex gap-3 place-content-center place-items-center">
                        <div className="mt-8">
                            <button className="shadow bg-tram hover:bg-white hover:text-tram focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <h1 class="text-center mt-2">Have an Account:<a class='text-tram' href='/doctorlogin'> Login</a></h1>
                    
                </form>
                </div>
            </div>
        </div>
    );
}
export default Doctorsignup;