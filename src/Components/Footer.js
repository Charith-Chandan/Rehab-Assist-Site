import instagram from './img/instagram.ico'
import linkedin from './img/linkedin.png'
import gmail from './img/gmail.png'
import twitter from './img/twitter.png'
import { useNavigate } from "react-router";

function Footer ()
{
    const navigate = useNavigate();
    function About()
    {
        navigate("/About");
    }
    function Contact()
    {
        navigate("/contact");
    }
    function FAQ()
    {
        navigate("/FAQ");
    }
    function Support()
    {
        navigate("/contact");
    }
    return(
        <footer className="z-10 bg-black text-white">
            <div className="flex text-center py-10 mx-auto">
                <div className="m-auto">
                    <ul className="flex-row m-5">
                        <li className="w-12 m-5 cursor-pointer"><button onClick={About} className="text-center">About</button></li>
                        <li className="w-12 m-5 cursor-pointer"><button onClick={Contact} className="text-center">Contact</button></li>
                        <li className="w-12 m-5 cursor-pointer"><button onClick={FAQ} className="text-center">FAQ's</button></li>
                        <li className="w-12 m-5 cursor-pointer"><button onClick={Support} className="text-center">Support</button></li>
                    </ul>
                </div>
                
                <div className="m-auto">
                <ul className="flex gap-5">
                        <li className="w-12"><a className="text-center" target="_blank" href="mailto: rehabassistproject@gmail.com"><img src={gmail} alt=""></img></a></li>
                        <li className="w-12"><a className="text-center" target="_blank" href="https://www.instagram.com/rehab_assist/"><img src={instagram} alt=""></img></a></li>
                        <li className="w-12 "><a className="text-center" target="_blank" href="https://www.linkedin.com/in/rehab-assist-7a24b3266/"><img src={linkedin} alt=""></img></a></li>
                        <li className="w-12 "><a className="text-center" target="_blank" href="https://twitter.com/rehab_assist"><img src={twitter} alt=""></img></a></li>
                    </ul>
                </div>
                
            </div>
            <div >
                    <div className="p-0">
                        {/* <p className="text-center">&copy; {new Date().getFullYear()} by </p> */}
                    </div>
            </div>
        </footer>
    );
}

export default Footer;