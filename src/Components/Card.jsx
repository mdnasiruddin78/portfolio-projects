import { Link } from "react-router-dom";
import './index/index.css'


const Card = ({ project }) => {
    const { id, image, name } = project
    return (
        <div className="card group bg-base-100 shadow-xl" data-aos="fade-up">
            <div className="">
                <img
                    src={image}
                    alt="image"
                    className="rounded-xl group-hover:scale-105 
              transition" />
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-center font-bold text-2xl">{name}</h2>
                <div className='text-gray-500'>
                    {/* {
                        card.EcoFriendlyFeatures.map((e, idx) => <ul key={idx}><li>{e}</li></ul>)
                    } */}
                </div>
                <div className="card-actions">
                    <Link to={`/projectDetail/${id}`} className='btn btn-grad btn-grad btn-grad:hover'>View Details </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;