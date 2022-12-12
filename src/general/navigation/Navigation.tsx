import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<ul>
				<li><Link to={'/'}>Home</Link></li>
				<li><Link to={'/cart'}>Cart</Link></li>
				<li><Link to={'/login'}>Log in</Link></li>
				<li><Link to={'/category'}>Category</Link></li>
			</ul>
		</div>
	);
};

export default Navigation;