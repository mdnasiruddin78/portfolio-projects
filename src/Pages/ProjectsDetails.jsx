import { useLoaderData, useParams } from "react-router-dom";


const ProjectsDetails = () => {

    const data = useLoaderData()
    const {id} = useParams()
    const details = data.find(detail => detail.id == id)
    const {image,name,live_link,github_link,technology_use,key_features,challenges,shortcoming_of_the_projects,thinking_and_improving} = details

    return (
        <div>
            
        </div>
    );
};

export default ProjectsDetails;