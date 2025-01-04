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
            <section>
                <Knowaboutme></Knowaboutme>
            </section>
            <section>
                <Skill></Skill>
            </section>
            <section>
                <Projects></Projects>
            </section>
            <section>
                <Contract></Contract>
            </section>
        </div>
    );
};

export default Home;