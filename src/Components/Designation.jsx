import image from '../assets/image-modified.png';
import facebook from '../assets/facebook.webp';
import gmail from '../assets/gmail.webp';
import whatsapp from '../assets/whatsapp.webp';
import messenger from '../assets/messenger.png';

const Designation = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="col-span-1 space-y-5">
                <h3 className="text-4xl font-bold">Junior Web Developer</h3>
                <p className="text-gray-500 text-xl">Welcome! I’m MD.NASIR UDDIN ANIK, a dedicated junior web developer focused on creating visually appealing, highly functional, and user-centered websites. My mission is to deliver seamless digital experiences that leave a lasting impression. Let’s build something remarkable together.</p>
                <div className='flex space-x-3'>
                    <img className='w-14 rounded-full cursor-pointer' src={facebook} alt="" />
                    <img className='w-14 rounded-full cursor-pointer' src={gmail} alt="" />
                    <img className='w-14 rounded-full cursor-pointer' src={whatsapp} alt="" />
                    <img className='w-14 rounded-full cursor-pointer' src={messenger} alt="" />
                </div>
                <button className="btn">Download Resume</button>
            </div>
            <div className="col-span-1 flex justify-center">
                <img className='w-[350px] rounded-full border-4 border-green-500' src={image} alt=""/>
            </div>
        </div>
    );
};

export default Designation;