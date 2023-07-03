import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const navItem = (
			<>
				<li>
					<NavLink
						to="/"
						className={(isActive) => (isActive ? 'active' : 'default')}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={(isActive) => (isActive ? 'active' : 'default')}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to='/skill' className={(isActive) => (isActive ? 'active' : 'default')}>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to='/projects' className={(isActive) => (isActive ? 'active' : 'default')}>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink  className={(isActive) => (isActive ? 'active' : 'default')} disable >
						Blog
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' className={(isActive) => (isActive ? 'active' : 'default')}>
						Contact
					</NavLink>
				</li>
			</>
		);
    return (
			<div className="navbar bg-gray-300 bg-opacity-70 max-w-8xl mx-auto lg:px-20 fixed z-50">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navItem}
						</ul>
					</div>
					<a className="btn btn-ghost normal-case text-2xl">NTasnim</a>
				</div>
				<div className="navbar-end  hidden lg:flex">
					<ul className="menu-horizontal px-1 font-medium text-lg text-gray-950 space-x-3">
						{navItem}
					</ul>
				</div>
				{/* <div className="">
					<a className="btn">Button</a>
				</div> */}

			</div>
		);
};

export default Navbar;