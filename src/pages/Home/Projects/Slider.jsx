import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);
 
const Slider = ({img1, img2, img3}) =>{
return (
	<AutoplaySlider
		play={true}
		cancelOnInteraction={false} // should stop playing on user interaction
		fillParent={true}
		buttons={false}
		bullets={false}
		interval={1000}
	>
		<figure className="absolute h-full w-full rounded-lg">
			<img className="relative h-full w-full object-cover rounded-lg" src={img1} alt="" />
		</figure>
		<figure className="absolute h-full w-full rounded-lg">
			<img className="relative h-full w-full object-cover rounded-lg" src={img2} alt="" />
		</figure>
		<figure className="absolute h-full w-full rounded-lg">
			<img className="relative h-full w-full object-cover rounded-lg" src={img3} alt="" />
		</figure>
	</AutoplaySlider>
);
	
};

export default Slider;