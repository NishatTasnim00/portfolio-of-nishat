import React from 'react';
import './Media.css'
const Media = () => {
    return (
			<div className='media'>
				<ul className="flex justify-center gap-3 mt-5 lg:justify-start">
					<li>
						<i class="fab fa-facebook-f"></i>
					</li>
					<li>
						<i class="fab fa-instagram"></i>
					</li>
					<li>
						<i class="fab fa-linkedin-in"></i>
					</li>
					<li>
						<i class="fab fa-github"></i>
					</li>
				</ul>
			</div>
		);
};

export default Media;