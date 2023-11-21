import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './PersonalDetails.css'
import Media from '../Shared/Media/Media';
const PersonalDetails = () => {
    return (
			// <div data-aos="fade-right">
			<div className='mt-5 lg:mt-0 mx-5 text-center lg:text-left'>
				<div >
					<Fade cascade damping={.5} className="personalDetails-text">
						<p>Nishat Tasnim</p>
						<p>MERN Stack Developer</p>
						<p>Dhaka, Bangladesh</p>
						<p>BSc in Computer Science & Engineering</p>
						<p>Jashore University of Science & Technology</p>
					</Fade>
				</div>
				{/* <ul className="flex justify-center gap-3 mt-5 lg:justify-start">
					<li>
						<i class="fab fa-facebook-f"></i>
					</li>
					<li>
						<i class="fab fa-instagram"></i>
					</li>
					<li>
						<i class="fab fa-linkedin-in"></i>
					</li>
					<li>
						<i class="fab fa-github"></i>
					</li>
				</ul> */}
<Media></Media>

</div>
		);
};

export default PersonalDetails;