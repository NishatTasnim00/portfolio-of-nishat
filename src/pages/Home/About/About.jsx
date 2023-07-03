import React from 'react';
import './About.css';
import { TypeAnimation } from 'react-type-animation';

import { Fade } from 'react-awesome-reveal';

const About = () => {
	return (
		<div className="bg-black p-10 lg:p-40">
			<div className="space-y-5">
				<hr className="w-6/12" />
				<hr className="w-4/12" />
				<hr className="w-2/12" />
			</div>
			<br />
			{/* <TypeAnimation
				sequence={[
					"Hello, I'm Nishat Tasnim, a passionate and experienced web developer specializing in creating innovative and user-friendly websites. With a strong background in front-end and back-end development, I bring a unique blend of technical expertise and creative problem-solving skills to every project I undertake.",
				]}
				wrapper="span"
				speed={100}
				style={{ fontSize: '2em', display: 'inline-block' }}
				repeat={Infinity}
				cursor={false}
			/> */}
			<div className="text-gray-200 lg:hidden">
				<p>
					Hello, I'm Nishat Tasnim, a passionate and experienced web developer
					specializing in creating innovative and user-friendly websites. With a
					strong background in front-end and back-end development, I bring a
					unique blend of technical expertise and creative problem-solving
					skills to every project I undertake.
				</p>
				<br />
				<p>
					I believe in crafting websites that not only look visually stunning
					but also provide a seamless user experience. My goal is to understand
					your unique requirements and translate them into a beautifully
					designed, responsive, and functional website that exceeds your
					expectations. I pay meticulous attention to detail, ensuring that the
					websites I create are not only aesthetically pleasing but also
					optimized for speed, performance, and search engine visibility.
				</p>
			</div>
			<div className="font-medium text-2xl text-gray-200 hidden lg:block">
				<Fade cascade duration={100} damping={0.5}>
					Hello, I'm Nishat Tasnim, a passionate and experienced web developer
					specializing in creating
				</Fade>
				<Fade cascade delay={5000} duration={100} damping={0.5}>
					innovative and user-friendly websites. With a strong background in
					front-end and back-end
				</Fade>
				<Fade cascade delay={10000} duration={100} damping={0.5}>
					development, I bring a unique blend of technical expertise and
					creative problem-solving skills
				</Fade>
				<Fade cascade delay={15000} duration={100} damping={0.5}>
					to every project I undertake.
				</Fade>
				<br />
				<Fade cascade delay={17000} duration={100} damping={0.5}>
					I believe in crafting websites that not only look visually stunning
					but also provide a seamless
				</Fade>
				<Fade cascade delay={22000} duration={100}>
					user experience. My goal is to understand your unique requirements and
					translate them into a
				</Fade>
				<Fade cascade delay={27000} duration={100} damping={0.5}>
					beautifully designed, responsive, and functional website that exceeds
					your expectations. I pay
				</Fade>

				<Fade cascade delay={32000} duration={100} damping={0.5}>
					meticulous attention to detail, ensuring that the websites I create
					are not only aesthetically
				</Fade>
				<Fade cascade delay={37000} duration={100} damping={0.5}>
					pleasing but also optimized for speed, performance, and search engine
					visibility.
				</Fade>
			</div>
			<br />
			<div className="space-y-5 text-white">
				<div className="flex flex-col w-full text-white bg-slate-700"></div>
				<hr className="w-2/12" />
				<hr className="w-4/12" />
				<hr className="w-6/12 flex justify-end bg-red-500" />
			</div>
		</div>
	);
};

export default About;
