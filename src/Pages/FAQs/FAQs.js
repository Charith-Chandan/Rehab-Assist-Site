import React from 'react'
import { Helmet } from 'react-helmet';

function FAQs() 
{
  return (
    <div>
        <Helmet>
                <title>FAQs</title>
            </Helmet>
        <section className="m-0 md:m-6 md:mx-16 md:rounded-lg bg-gray-800  text-gray-100">
        <h2 className="text-4xl md:text-5xl py-6 text-center font-black">Frequently Asked Questions</h2>
            <div className="container flex flex-col md:flex-row gap-12 justify-center px-12 py-8 mx-auto md:p-16">
                {/* Patients FAQ */}
                <div>
                    <h2 className="text-2xl font-semibold sm:text-4xl py-6">Patient FAQs</h2>
                    <div className="space-y-4 max-w-md">
                        <details className="w-full h-max border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none  ">What is Rehab Assist?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400"> Rehab Assist is a platform between doctors and patients to ensure recovery process is continuously monitored. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none  ">How can I Join this?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Once you are assigned with a doctor. He/she will be adding you to the portal and give you access to the portal.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none">What all information is available on this portal?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Essentials details of yourself,target set for you, progress on acheiving your target.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none">How do I know if I have completed my target or track my progress?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">There exists a feature of target tracker which helps you to know how far you have come on your process of recovery.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none">Will my doctor be able to know my progress?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Yes, Doctor will be able to track you regularly. They can change your target according to your condition.</p>
                        </details>
                    </div>
                </div>
                {/* Doctors FAQ */}
                <div>
                    <h2 className="text-2xl font-semibold sm:text-4xl py-6">Doctor FAQs</h2>
                    <div className="space-y-4 max-w-md">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none">How can I Join this?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">As a Doctor you should be having a DoctorID that is provided by the Hospital. Once you have your DoctorID you need to signup for Adding Patients and Access</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none">On what all platforms can I use this site?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">This is a Responsive Web Application. So, it can be used on android,iOS,laptop and pc.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none">Can I monitor multiple patients at the same time?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">The answer is yes. You just have to sitch to the profile of patient you want to track.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none">What is Rehab Assist?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Rehab Assist is a platform between doctors and patients to ensure recovery process is continuously monitored.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none">What all can be tracked of the patient through this portal?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Number of steps taken, Number of warnings produced in a day.</p>
                        </details>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default FAQs;
