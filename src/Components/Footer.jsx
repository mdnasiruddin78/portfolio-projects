

const Footer = () => {
    return (
        <footer className="lg:flex md:flex justify-around bg-[#222222] text-white text-center">
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">WORK-SERVICE</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">All Services</a>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">DESCRIPTION</h6>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">social profiles</h6>
                <div className='flex justify-center space-x-3 cursor-pointer'>
                    <div>
                        {/* <img className='w-28 rounded-xl' src={logo} alt="" /> */}
                        <p className=''>www.WORK.com</p>
                    </div>
                    <div className='space-y-3 text-4xl'>
                        {/* <FaSquareFacebook className='text-blue-500' />
                        <FaSquareXTwitter />
                        <SiInstagram className='text-red-500' /> */}
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;