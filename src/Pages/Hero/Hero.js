import vid from '../../Components/img/doc.mp4';
import img1 from '../../Components/img/IMG1.jpg'
import img2 from '../../Components/img/IMG2.jpg'
import img3 from '../../Components/img/IMG3.jpg'
import walk from '../../Components/img/walk.png'

function Hero()
{
    return(
        
        <div class='bg-white'>
            <div class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
                <div class="relative z-20">
                    <h1 class='text-white text-4xl md:text-6xl lg:text-8xl font-bold pt-30 lg:pt-60 text-center'>
                        MAKING HEALTH <span class='text-tram'>ACCESSIBLE</span> AND <span class='text-tram'>AFFORDABLE</span>
                    </h1>
                </div>
                <video autoPlay loop muted class="absolute z-10 max-w-none brightness-50">
                    <source src={vid} type="video/mp4" />Your browser does not support the video tag.
                </video>

                <div class=" absolute z-20 mt-64 lg:pt-[200px] flex flex-col">
                    <div class='w-10 h-16 rounded-full border-4 border-white text-center ml-1.5'>
                            <h1 class='text-center font-black text-white text-5xl animate-bounce'>.</h1>
                    </div>
                    <h1 class='absolute text-center mt-16 text-xl text-white'>Scroll</h1>
                </div>
            </div>

            <div class='m-4 lg:m-16 rounded-lg bg-black shadow-2xl'>
                <div class='flex flex-col mx-auto md:flex-row text-center text-white py-6'>
                    {/* 1 */}
                    <div class='md:w-1/3'>
                        <img class='rounded-full mx-auto w-[175px] h-[175px] lg:w-[225px] lg:h-[225px] object-cover' src={img1} alt='Doctor_Support_Image'>

                        </img>
                        <h1 class='font-black text-tram text-xl pt-4'>
                            ACCESS
                        </h1>
                        <p class='w-[60%] mx-auto text-gray-400'>
                            By combining health care facility with technology we are helping equity in health
                        </p>
                    </div>
                    {/* 2 */}
                    <div class='md:w-1/3'>
                        <img  class='rounded-full mx-auto w-[175px] h-[175px] lg:w-[225px] lg:h-[225px] object-cover' src={img2} alt='Doctor_Support_Image'>

                        </img>
                        <h1 class='font-black text-tram text-xl pt-4'>
                            THOUGHT
                        </h1>
                        <p class='w-[60%] mx-auto text-gray-400'>
                            Intersection of science,technology,and patient experience is the new normal of health care technology
                        </p>
                    </div>
                    {/* 3 */}
                    <div class='md:w-1/3'>
                        <img class='rounded-full mx-auto w-[175px] h-[175px] lg:w-[225px] lg:h-[225px] object-cover' src={img3} alt='Doctor_Support_Image'>
                        </img>
                        <h1 class='font-black text-tram text-xl pt-4'>
                            IMPACT
                        </h1>
                        <p class='w-[60%] mx-auto text-gray-400'>
                            With this we hope to build bridge between doctor and patient for healthy and positive recovery of patients.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row text-white m-4 lg:m-16">
                <img src={walk} alt="doc" className="h-80 object-fill" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-black">
                        <span className="text-xs text-gray-400">Have your Patient Id?</span>
                        <h3 className="text-3xl font-bold">Get Started with your journey of recovery</h3>
                        <p className="my-6 text-gray-400">Login with PatientID given by Doctor, Start Exercise, Reach the target step count and Relax.</p>
                        <a href="Patientlogin"><button type="button" className="self-start text-tram">Start</button></a>
                    </div>
            </div>
            
        </div>
    );
}
export default Hero;