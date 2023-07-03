import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import PInfo from '../PInfo/PInfo';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Home = () => {
	return (
		<>
			<Banner></Banner>
			<PInfo></PInfo>
			<About></About>
			<Skill></Skill>
			<Projects></Projects>
			<Contact></Contact>
		</>
	);
};

export default Home;
