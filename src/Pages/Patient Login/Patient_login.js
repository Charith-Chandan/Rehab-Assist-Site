import {query,collection,where,onSnapshot} from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import { Helmet } from 'react-helmet';


function Patientlogin()
{
    const [patientID, setPatientID] = useState("");
    const [error, setError] = useState(false);
    const [found, setFound] = useState(false);
    const [patient, setPatient] = useState([]);
    const [loading,setLoading] = useState(false);
    var flag = 0;
   
    const handlePatientLogin = async (e) =>
    {
        setLoading(true);
        e.preventDefault();
        const q = query(collection(db, "Patients"), where("PatientID", "==", patientID));
        const unsub = await onSnapshot(q, (snapshot) =>
        {
            let list = [];
            snapshot.docs.forEach((doc) =>
            {
            flag=1;
            list.push({...doc.data()});          
            });
            
            setPatient(list);
            if(flag===0)
            {
                setError(true);
                setFound(false);
            }
            else
            {
                setError(false);
                setFound(true);
            }
            setLoading(false);
            return() =>
            {
                unsub();
            };

            
        },);    
    }
    


    return(
        <div className="bg-gray-900 py-2">
            <Helmet>
                <title>Login | Patient</title>
            </Helmet>
            {loading && 
            <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
                <span class="loader">Loading</span>
            </div>
            }
            <div className="bg-tram rounded-b-none max-w-4xl mx-10 sm:mx-10 lg:mx-auto rounded-md text-left p-3 mt-10">
                <h1 className="text-4xl text-white">Patient Login</h1>
            </div>

            <div className="bg-white rounded-md max-w-4xl rounded-t-none mx-10 sm:mx-10 lg:mx-auto p-4 md:p-4 lg:p-10">
            <form onSubmit={handlePatientLogin}>
                <div>
                    <div>
                        <div class="gap-2 flex justify-evenly items-center">
                            <label class="w-1/4 text-center">Patient Id : </label>
                            <input required onChange={e=>setPatientID(e.target.value)} className="bg-gray-200 border-2 border-gray-200 rounded w-2/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="text" placeholder="Patient Registration Id"></input>
                            <button className="shadow w-1/4 bg-tram hover:bg-white hover:text-tram focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded" type="submit">
                                Log In
                            </button>
                        </div>
                        <div className="flex justify-center">
                            {error && <span className="text-center mt-5 text-red-500 font-black underline">Id Not Found</span> }
                            {found && <span className="text-center mt-5 text-green-500 font-black underline">Found</span> }
                        </div>
                    </div>
                </div> 
            </form>
            </div>

            <div class="m-5 md:m-10 mx-10 sm:mx-10 lg:mx-auto bg-black rounded-md max-w-6xl border-white border-2">
                <div class="p-4 lg:px-16 lg:py-10 flex justify-between">
                    <div>
                        <div class="border-2 text-white text-3xl flex items-center justify-center bg-yellow-400 border-white rounded-full w-20 h-20 lg:w-40 lg:h-40">
                            {patient && patient.map((user) => {
                                return (
                                <div>
                                    <h1>{user.TargetStepCount}</h1>
                                </div>
                                );
                            })}
                        </div>
                        <h1 class="mt-3 text-white text-xl text-center lg:text-3xl">Target</h1>
                    </div>
                    
                    <div class="my-auto">
                        {patient && patient.map((user) => {
                            return (
                            <div class="text-white text-sm lg:text-2xl">
                                <h1>PatientID: {user.PatientID}</h1>
                                <h1>Name: {user.Name}</h1>
                                <h1>Age: {user.Age} </h1>
                                <h1>BodyWeight: {user.BodyWeight} </h1>
                            </div>
                            );
                        })}
                    </div>

                    <div>
                        <div class="border-2 text-white text-3xl flex items-center justify-center bg-green-500 border-white rounded-full w-20 h-20 lg:w-40 lg:h-40">
                            {patient && patient.map((user) => {
                                return (
                                <div>
                                    <h1>{user.ProgressCount}</h1>
                                </div>
                                );
                            })}
                        </div>
                        <h1 class="mt-3 text-white text-xl text-center lg:text-3xl">Progress</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Patientlogin;