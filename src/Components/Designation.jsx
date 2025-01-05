import image from '../assets/profile.jpg';
import facebook from '../assets/facebook.webp';
import gmail from '../assets/gmail.webp';
import github from '../assets/github.png';
import messenger from '../assets/messenger.png';
import './index/index.css';


const Designation = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="col-span-1 space-y-3">
                <h3 className="text-4xl font-bold lg:text-left text-center">Junior Web Developer</h3>
                <p className="text-gray-500 text-xl lg:text-left text-center">Welcome! I’m MD.NASIR UDDIN ANIK, a dedicated junior web developer focused on creating visually appealing, highly functional, and user-centered websites. My mission is to deliver seamless digital experiences that leave a lasting impression. Let’s build something remarkable together.</p>
                <div className='flex space-x-2 items-center lg:justify-start justify-center'>
                    <a href='https://www.facebook.com/profile.php?id=100056252312818' target='_blank'><img className='w-[60px] rounded-full cursor-pointer' src={facebook} alt="" /></a>
                    <img className='w-[70px] h-[70px] rounded-full cursor-pointer' src={gmail} alt="" />
                    <a href='https://github.com/mdnasiruddin78' target='_blank'><img className='w-[50px] h-[50px] rounded-full cursor-pointer' src={github} alt="" /></a>
                    <img className='w-[60px] rounded-full cursor-pointer' src={messenger} alt="" />
                </div>
                <div className='flex lg:justify-start justify-center'>
                    <button className="btn btn-grad btn-grad btn-grad:hover">Download Resume</button>
                </div>
            </div>
            <div className="col-span-1 flex justify-center">
                <img className='w-[350px] rounded-full border-4 border-black' src={image} alt="" />
            </div>
        </div>
    );
};       

export default Designation;