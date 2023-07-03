import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import About from '../pages/Home/About/About';
import Skill from '../pages/Home/Skill/Skill';
import Projects from '../pages/Home/Projects/Projects';
import Contact from '../pages/Home/Contact/Contact';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children:[
			{
				path:'/',
				element:<Home></Home>
			},
			{
				path:'/about',
				element:<About></About>
			},
			{
				path:"/skill",
				element:<Skill></Skill>
			},
			{
				path:'/projects',
				element:<Projects></Projects>
			},
			{
				path:'/contact',
				element:<Contact></Contact>
			}
		]
	},
]);

