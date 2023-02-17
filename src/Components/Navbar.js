import icon from './img/Logo.png'
function Navbar()
{
    return(
    <header className="z-30 top-0 sticky flex-col md:flex-row justify-between px-5 py-5 bg-black m-0">
    
    <div class='flex flex-col md:flex-row justify-between'>
        <div className="text-white flex justify-center md:ml-8">
          <a class='flex' href="/">
            <img class='w-14 h-14 m-4 mt-6 mr-0 md:h-24 md:w-24' src={icon} alt="icon"/>
            <h1 className="inline-flex my-auto text-3xl m-5 pt-5 ml-2 font-black text-white md:text-5xl ld:text-8xl">Rehab Assist</h1>
          </a>
        </div>

        <div className="flex justify-center md:m-10 md:mr-20">
          <a href="Doctorlogin"><button className="bg-tram text-white font-semibold rounded px-5 py-2 md:mt-5 hover:bg-black hover:text-tram">Doctor Login</button></a>
          <a href="Patientlogin"><button className="bg-tram text-white ml-8 font-semibold rounded px-4 py-2 md:mt-5 hover:bg-black hover:text-tram">Patient Login</button></a>
        </div>
    </div>
     

    </header>

    );
}
export default Navbar;