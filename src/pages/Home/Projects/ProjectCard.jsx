import React, { useEffect } from "react";
import "./ProjectCard.css";
import Slider from "./Slider";
import { BsGithub } from "react-icons/bs";
import Aos from "aos";

const ProjectCard = ({ project }) => {
  console.log(project);
  useEffect(() => {
    Aos.init();
  }, []);
  const {
    name,
    details,
    features,
    technologies,
    clientSite,
    serverSite,
    liveSite,
    img1,
    img2,
    img3,
  } = project;
  return (
    <>
      <div
        data-aos="zoom-in-up"
        className="box h-80 w-96 hover:w-96 lg:hover:h-screen
hover:h-[650px] hover:bg-gray-200
					object-contain transition duration-300  group relative flex justify-center rounded-lg"
      >
        <div className="absolute top-5 h-60 w-10/12 group-hover:-top-20 group-transition duration-300 rounded-lg">
          <Slider img1={img1} img2={img2} img3={img3}></Slider>
        </div>
        <h1 className="title absolute top-64 pt-5 group-hover:top-40 group-transition duration-300 font-extrabold text-lg text-gray-300 group-hover:text-gray-800">
          {name}
        </h1>
        <div className="absolute top-64 group-hover:pt-4 hidden group-hover:block group-hover:top-48 text-center group-transition duration-300 px-5 ">
          <p className="font-semibold text-gray-600">{details}</p>
          <h1 className="font-bold text-left">Key Features:</h1>
          <ul className="text-justify py-1">
            
            {features.map((feature, i) => (
              <li key={i+1}>
                <span className="text-pink-600 font-black pr-2">🏵</span>
                {feature}
              </li>
            ))}
          </ul>
          {/* <div className="text-justify  py-1 inline-block">
							{technologies.map((technology) => (
								<p>
									||{technology}
								</p>
							))}
						</div> */}
          <p className="text-justify  py-1">
            <span className="font-bold">Used Technology:</span>
            <br />
            {technologies}
          </p>
          <div className="absolute -bottom-20">
            <div className="flex justify-between">
              <div>
                <a
                  href={clientSite}
                  className="flex gap-2 space-y-1 cursor-pointer font-bold"
                  cursor-
                >
                  <BsGithub size={20} />
                  Client Site
                </a>
                <a
                  href={serverSite}
                  className="flex gap-2 cursor-pointer font-bold"
                >
                  <BsGithub size={20} />
                  Server Site
                </a>
              </div>

              <a href={liveSite} className="ml-36 btn btn-outline ">
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
