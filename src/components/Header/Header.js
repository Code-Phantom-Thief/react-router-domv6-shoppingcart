import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../svg/bars-solid.svg';
import Close from '../svg/times-solid.svg';
import Cart from '../svg/cart.svg';
import { DataContext } from '../Data/DataProvider';

const Header = () => {
	const [menu, setMenu] = useState(false);
	const value = useContext(DataContext);
	const [cart] = value.cart;

	const toggleMenu = () => {
		setMenu(!menu);
	};

	const styleMenu = {
		left: menu ? 0 : '-100%',
	};

	return (
		<header>
			<div className='logo'>
				<h1>
					<Link to='/products'>Citizen</Link>
				</h1>
			</div>
			<ul style={styleMenu}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/products'>Product</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<Link to='/'>Login / Register</Link>
				</li>
				<li onClick={toggleMenu}>
					<img
						src={Close}
						alt='close_image'
						width='30'
						className='menu'
					/>
				</li>
			</ul>
			<div className='menu' onClick={toggleMenu}>
				<img src={Menu} alt='menu_image' width='30' />
			</div>

			<div className='cart-icon'>
				<span>{cart.length}</span>
				<Link to='/cart'>
					<img src={Cart} alt='cart' width='30' />
				</Link>
			</div>
		</header>
	);
};

export default Header;
