import { getAuth, onAuthStateChanged } from "firebase/auth";
import  React,  { useState ,useEffect, Fragment } from "react";
import {query,collection,where,getDocs} from "firebase/firestore";
import { db } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { onSnapshot } from "firebase/firestore";
import EditPatient from "../EditPatient/EditPatient";
import DeletePatient from "../DeletePatient/DeletePatient";
import img from "../../Components/img/doctor.png";
import edit from "../../Components/img/edit.png";
import del from "../../Components/img/del.png";
import add from "../../Components/img/add.png";
import "../../Components/load.css";
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const DoctorsPortal = (e) => {

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const auth = getAuth();
    const [doctor,setDoctor]=useState([]);
    const [patients, setPatients] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

  
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if(user)
            {
                fetchDoctor(user.uid);
                show(user.uid);
            } 
            else {
                navigate('/doctorlogin');
            }
            });
    }, []);


    function show(uid) {
      const q = query(collection(db, "Patients"), where("DoctorID", "==", uid));
      const unsub = onSnapshot(q, (snapshot) =>
      {
        let list = [];
        snapshot.docs.forEach((doc) =>
        {
          
          list.push({...doc.data()});          
        });
        
        setPatients(list);
        setLoading(false);
      },
      (error) => 
      {
        setLoading(false);
        console.log(error);
      });
      return() =>
      {
        unsub();
      };
    }

    const AddPatient= async (e) =>
    {
        navigate("/addPatient");
    }

    const fetchDoctor= async(uid)=>{
        const q = query(collection(db, "Doctors"), where("Uid", "==",uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach(item=>{
            setDoctor([...doctor,item.data()]);
        })
    }


    const SignOut = async (e) =>
     {
        const auth = getAuth();
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
          
        signOut(auth).then(() => {
            Toast.fire({
                icon: 'success',
                title: 'Signed out Successfully'
              })
            navigate("/");
        }).catch((error) => {
            Toast.fire({
                icon: 'error',
                title: 'Unable Sign out'
              })
        });
    }

    return (
        
        <div>
            <Helmet>
                <title>Doctor's Portal</title>
            </Helmet>
            {loading && 
            <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
                <span class="loader">Loading</span>
            </div>
            }
            <Fragment>
            <div className=" bg-gray-900 flex">
            {/* sideBar */}
            <div class="ml-6 my-7 bg-backb hidden lg:block lg:w-1/6 rounded-md ">
                            
                            <div class="h-72 bg-gray-100 rounded-md p-2 m-0.5">
                                <img class="rounded-full my-20" src={img} alt="Doc Img"></img>
                            </div>
                            
                            <div>

                                {doctor && doctor.map(user =>{
                                    return(
                                        <div>
                                        <h1 class="text-center text-white text-xl mt-2">Dr. {user.LastName}</h1>
                                        </div>
                                    )
                                    
                                       
                                    })
                                }   
                            </div>

                            <div class="mt-8">
                                <ul class="pt-3 p-1">
                                    
                                    <button onClick={AddPatient} class="mb-1.5 rounded w-full bg-butb hover:bg-but2">
                                    <li class="inline-flex p-2 font-bold text-white">
                                        <img class="w-6 mr-2" src={add} alt="Add Patient"></img>Add Patient
                                    </li>
                                    </button>

                                    <button onClick={() =>setShowEdit(true)} class="mb-1.5 rounded w-full bg-butb hover:bg-but2">
                                    <li class="inline-flex  p-2 font-bold text-white">
                                        <img class="w-6 mr-2" src={edit} alt="Edit Patient"></img>Edit Patient
                                    </li>
                                    </button>

                                    
                                    <button onClick={() =>setShowDelete(true)} class="w-full rounded bg-butb hover:bg-but2">
                                    <li class="inline-flex p-2 font-bold text-white">
                                        <img class="w-6 mr-2" src={del} alt="Delete Patient"></img>Delete Patient
                                    </li>
                                    </button>
        
                                   
                                </ul>
                            </div>
                            
                </div>


                <div className="w-full m-4 p-2">
                    <div class="bg-tram shadow-md flex items-center justify-between mt-1 h-18 rounded-md">
                        
                        <h1 class="p-2 pl-5 text-xl font-black text-white">Dashboard</h1>
                        
                        <div class="p-2">
                            <button onClick={SignOut} class="p-3 rounded-md bg-white font-black text-tram hover:bg-tram hover:text-white border-black">Log Out</button>
                        </div>

                    </div>

                    <div class="w-full flex flex-col items-center lg:hidden h-12 m-2 mb-0 pr-4">
                        <div class="w-full">
                            <button onClick={onClick} class="p-1 w-full bg-tram rounded-md">
                                <svg class="w-full h-10 ml-2 items-start" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                        </div>
                       {isActive && <div class="w-full z-10">
                                <ul class="w-full z-10 text-center cursor-pointer">
                                    <button onClick={AddPatient} class="block w-full bg-butb text-white hover:bg-but2">
                                    <li class="inline-flex items-center p-2">
                                        <img class="w-6 mr-2" src={add} alt="Add Patient"></img>Add Patient
                                    </li>
                                    </button>
                                    

                                    <button onClick={() =>setShowEdit(true)} class="block w-full bg-butb text-white hover:bg-but2">
                                    <li class="inline-flex items-center p-2">
                                        <img class="w-6 mr-2" src={edit} alt="Edit Patient"></img>Edit Patient Details
                                    </li>
                                    </button>
                                    
                                    <button onClick={() =>setShowDelete(true)} class="block w-full bg-butb text-white hover:bg-but2">
                                    <li class="inline-flex items-center p-2">
                                        <img class="w-6 mr-2" src={del} alt="Delete Patient"></img>Delete Patient
                                    </li>
                                    </button>

                                    <li>

                                    </li>
                                </ul>
                            </div>}
                        
                    </div> 
                        {/* Monitor */}
                        <div class="w-full space-y-4 mt-4 h-128 bg-white shadow-md rounded-md lg:ml-0 p-2 overflow-x-scroll">
                        {patients.map((user) => {
                            return (
                            <div class="p-2 flex justify-between bg-but2 text-white border-2 border-black rounded-md">
                                <div class="my-auto mx-2">
                                    <h1>PatientID: {user.PatientID}</h1>
                                    <h1>Name: {user.Name}</h1>
                                    <h1>Age: {user.Age} </h1>
                                    <h1>Body Weight: {user.BodyWeight}</h1>
                                    <h1>Added On: {user.AddOn}  </h1>
                                </div>

                                <div class="flex space-x-4 p-4">
                                    <div class="space-y-0.5">
                                        <div class="rounded-full w-16 h-16 bg-yellow-300 border-2 my-auto border-white p-3">
                                            <h1 class="text-black text-2xl text-center ">
                                                {user.TargetStepCount}
                                            </h1>
                                        </div>
                                        <h1 class="text-center">Target</h1>
                                    </div>
                                    
                                    <div class="space-y-0.5">
                                        
                                        <div class={"bg-green-400 mx-auto rounded-full w-16 h-16 border-2 my-auto border-white p-3" }>
                                                <h1 class="rounded-full my-auto text-black text-2xl text-center ">
                                                   {user.ProgressCount}
                                                </h1>  
                                        </div>
                                        <h1 class="text-center">Progress</h1>
                                    </div>
                                    
                                </div>

                            </div>
                            );
                        })}
                        </div>
               </div>
            </div>
            <EditPatient isVisible={showEdit} onClose={( )=>setShowEdit(false)}/>

            <DeletePatient isVisible={showDelete} onClose={( )=>setShowDelete(false)}/>
            </Fragment>
        </div>
    )
}

export default DoctorsPortal;
