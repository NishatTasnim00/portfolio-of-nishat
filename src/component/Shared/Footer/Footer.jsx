import React from 'react';
import './Footer.css'
import Wave from 'react-wavify';
const Footer = () => {
    return (
			<div className="bg-black relative">
				{/* <div class="wave-container">
					<svg
						class="wave"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
					>
						<path
							class="wave-path wave-path-1"
							fill="#db2777"
							fill-opacity="0.6"
						></path>
						<path
							class="wave-path wave-path-2"
							fill="#9333ea"
							fill-opacity="0.7"
						></path>
						<path
							class="wave-path wave-path-3"
							fill="#d97706"
							fill-opacity="0.1"
						></path>
					</svg>
				</div> */}

				<Wave mask="url(#mask)" fill="#cbd5e1" opacity={0.5}>
					<defs>
						<linearGradient id="gradient" gradientTransform="rotate(180)">
							<stop offset="0" stopColor="white" />
							<stop offset="0.5" stopColor="black" />
						</linearGradient>
						<mask id="mask">
							<rect
								x="0"
								y="0"
								width="2000"
								height="200"
								fill="url(#gradient)"
							/>
						</mask>
					</defs>
				</Wave>
					<h1 className="text-gray-700 absolute top-28 left-10 lg:left-[40%] mx-auto">
						&copy; 2023 Your Website. All rights reserved.
					</h1>
			</div>
		);
};

export default Footer;