import { NavLink, useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
	// General
	const navigate = useNavigate()

	return (
		<>
			<header>
				{/* Logo */}
				<NavLink to='/'>
					<img
						src={require('../../../assets/images/logo.png')}
						alt='UnifiedWork Solutions Logo'
					/>
				</NavLink>
				{/* Navigation */}
				<nav>
					<ul>
						{/* Home (NavLink) */}
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						{/* Services (NavLink) */}
						<li>
							<NavLink to='/services'>What we offer</NavLink>
						</li>
						{/* Contact Us (Button) */}
						<button onClick={() => navigate('/contact-us')}>Contact Us</button>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header
