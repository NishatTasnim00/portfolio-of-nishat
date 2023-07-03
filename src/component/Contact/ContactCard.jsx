import React, { useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill,BsWhatsapp } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Media from '../Shared/Media/Media';

const ContactCard = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
		<>
		<div
				className="text-gray-300 space-y-8 my-auto mx-auto hidden lg:block"
				data-aos-lg
				data-aos="fade-right"
				data-aos-delay="30"
				data-aos-duration="1000"
			>
				<div className="flex gap-8">
					<div className="pt-3">
						<MdEmail size={30} />
					</div>
					<div>
						<h1>Email</h1>
						<p>tasnim.nt00@gmail.com</p>
					</div>
				</div>
				<div className="flex gap-8">
					<div className="pt-3">
						<BsWhatsapp size={38} />
					</div>
					<div>
						<h1>Phone</h1>
						<p>(+880)1308024634</p>
					</div>
				</div>
				<div className="flex gap-8 ">
					<div className="pt-3">
						<FaLocationArrow size={30} />
					</div>
					<div>
						<h1>Location</h1>
						<p>Dhaka, Bangladesh</p>
					</div>
				</div>
				<Media></Media>
			</div>
			<div
				className="text-gray-300 space-y-8 my-auto mx-auto lg:hidden"
				data-aos="fade-down"
				data-aos-delay="30"
				data-aos-duration="1000"
			>
				<div className="flex gap-8">
					<div className="pt-3">
						<MdEmail size={30} />
					</div>
					<div>
						<h1>Email</h1>
						<p>tasnim.nt00@gmail.com</p>
					</div>
				</div>
				<div className="flex gap-8">
					<div className="pt-3">
						<BsWhatsapp size={38} />
					</div>
					<div>
						<h1>Phone</h1>
						<p>(+880)1308024634</p>
					</div>
				</div>
				<div className="flex gap-8 ">
					<div className="pt-3">
						<FaLocationArrow size={30} />
					</div>
					<div>
						<h1>Location</h1>
						<p>Dhaka, Bangladesh</p>
					</div>
				</div>
				<Media></Media>
			</div></>
			
		);
};

export default ContactCard;