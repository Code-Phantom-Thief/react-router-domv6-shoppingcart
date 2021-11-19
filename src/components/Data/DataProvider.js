import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [products, setProducts] = useState([
		{
			_id: '1',
			title: 'Endeavour Tourbillon',
			images: [
				'https://www.h-moser.com/wp-content/uploads/2021/04/HMoser_1804-0401_prod-img-261x404.png',
				'https://www.h-moser.com/wp-content/uploads/2021/04/HMoser_1804-0222_gallery-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_1804-1206_p-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_1804-0214_p-259x402.png',
			],
			description:
				'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
			content:
				'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
			colors: ['red', 'black', 'teal'],
			sizes: ['XL', 'L', 'M', 'XM', 'LX'],
			price: 101,
			count: 1,
		},
		{
			_id: '2',
			title: 'ENDEAVOUR TOURBILLON',
			images: [
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_1804-0204_tn_2-261x404.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_1804-0219_p_2-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_1804-0205_p-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_1804-0204_p_2-259x402.png',
			],
			description:
				'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
			content:
				'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
			colors: ['red', 'black', 'teal'],
			sizes: ['XL', 'L', 'M', 'XM', 'LX'],
			price: 102,
			count: 1,
		},
		{
			_id: '3',
			title: 'Venturer',
			images: [
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_2327-0222_tn-261x404.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_2327-0411_p-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_2327-0220_p-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_2327-0410_p-259x402.png',
			],
			description:
				'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
			content:
				'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
			colors: ['red', 'black', 'teal'],
			sizes: ['XL', 'L', 'M', 'XM', 'LX'],
			price: 103,
			count: 1,
		},
		{
			_id: '4',
			title: 'Pioneer Perpetual Calendar MD',
			images: [
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_3808-1200_tn-261x404.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_3808-1200_v.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_3800-1200_p-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_3800-0900_p-259x402.png',
			],
			description:
				'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
			content:
				'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
			colors: ['red', 'black', 'teal'],
			sizes: ['XL', 'L', 'M', 'XM', 'LX'],
			price: 104,
			count: 1,
		},
		{
			_id: '5',
			title: 'Heritage Perpetual Calendar',
			images: [
				'https://www.h-moser.com/wp-content/uploads/2021/06/HMoser_8800-0203_prod-img-261x404.png',
				'https://www.h-moser.com/wp-content/uploads/2021/06/HMoser_8800-0203_gallery-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_8804-1200_p-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_8804-0200_p-259x402.png',
			],
			description:
				'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
			content:
				'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
			colors: ['red', 'black', 'teal'],
			sizes: ['XL', 'L', 'M', 'XM', 'LX'],
			price: 105,
			count: 1,
		},
		{
			_id: '6',
			title: 'Endeavour Minute Repeater',
			images: [
				'https://www.h-moser.com/wp-content/uploads/2021/01/HMoser_1903-0500_Endeavour_MinRep_product-img-261x404.png',
				'https://www.h-moser.com/wp-content/uploads/2021/01/HMoser_1903-0500_Endeavour_MinRep_gallery-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_5901-0206_p-259x402.png',
				'https://www.h-moser.com/wp-content/uploads/2020/08/HMoser_8341-0400_p-259x402.png',
			],
			description:
				'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
			content:
				'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
			colors: ['red', 'black', 'teal'],
			sizes: ['XL', 'L', 'M', 'XM', 'LX'],
			price: 106,
			count: 1,
		},
	]);

	const [cart, setCart] = useState([]);

	const addCart = (id) => {
		const check = cart.every((item) => {
			return item._id !== id;
		});
		if (check) {
			const data = products.filter((product) => {
				return product._id === id;
			});
			setCart([...cart, ...data]);
		} else {
			alert('The product has been added to the cart');
		}
	};

	const value = {
		products: [products, setProducts],
		cart: [cart, setCart],
		addCart: addCart,
	};

	useEffect(() => {
		const dataCart = JSON.parse(
			localStorage.getItem('dataCart')
		);
		if (dataCart) setCart(dataCart);
	}, []);

	useEffect(() => {
		localStorage.setItem('dataCart', JSON.stringify(cart));
	}, [cart]);

	return (
		<DataContext.Provider value={value}>
			{children}
		</DataContext.Provider>
	);
};

export default DataProvider;
