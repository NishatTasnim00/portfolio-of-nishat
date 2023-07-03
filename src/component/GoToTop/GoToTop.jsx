import React, { useState, useEffect } from 'react';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
const GoToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		setIsVisible(scrollTop > 200); // Adjust this value to control when the button appears
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<button
			className={`scroll-to-top hidden lg:block  text-gray-300 bg-black rounded-full ${
				isVisible ? 'visible fixed z-100 bottom-8 right-8' : ''
			}`}
			onClick={scrollToTop}
		>
			<BsFillArrowUpCircleFill size={40} />
		</button>
	);
};

export default GoToTop;
