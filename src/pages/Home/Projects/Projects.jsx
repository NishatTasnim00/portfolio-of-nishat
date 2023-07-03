import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
const Projects = () => {
     useEffect(() => {
				Aos.init();
			}, []);
const myProjects = [
	{
		id: 1,
		name: 'LensCrafters',
		details: 'A summer camp offers various photography courses.',
		features: [
			'Dynamic dashboard for student, teacher and admin where admin can control role.',
			'Teacher can dynamically add and edit classes. And can see the update/feedback.',
			'Student can select classes, enrolled after payment. A payment history is also included.',
		],
		technologies:
			'ReactJS, React Router Dom, DaisyUI, Firebase Authentication, ExpressJS, NodeJS, MongoDB, Firebase Hosting',
		clientSite: 'https://github.com/NishatTasnim00/LensCrafters-client',
		serverSite: 'https://github.com/NishatTasnim00/LensCrafters-server',
		liveSite: 'https://lenscrafters-c34d8.web.app/',
		img1: 'https://i.ibb.co/6JP0L0G/lenscrafters-c34d8-web-app-5.png',
		img2: 'https://i.ibb.co/Jm1QPkY/lenscrafters-c34d8-web-app-6.png',
		img3: 'https://i.ibb.co/V2DRm5M/lenscrafters-c34d8-web-app-dashboard-add-Class.png',
	},
	{
		id: 2,
		name: 'KidzLand',
		details: "It's a children learing toy selling e-commerce platform.",
		features: [
			'Kids learning toys selling e-commerce site where sellers can post and edit products.',
			'Customers can only see the details of the toys by creating account into the site.',
			'They can search product according to category and also can sort them by price.',
		],
		technologies:
			'ReactJS, React Router Dom, DaisyUI, Firebase Authentication, ExpressJS, NodeJS, MongoDB, Firebase Hosting',
		clientSite: 'https://github.com/NishatTasnim00/kidzland-client',
		serverSite: 'https://github.com/NishatTasnim00/kidzland-server',
		liveSite: 'https://kidzland-dfb3b.web.app/',
		img1: 'https://i.ibb.co/85Ykppt/kidzland-dfb3b-web-app.png',
		img2: 'https://i.ibb.co/VwVzgtZ/kidzland-dfb3b-web-app-1.png',
		img3: 'https://i.ibb.co/ykc5NpY/kidzland-dfb3b-web-app-2.png',
	},
	{
		id: 3,
		name: 'Yummy Bytes',
		details: 'A website that displayed famous chefs and their recipes.',
		features: [
			'Some popular chefs and their recipes with ratings are presented on the website.',
			'To see details, user must log in. Then they can select the recipes as favorite as well.',
			'User can update their profile information such as profile photo, name, etc.',
		],
		technologies:
			'ReactJS, React Router Dom, DaisyUI, Firebase Authentication, ExpressJS, NodeJS, MongoDB, Firebase Hosting',
		clientSite: 'https://github.com/NishatTasnim00/yummy-bytes-client',
		serverSite: 'https://github.com/NishatTasnim00/yummy-bytes-server',
		liveSite: 'https://yummy-bytes.web.app/',
		img1: 'https://i.ibb.co/nRhGL4X/yummy-bytes-web-app.png',
		img2: 'https://i.ibb.co/6bpCVJ0/yummy-bytes-web-app-1.png',
		img3: 'https://i.ibb.co/3N1yVNv/yummy-bytes-web-app-2.png',
	},
];

    return (
			<div className="bg-black min-h-screen lg:p-28 flex flex-col items-center">
				<h1
					className="flex justify-center title-text text-3xl pb-10"
					data-aos="fade-up"
					data-aos-delay="30"
					data-aos-duration="1000"
				>
					Projects
				</h1>
				<div className="grid lg:grid-cols-3">
					{myProjects.map((project) => (
						<ProjectCard project={project}></ProjectCard>
					))}
				</div>
			</div>
		);
};

export default Projects;