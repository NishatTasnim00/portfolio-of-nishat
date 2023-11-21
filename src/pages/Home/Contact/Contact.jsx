import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsPersonFill } from 'react-icons/bs';
import { AiTwotoneMail, AiFillMessage } from 'react-icons/ai';
import ContactCard from '../../../component/Contact/ContactCard';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(() => {
			Aos.init();
		}, []);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				`service_20se7im`,
				'template_rx7s8pk',
				form.current,
				'mp8T29xYf-HKh_nAi'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="w-full min-h-screen bg-black lg:px-40 py-16">
			<h1
				className="title-text text-center font-bold text-4xl"
				data-aos="flip-up"
				data-aos-delay="30"
				data-aos-duration="1000"
			>
				Contact Me
			</h1>
			<div className="flex flex-col-reverse lg:flex-row lg:justify-between">
				<ContactCard></ContactCard>
				<div
					className="lg:w-5/12 rounded-lg bg-gray-800  p-10 mx-8 lg:mx-0 mb-10 lg:mb-0 hidden lg:block"
					data-aos-lg
					data-aos="fade-left"
					data-aos-delay="30"
					data-aos-duration="1000"
				>
					<form ref={form} onSubmit={sendEmail}>
						<div className="form-control group">
							<label className="label block">
								<span className="label-text flex gap-2">
									<BsPersonFill size={25} />
									Name
								</span>
							</label>
							<input
								className="input input-bordered"
								type="text"
								name="user_name"
							/>
						</div>
						<div className="form-control">
							<label className="label block">
								<span className="label-text">
									<AiTwotoneMail size={25} />
									Email
								</span>
							</label>
							<input
								className="input input-bordered"
								type="email"
								name="user_email"
							/>
						</div>
						<div className="form-control">
							<label className="label block">
								<span className="label-text">
									<AiFillMessage size={25} />
									Message
								</span>
							</label>
							<textarea
								className="input input-bordered min-h-[120px]"
								type="text"
								name="message"
							/>
						</div>
						<div className="flex justify-center pt-5">
							<button className="btn btn-common" type="submit">
								Send
							</button>
						</div>
					</form>
				</div>
				<div
					className="lg:w-5/12 rounded-lg bg-gray-800 p-10 mx-8 lg:mx-0 mb-10 lg:mb-0 lg:hidden"
					data-aos-lg
					data-aos="fade-up"
					data-aos-delay="30"
					data-aos-duration="1000"
				>
					<form ref={form} onSubmit={sendEmail}>
						<div className="form-control group">
							<label className="label block">
								<span className="label-text flex gap-2">
									<BsPersonFill size={25} />
									Name
								</span>
							</label>
							<input
								className="input input-bordered"
								type="text"
								name="user_name"
							/>
						</div>
						<div className="form-control">
							<label className="label block">
								<span className="label-text">
									<AiTwotoneMail size={25} />
									Email
								</span>
							</label>
							<input
								className="input input-bordered"
								type="email"
								name="user_email"
							/>
						</div>
						<div className="form-control">
							<label className="label block">
								<span className="label-text">
									<AiFillMessage size={25} />
									Message
								</span>
							</label>
							<textarea
								className="input input-bordered"
								type="text"
								name="message"
							/>
						</div>
						<div className="flex justify-center pt-5">
							<button className="btn btn-common" type="submit">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
