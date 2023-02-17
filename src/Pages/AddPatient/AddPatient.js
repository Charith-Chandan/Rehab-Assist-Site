import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";
import {doc,setDoc} from "firebase/firestore";
import {  useNavigate } from "react-router";
import moment from 'moment/moment';
import { Helmet } from 'react-helmet';
import "../../Components/load.css";
import Swal from 'sweetalert2';


function AddPatient() {
    const auth = getAuth();
    const [Uid,setUid] = useState('');
    const [regid, setRegid] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bodyWeight, setBodyWeight] = useState("");
    const [targetSteps, setTargetSteps] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {setUid(user.uid);}  
            else navigate('./doctorlogin');
            });
            setLoading(false);
    },[]);

     

    const AddPatient = async (e) =>{
        setLoading(true);
        e.preventDefault();
        await setDoc(doc(db , "Patients", regid),
        {
            Name: name,
            Age: age,
            BodyWeight: bodyWeight,
            TargetStepCount: parseInt(targetSteps),
            DoctorID: Uid,
            PatientID: regid,
            AddOn: moment().format('DD-MM-yyyy'),
            ProgressCount: 0,
        });
        setLoading(false);
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
          Toast.fire({
            icon: 'success',
            title: 'Patient Added Successfully'
          })
        navigate("/doctors-portal");
    };

    return (
        
        <div className="bg-gray-900 py-2 px-10" >
            <Helmet>
                <title>Add Patient</title>
            </Helmet>
            {loading && 
            <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
                <span class="loader">Loading</span>
            </div>
            }
            <div className="bg-tram rounded-md rounded-b-none text-left max-w-4xl p-5 mx-auto mt-10">
                <h1 className=" text-white text-4xl">Add Patient</h1>
            </div>

            <div className="mb-20 bg-white rounded-md max-w-4xl rounded-t-none mx-auto p-6 md:p-10 lg:px-44 lg:py-20">
                <form onSubmit={AddPatient} className=" grid grid-flow-row auto-rows-max hover:auto-rows-min">
                    
                    <div className=" mb-6">
                        <div>
                        <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="patient-name">
                            Patient Registration Id :
                        </label>
                        </div>
                        <div>
                        <input required onChange={e=>setRegid(e.target.value)} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="text" placeholder="Registration Id" />
                        </div>
                    </div>


                    <div className=" mb-6">
                        <div>
                        <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="patient-name">
                            Patient Name :
                        </label>
                        </div>
                        <div>
                        <input required onChange={e=>setName(e.target.value)} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="text" placeholder="Name" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div>
                        <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="age">
                            Age :
                        </label>
                        </div>
                        <div>
                        <input required onChange={e=>setAge(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" id="password" type="number" placeholder="Age" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div>
                        <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="weight">
                            Body Weight :
                        </label>
                        </div>
                        <div>
                        <input required onChange={e=>setBodyWeight(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" id="password" type="number" placeholder="Weight" />
                        </div>
                    </div>

                    {/* <div>
                        <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Target Step Count Time Period:
                        </label>
                    </div>
                        
                    <div className="mb-6 flex flex-col md:flex-row space-y-3 justify-evenly">
                        <div class="mt-3">
                            <label className="text-gray-500 font-bold md:text-right md:mb-0">
                                From :
                            </label>
                            
                            <input required onChange={e=>setFrom(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="date" min="11-01-2023" max="22-01-2023"/>
                        </div>

                        <div>
                            <label className="text-gray-500 font-bold md:text-right md:mb-0">
                                To :
                            </label>
                            <input required onChange={e=>setTo(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="date"  />
                        </div>
                    </div> */}

                    <div className="mb-6">
                        <div>
                        <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Target Step Count :
                        </label>
                        </div>
                        <div>
                        <input required onChange={e=>setTargetSteps(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="number" placeholder="Target Step Count" />
                        </div>
                    </div>

                    <div className="flex gap-3 place-content-center place-items-center">
                        <div className="">
                            <button className="shadow bg-tram hover:bg-white hover:text-tram focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Add Patient
                            </button>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default AddPatient;
