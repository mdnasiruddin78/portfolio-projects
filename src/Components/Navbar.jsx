import './index/index.css'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-3 backdrop-blur bg-white/10">
           <div>
                <h3 className="text-2xl font-bold">MY PORTFOLIO</h3>
            </div>  
           <div>
            <button className="btn btn-grad btn-grad btn-grad:hover">Download Resume</button>
            </div> 
        </div>
    );
};

export default Navbar;


