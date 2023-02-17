import React,{ useState,useEffect }  from 'react';
import {query,collection,where,getDocs,doc, updateDoc} from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

function EditPatient({isVisible, onClose}) {
    const auth = getAuth();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bodyWeight, setBodyWeight] = useState("");
    const [targetSteps, setTargetSteps] = useState("");
    const [patientID, setPatientID] = useState("");
    const [found, setFound] = useState(false);
    const [error, setError] = useState(false);
    const [loading,setLoading] = useState(false);
    const [Uid,setUid] = useState('');
    var flag=0;

    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {setUid(user.uid);}  
            else {}
            });
            setLoading(false);
    },[ ]);
    
    const Edit = async (e) =>{
        setLoading(true);
        e.preventDefault();
        const patientref = doc(db , "Patients", patientID);

        const data =
        {
            Name: name,
            Age: age,
            BodyWeight: bodyWeight,
            TargetStepCount: parseInt(targetSteps),
            DoctorID: Uid,
            PatientID: patientID,
        }
        
        updateDoc(patientref, data)
        .then(patientref => {
            setFound(false);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    };

    const handleSearch = async (e) =>
    {
        e.preventDefault();
        const q = query(collection(db, "Patients"), where("PatientID", "==", patientID),where("DoctorID","==",Uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach(item=>{
            setPatientID(item.data().PatientID);
            setName(item.data().Name);
            setAge(item.data().Age);
            setBodyWeight(item.data().BodyWeight);
            setTargetSteps(item.data().TargetStepCount);
            flag=1;
        },
        );
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
        
    }
  
  if(!isVisible) return null;
  return (
    <div class=" z-30 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <Helmet>
                <title>Edit Patient</title>
            </Helmet>
        {loading && 
            <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
                <span class="loader">Loading</span>
            </div>
            }
            <div class="w-[600px] flex flex-col">
                <button onClick={() => onClose()} class="rounded-sm text-white m-1 bg-red-500 text-xl place-self-end px-2">X</button>
                <div class="bg-white p-3 rounded-md ">
                    <h1 class='bg-tram p-2 text-white text-xl rounded rounded-b-none'>Edit Patient</h1>
                    <div class='pt-10 border-2 text-center border-tram rounded rounded-t-none flex-col overflow-y-scroll'>
                        <form class='m-1 flex'>
                            <lable>Enter Patient Registration ID: </lable>
                            <input onChange={e=>setPatientID(e.target.value)} required className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="text" placeholder="Patient Id"></input>
                        </form>
                        <button onClick={handleSearch} class='w-20 p-2 m-4 mt-10 block rounded-md text-white bg-blue-700 mx-auto'>Search</button>
                        {error && <span className="mx-auto text-center mt-5 text-red-500 font-black underline">Id Not Found</span> }
                        {found && <div class="p-4">
                        {/* {patient && patient.map((user) => {
                        return (  */}
                         
                            <form onSubmit={Edit} className="text-left ">
                            
                                <div className=" mb-6">
                                    <div>
                                    <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="patient-name">
                                        Patient Registration Id :
                                    </label>
                                    </div>
                                    <div>
                                    <input defaultValue={patientID} disabled required onChange={e=>setPatientID(e.target.value)} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="text" placeholder="Registration Id" />
                                    </div>
                                </div>


                                <div className=" mb-6">
                                    <div>
                                    <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="patient-name">
                                        Patient Name :
                                    </label>
                                    </div>
                                    <div>
                                    <input defaultValue={name} required onChange={e=>setName(e.target.value)} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="text"  />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div>
                                    <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="age">
                                        Age :
                                    </label>
                                    </div>
                                    <div>
                                    <input defaultValue={age} required onChange={e=>setAge(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" id="password" type="number"  />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div>
                                    <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="weight">
                                        Body Weight :
                                    </label>
                                    </div>
                                    <div>
                                    <input defaultValue={bodyWeight} required onChange={e=>setBodyWeight(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" id="password" type="number"  />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div>
                                    <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="target-steps">
                                        Target Step Count :
                                    </label>
                                    </div>
                                    <div>
                                    <input defaultValue={targetSteps} required  onChange={e=>setTargetSteps(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" id="password" type="number"  />
                                    </div>
                                </div>

                                <div className="flex gap-3 place-content-center place-items-center">
                                    <div >
                                        <button className="shadow bg-tram hover:bg-white hover:text-tram focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                            Edit Patient
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* );
                        })} */}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EditPatient;
