

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-3">
           <div>
                <h3 className="text-2xl font-bold">MY PORTFOLIO</h3>
            </div>  
           <div>
            <button className="btn">Download Resume</button>
            </div> 
        </div>
    );
};

export default Navbar;