import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../component/Shared/Navbar/Navbar';
import Footer from '../component/Shared/Footer/Footer';
import GoToTop from '../component/GoToTop/GoToTop';
import Home from '../pages/Home/Home/Home';
import Loading from '../component/Loading/Loading';

const Main = () => {
	// const [loading, setLoading]  = useState(false)
	// if(loading){
	// 	return <Loading></Loading>
	// }
	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
			<GoToTop></GoToTop>
		</>
	);
};

export default Main;
