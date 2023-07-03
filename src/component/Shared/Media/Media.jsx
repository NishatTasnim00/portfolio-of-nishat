import React from 'react';
import './Media.css'
import { Link } from 'react-router-dom';
const Media = () => {
    return (
			<div className="media">
				<ul className="flex justify-center gap-3 mt-5 lg:justify-start">
					{/* <li>
						<Link to="https://web.facebook.com/profile.php?id=100008273834246">
							<i class="fab fa-facebook-f"></i>
						</Link>
					</li>
					<li>
						<Link to="">
							<i class="fab fa-instagram"></i>
						</Link>
					</li> */}
					<li>
						<Link to="https://www.linkedin.com/in/nishat-tasnim00/">
							<i class="fab fa-linkedin-in"></i>
						</Link>
					</li>
					<li>
						<Link to="https://github.com/NishatTasnim00">
							<i class="fab fa-github"></i>
						</Link>
					</li>
				</ul>
			</div>
		);
};

export default Media;