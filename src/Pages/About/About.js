import React from 'react'
import pic1 from '../../Components/img/about1.png'
import amrita from '../../Components/img/Amrita.png'
import faculty1 from '../../Components/img/Ushadevi-Amma.png'
import faculty2 from '../../Components/img/klnisha.png'
import team1 from '../../Components/img/team1.png'
import team4 from '../../Components/img/team4.png'
import team3 from '../../Components/img/team3.png'
import team2 from '../../Components/img/team2.png'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <div>
        <Helmet>
                <title>About</title>
            </Helmet>
        <section>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="block gap-3 mx-auto lg:grid lg:grid-cols-12 bg-slate-400 text-white rounded-lg">
                    <img src={pic1} alt="" className=" object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl pt-5">About</h3>
                        <p class='pt-6 text-slate-100'>Rehab Assist is a brain child of a doctor who wishes to provide affordable and accessible process of recovery for the poor. There are many such platforms available but most of them are either expensive or not very patient friendly. That is when we have come up with this. This is a platform intended to help patients to have better process of recovery through this innovative and affordable website which helps doctor to regularly monitor the patient. Also the patient can track their progress themselves.</p>
                    </div>
                </div>
                <div class="mx-8 bg-gradient-to-r flex flex-col lg:flex-row justify-center from-bannerS to-bannerE  rounded-lg">
                    <div>
                        <img class='p-8' src={amrita} alt="amrita logo"></img>
                    </div>
                    <div class='text-white'>
                        <h1 class='text-2xl font-black p-4 pb-2'>About Us</h1>
                        <p class='p-4 pt-0'>We are a group of 4 Btech students who are working on this to provide a means of recovery which is both affordable and accessible to everybody.</p>
                    </div>
                </div>
                <h1 class='text-2xl text-center font-black md:text-4xl lg:text-5xl'>Metors and Guides</h1>
                <div className="grid justify-center gap-2 grid-cols-1 sm:grid-cols-2">
                     <div className="mx-auto group bg-slate-400 text-white rounded-lg">
                        <img className="object-cover w-80 h-72 rounded" src={faculty2} alt='pic'/>
                        <div className="p-6 w-80 space-y-2">
                            <h3 className="text-2xl font-semibold">Dr. K L Nisha</h3>
                            <span className="text-xs text-justify text-gray-600">Assistant Professor , Department of Electronics and Communication Engineering, School of Engineering, Amritapuri</span>
                            <p>Guide</p>
                        </div>
                     </div>
                     <div className=" mx-auto bg-slate-400 text-white rounded-lg">
                        <img className="object-cover w-80 h-72 rounded" src={faculty1} alt='pic'/>
                        <div className="p-6 w-80 space-y-2">
                            <h3 className="text-2xl font-semibold">Dr. Usha Devi Amma C</h3>
                            <span className="text-xs text-justify text-gray-600">Professor , Department of Electronics and Communication Engineering, School of Engineering, Amritapuri</span>
                            <p>Guide</p>
                        </div>
                     </div>
                </div>
                <h1 class='text-2xl text-center font-black md:text-4xl lg:text-5xl'>Team Members</h1>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                     
                     <div className="mx-auto group bg-slate-400 text-white rounded-lg">
                        <img className="object-cover w-80 h-72 rounded" alt='pic' src={team2} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold">Sai Sudheer Kumar</h3>
                            <p>Team Member</p>
                        </div>
                     </div>
                     <div className="mx-auto group bg-slate-400 text-white rounded-lg">
                        <img className="object-cover w-80 h-72 rounded" alt='pic' src={team3}/>
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold">Satya Sai Gayathri</h3>
                            <p>Team Member</p>
                        </div>
                     </div>
                     <div className="mx-auto group bg-slate-400 text-white rounded-lg">
                        <img className="object-cover w-80 h-72 rounded" alt='pic' src={team4} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold">Purna Sai</h3>
                            <p>Team Member</p>
                        </div>
                     </div>
                     <div className="mx-auto group bg-slate-400 text-white rounded-lg">
                        <img className="object-cover w-80 h-72 rounded"  alt='pic' src={team1}/>
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold">Rudra Charith Chandan</h3>
                            
                            <p>Team Member</p>
                        </div>
                     </div>
                     
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default About;
