import React from 'react';
import bg from '../../../assets/banner/cover1.jpg';

const Banner = () => {
	return (
		<div className="min-h-screen relative image-fill">
			<img className="min-h-screen w-full" src={bg} alt="" />

			<div className="absolute top-40 lg:left-28">
				<h1 className="title-text text-[84px]">Hello</h1>
				<h1 className="lg:text-3xl text-gray-500">
					This is
					<span className="title-text lg:text-8xl"> Nishat Tasnim</span>
				</h1>
				<h1 className="title-text lg:text-[84px]">
					Welcome to my Portfolio...
				</h1>
				<a
					download
					className="btn btn-common"
					href="../../../../public/Nishat_Tasnim's_Resume.pdf"
				>
					Download Resume
				</a>
			</div>
		</div>
	);
};

export default Banner;
