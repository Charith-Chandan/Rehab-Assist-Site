import React,{useRef,useState} from 'react'
import img from './img/Contact.svg'
import { Helmet } from 'react-helmet'
import emailjs from 'emailjs-com'
import swal from 'sweetalert';
import './load.css'
function Contact() {
    const form = useRef();
    const [loading,setLoading] = useState(false);

    const sendEmail = (e) =>
    {
        setLoading(true);
        e.preventDefault();

        emailjs.sendForm('service_8y3qh8f','template_ooc6l65',form.current,'JJ1ZnZST1UmiNsws5')
        .then(
            (result) => {
                setLoading(false);
                swal("Message Sent!", "Team will write you soon", "success");
            },
            (error) => {
                setLoading(false);
                swal("Failed!", "Error in Sending the mail, Please try again", "warning");
            }
        );
    }
  return (
    <div className='m-0 md:m-5'>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            {loading && 
            <div class="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
                <span class="loader">Loading</span>
            </div>
            }
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-900 text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className=" text-gray-400">Fill in the form to start a conversation.</div>
                    
                </div>
                <img src={img} alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input name="name" type="text" required placeholder="Name" className="w-full p-3 rounded  bg-white border-white text-black border-2 focus:border-blue-600"/>
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input name="email" type="email" required placeholder="Email" className="w-full p-3 rounded  bg-white border-white text-black border-2 focus:border-blue-600"/>
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea name="message" rows="3" required placeholder="Message" className="w-full p-3 rounded  bg-white border-white text-black border-2 focus:border-blue-600"/>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded  bg-tram  text-white">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
