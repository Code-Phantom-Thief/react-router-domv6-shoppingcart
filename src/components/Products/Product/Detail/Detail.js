import { useContext, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataContext } from '../../../Data/DataProvider';
import Colors from '../Colors/Colors';
import Sizes from '../Sizes/Sizes';
import Thumb from './Thumb/Thumb';

const Detail = () => {
	const { id } = useParams();
	const value = useContext(DataContext);
	const [products] = value.products;
	const addCart = value.addCart;

	const [index, setIndex] = useState(0);
	const imgDiv = useRef();

	const details = products.filter((product, index) => {
		return product._id === id;
	});

	const handleMouseMove = (e) => {
		const { left, top, width, height } =
			e.target.getBoundingClientRect();
		const x = ((e.pageX - left) / width) * 100;
		const y = ((e.pageY - top) / height) * 100;
		imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
	};

	return (
		<>
			{details.map((product) => (
				<div className='details' key={product._id}>
					<div
						onMouseMove={handleMouseMove}
						onMouseLeave={() =>
							(imgDiv.current.style.backgroundPosition = `center`)
						}
						ref={imgDiv}
						className='img-container'
						style={{
							background: `url(${product.images[index]})`,
						}}
					></div>
					<div className='box-details'>
						<h2 title={product.title}>{product.title}</h2>
						<h3>${product.price}</h3>
						<Colors colors={product.colors} />
						<Sizes sizes={product.sizes} />
						<p>{product.description}</p>
						<p>{product.content}</p>
						<Thumb
							images={product.images}
							setIndex={setIndex}
						/>
						<Link to="/cart"
							className='cart'
							onClick={() => addCart(product._id)}
						>
							Add to cart
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default Detail;
