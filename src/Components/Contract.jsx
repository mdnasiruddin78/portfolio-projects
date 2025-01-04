import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import './index/index.css';


const Contract = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold text-center">My Projects</h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 lg:p-10 md:p-10">
                <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                        <IoLogoWhatsapp className="text-2xl"/>
                        <h3 className=" text-2xl font-bold">WhatsApp: +001828775478</h3>
                    </div>
                    <div className="flex items-center space-x-2">                   
                        <FaPhoneAlt className="text-2xl"/>
                        <p className=" text-2xl font-bold">Mobile: +001828775478</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <HiOutlineMail className=" text-2xl" />
                        <p className=" text-2xl font-bold">Email: nasiruddinanik54@gmail.com</p>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex items-center space-x-2">
                        <FaLocationDot className=" text-2xl" />
                        <p className=" text-2xl font-bold">
                            My Address: kaptai,Rangamati,Chittagong!
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <LuSend className="text-2xl" />
                            <h3 className='text-2xl font-bold'>Send Your Email</h3>
                        </div>
                        <div className="flex items-center">
                            <input type="email" placeholder="Type your email" className="input input-bordered w-full max-w-xs" />
                            <button className="btn btn-grad btn-grad btn-grad:hover">Send </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;