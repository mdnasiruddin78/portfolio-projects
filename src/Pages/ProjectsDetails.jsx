import { Link, useLoaderData, useParams } from "react-router-dom";


const ProjectsDetails = () => {

    const data = useLoaderData()
    const { id } = useParams()
    const details = data.find(detail => detail.id == id)
    const { image, name, live_link, github_link, technology_use, key_features, challenges, shortcoming_of_the_projects, thinking_and_improving } = details
    
    return (
        <div className="card shadow-xl">
            <figure>
                <img className='rounded-xl'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='lg:flex lg:justify-between'>
                    <div className='space-y-4'>
                        <h2 className="card-title text-xl"><span className='font-bold'>Projects Title:</span> {name}</h2>
                        <p><a href={live_link} target="_blank" rel="noreferrer noopener"><span className='font-bold'>live_link:  </span>Click to See live Website</a></p>
                        <p><a href={github_link} target="_blank" rel="noreferrer noopener"><span className='font-bold'>github_link:  </span>Click to See github Code</a></p>
                        <p className='text-xl'><span className='font-bold flex items-center'> challenges: </span> {challenges}</p>
                        <p className='text-xl'><span className='font-bold'>shortcoming_of_the_projects: </span> {shortcoming_of_the_projects}</p>
                        <p className='text-xl'><span className='font-bold'>thinking_and_improving:</span> {thinking_and_improving}</p>
                    </div>
                    <div className='space-y-4'> 
                        <p className='text-xl'><span className='font-bold flex items-center'>technology_use:</span> {details.technology_use.map(e => <ul><li className='flex items-center'>{e}</li></ul>)}</p>
                        <p className='text-xl'><span className='font-bold'>key_features:</span> {details.key_features.map(e => <ul><li className='flex items-center'>{e}</li></ul>)}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link to="/" className='btn btn-grad btn-grad btn-grad:hover'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;