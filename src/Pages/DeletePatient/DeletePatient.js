import React,{ useState,useEffect } from 'react';
import { db } from "../../firebase";
import { doc, deleteDoc,where,query,collection,getDocs} from "firebase/firestore";
import "../../Components/load.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

function DeletePatient({isVisible, onClose}) 
{
    const auth = getAuth();
    var flag = 0;
    const [patientID, setPatientID] = useState("");
    const [loading,setLoading] = useState(false);
    const [Uid,setUid] = useState('');
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {setUid(user.uid);}  
            else {}
            });
            setLoading(false);
    },[ ]);
    const Delete = async (e) =>
    {
        setLoading(true);
        e.preventDefault();
        const delref = doc(db, "Patients", patientID);
        const q = query(collection(db, "Patients"), where("PatientID", "==", patientID),where("DoctorID","==",Uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach(item=>{
            deleteDoc(delref);
            setLoading(false);
            ++flag;
        },
        );
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
          });
        if(flag===1)
        {
            setLoading(false);
              Toast.fire({
                icon: 'success',
                title: 'Patient Deleted Successfully'
              })
        }
        else
        {
            setLoading(false);
            Toast.fire({
                icon: 'error',
                title: 'Patient Not Found'
              })
        }
        
    }

    if(!isVisible) return null;
    return (
        <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <Helmet>
                <title>Delete Patient</title>
            </Helmet>
            {loading && 
            <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
                <span class="loader">Loading</span>
            </div>
                }
            <div class="w-[600px] flex flex-col">
                <button onClick={() => onClose()} class="rounded-sm text-white m-1 bg-red-500 text-xl place-self-end px-2">X</button>
                <div class="bg-white p-3 rounded-md">
                    <h1 class='bg-tram p-2 text-white text-xl rounded rounded-b-none'>Delete Patient</h1>
                    <div class='pt-16 border-2 border-tram rounded rounded-t-none'>
                        <form class='m-4 flex'>
                            <lable>Enter Patient Registration ID: </lable>
                            <input onChange={e=>setPatientID(e.target.value)} required className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tram" type="text" placeholder="Patient Id"></input>
                        </form>
                        <button onClick={Delete} class='w-20 p-2 m-4 mt-16 block rounded-md text-white bg-red-500 mx-auto'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePatient;
