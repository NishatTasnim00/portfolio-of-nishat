import React, { useEffect } from 'react';
import person from '../../../assets/about/person.jpg';
import './PInfo.css';
import PersonalDetails from '../../../component/PersonalDetails/PersonalDetails';

const PInfo = () => {
	useEffect(() => {
		const imageHolder = document.querySelector('.image-holder');

		let rotation = 0;

		function rotate() {
			rotation += 1;
			imageHolder.style.transform = `rotate(${rotation}deg)`;
			requestAnimationFrame(rotate);
		}

		rotate();
	}, []);

	return (
		<>
			<div className="bg-black min-h-screen  lg:flex  justify-center items-center">
				<div
					className="bg-black overflow-hidden
                relative h-96 w-64 rounded-lg mx-auto lg:m-0"
				>
					<div
						className="image-holder absolute  -inset-6 bg-gradient-to-b from-gray-400 to-gray-900
						h-[500px] w-28 z-20 m-auto"
					></div>
					<div className="z-30 inset-[5px] absolute bg-black rounded-lg">
						<figure className="absolute inset-2 rounded-lg">
							<img
								className="absolute h-full rounded-lg object-cover"
								src={person}
								alt=""
							/>
						</figure>
					</div>
				</div>
				<PersonalDetails></PersonalDetails>
			</div>
		</>
	);
};

export default PInfo;
