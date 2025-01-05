import facebook from '../assets/facebook.webp';
import gmail from '../assets/gmail.webp';
import github from '../assets/github.png';
import messenger from '../assets/messenger.png';


const Footer = () => {
    return (
        <footer className="lg:flex md:flex justify-around bg-[#222222] text-white text-center p-4">
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">WORK-SERVICE</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">All Services</a>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">DESCRIPTION</h6>
                <p>Thank you for visiting my portfolio.<br /> I hope you enjoyed exploring my work.<br /> Feel free to reach out if you'd like to collaborate<br /> or share feedback. Have a great day.</p>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">social profiles</h6>
                <div className='flex space-x-2 items-center lg:justify-start justify-center'>
                    <a href='https://www.facebook.com/profile.php?id=100056252312818' target='_blank'><img className='w-[60px] rounded-full cursor-pointer' src={facebook} alt="" /></a>
                    <img className='w-[50px] h-[50px] rounded-full cursor-pointer' src={gmail} alt="" />
                    <a href='https://github.com/mdnasiruddin78' target='_blank'><img className='w-[50px] h-[50px] rounded-full cursor-pointer' src={github} alt="" /></a>
                    <img className='w-[60px] rounded-full cursor-pointer' src={messenger} alt="" />
                </div>
            </nav>
        </footer>
    );
};

export default Footer;