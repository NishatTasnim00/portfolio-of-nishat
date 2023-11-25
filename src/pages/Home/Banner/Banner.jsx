import React from 'react';
import bg from '../../../assets/banner/cover1.jpg';

const Banner = () => {
	return (
		<div className="min-h-screen relative image-fill">
			<img className="min-h-screen w-full" src={bg} alt="" />

			<div className="absolute top-40 lg:left-28 left-8">
				<h1 className="title-text text-4xl lg:text-[84px] lg:py-10">Hello</h1>
				<h1 className="lg:text-3xl text-gray-500 -mt-3 lg:mt-0">
					This is
					<span className="title-text text-3xl lg:text-8xl"> Nishat Tasnim</span>
				</h1>
				<h1 className="title-text lg:text-[84px] text-3xl lg:py-10">
					Welcome to my Portfolio...
				</h1>
				<a
					download
					className="btn btn-common lg:mt-7"
					// href="../../../../public/Resume_of_Nishat_Tasnim.pdf"
					href='Nishat_Tasnim_Resume.pdf'
				>
					Download Resume
				</a>
			</div>
		</div>
	);
};

export default Banner;
