import React, { useEffect } from 'react';
import { FaHtml5, FaReact, FaFigma } from 'react-icons/fa';
import { DiCss3} from 'react-icons/di';
import { BsFillBootstrapFill, BsGithub } from 'react-icons/bs';
import {
	BiLogoTailwindCss,
	BiLogoReact,
	BiLogoNodejs,
	BiLogoMongodb,
	BiLogoFirebase,
	BiLogoChrome,
} from 'react-icons/bi';
import { SiDaisyui, SiReacthookform, SiDotenv } from 'react-icons/si';
import { TbBrandJavascript, TbBrandVscode } from 'react-icons/tb';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import dom from '../../../assets/skill/react-router.svg'
import Aos from 'aos';
const Skill = () => {
	 useEffect(() => {
			Aos.init();
		}, []);	
    return (
			<div className="bg-black min-h-screen w-full flex justify-center items-center py-20">
				<div className="w-9/12" data-aos="zoom-in">
					<h1
						className="flex justify-center title-text text-3xl"
						data-aos="fade-up"
						data-aos-delay="30"
						data-aos-duration="1000"
					>
						skills
					</h1>
					<div>
						<h2 className="skills-text">Expertise</h2>
						<div className="grid lg:grid-cols-4 gap-5">
							<button
								className="btn-skill text-amber-400  hover:bg-amber-400 hover:text-gray-950"
								data-aos="fade-right"
								data-aos-delay="30"
								data-aos-duration="1000"
							>
								<FaHtml5 size={28} />
								HTML5
							</button>
							<button
								className="btn-skill text-blue-500  hover:bg-blue-500 hover:text-gray-950"
								data-aos="fade-right"
								data-aos-delay="50"
								data-aos-duration="1000"
							>
								<DiCss3 size={28} />
								CSS3
							</button>
							<button
								className="btn-skill text-purple-600  hover:bg-purple-600 hover:text-gray-950"
								data-aos="fade-right"
								data-aos-delay="60"
								
								data-aos-duration="1000"
							>
								<BsFillBootstrapFill size={28} />
								Bootstrape
							</button>
							<button
								className="btn-skill text-cyan-500  hover:bg-cyan-500 hover:text-gray-950"
								data-aos="fade-right"
								
								data-aos-duration="1000"
								data-aos-delay="70"
							>
								<BiLogoTailwindCss size={28} />
								Tailwind
							</button>
							<button
								className="btn-skill text-pink-400  hover:bg-pink-400 hover:text-gray-950"
								data-aos="fade-right"
								
								data-aos-duration="1000"
								data-aos-delay="80"
							>
								<SiDaisyui size={28} />
								DaisyUI
							</button>
							<button
								className="btn-skill text-cyan-300  hover:bg-cyan-300 hover:text-gray-950"
								data-aos="fade-right"
								
								data-aos-duration="1000"
								data-aos-delay="90"
							>
								<BiLogoReact size={28} />
								React
							</button>
							<button
								className="btn-skill text-red-500  hover:bg-red-500 hover:text-gray-950"
								data-aos="fade-right"
								
								data-aos-duration="1000"
								data-aos-delay="100"
							>
								<img className="h-8" src={dom} alt="" />
								React
							</button>
						</div>
					</div>
					<div>
						<h2 className="skills-text">Comfortable</h2>
						<div className="grid lg:grid-cols-4 gap-5">
							<button
								className="btn-skill text-amber-400  hover:bg-amber-400 hover:text-gray-950"
								data-aos="fade-right"
								
								data-aos-duration="1000"
								data-aos-delay="50"
							>
								<TbBrandJavascript size={28} />
								Javascript
							</button>

							<button
								className="btn-skill text-green-900 hover:bg-green-900 hover:text-gray-950"
								data-aos="fade-right"
								
								data-aos-duration="1000"
								data-aos-delay="100"
							>
								<BiLogoMongodb size={28} />
								NodeJS
							</button>
							<button
								className="btn-skill text-pink-500 hover:bg-pink-500 hover:text-gray-950"
								data-aos="fade-right"
								
								data-aos-duration="1000"
								data-aos-delay="150"
							>
								<SiReacthookform size={28} />
								React Hook Form
							</button>
						</div>
					</div>
					<div>
						<h2 className="skills-text">Familiar</h2>

						<div className="grid lg:grid-cols-4 gap-5">
							<button
								className="btn-skill text-green-500  hover:bg-green-500 hover:text-gray-950"
								data-aos="fade-right"
								
								data-aos-duration="1000"
								data-aos-delay="50"
							>
								<BiLogoNodejs size={28} />
								NodeJS
							</button>
							<button
								className="btn-skill text-yellow-400 hover:bg-yellow-400 hover:text-gray-950"
								data-aos="fade-right"
								
								data-aos-duration="1000"
								data-aos-delay="100"
							>
								<BiLogoFirebase size={28} />
								Firebase
							</button>
						</div>
					</div>
					<div>
						<h2 className="skills-text">Tools</h2>

						<div className="grid lg:grid-cols-4 gap-5">
							<button
								className="btn-skill text-blue-600  hover:bg-blue-600 hover:text-gray-950"
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay="50"
							>
								<TbBrandVscode size={28} />
								VS Code
							</button>
							<button
								className="btn-skill text-red-300  hover:bg-red-400 hover:text-gray-950"
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay="60"
							>
								<FaFigma size={28} />
								Figma
							</button>
							<button
								className="btn-skill text-zinc-700 hover:bg-zinc-500 hover:text-gray-950"
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay="100"
							>
								<BsGithub size={28} />
								GitHub
							</button>
							<button
								className="btn-skill text-amber-800  hover:bg-amber-800 hover:text-gray-950"
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay="150"
							>
								<SiDotenv size={28} />
								Dotenv
							</button>
							<button
								className="btn-skill text-red-700   hover:bg-red-700 hover:text-gray-950"
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay="200"
							>
								<BiLogoChrome size={28} />
								Chrome DevTool
							</button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Skill;