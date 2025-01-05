import { useEffect, useState } from "react";
import Card from "./Card";


const Projects = () => {

    const [projects,setProjects] = useState([])

    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    return (
        <div>
            <h3 className="text-2xl font-bold text-center mb-5">My Projects</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    projects.map(project => <Card key={project.id} project={project}></Card>)
                }
            </div>
        </div>
    );
};

export default Projects;