import Designation from "../Components/Designation";
import Knowaboutme from "../Components/Knowaboutme";
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
        </div>
    );
};

export default Home;