import Contract from "../Components/Contract";
import Designation from "../Components/Designation";
import Knowaboutme from "../Components/Knowaboutme";
import Projects from "../Components/Projects";
import Skill from "../Components/Skill";


const Home = () => {
    return (
        <div>
            <section>
                <Designation></Designation>
            </section>
            <section className="py-10">
                <Knowaboutme></Knowaboutme>
            </section>
            <section>
                <Skill></Skill>
            </section>
            <section className="mb-10">
                <Projects></Projects>
            </section>
            <section className="mb-10">
                <Contract></Contract>
            </section>
        </div>
    );
};

export default Home;