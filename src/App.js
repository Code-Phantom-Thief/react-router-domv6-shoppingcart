import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import DataProvider from './components/Data/DataProvider';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Detail from './components/Products/Product/Detail/Detail';
import Cart from './components/Cart/Cart'

function App() {
	return (
		<DataProvider>
			<div className='App'>
				<BrowserRouter>
					<Header />

					<section>
						<Routes>
							<Route
								path='/products'
								element={<Products />}
							/>
							<Route
								path='/products/:id'
								element={<Detail />}
							/>
							<Route
								path='/cart'
								element={<Cart />}
							/>
						</Routes>
					</section>
				</BrowserRouter>
			</div>
		</DataProvider>
	);
}

export default App;
