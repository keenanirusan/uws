import './styles/root-style.scss'
import './App.scss'
import Footer from './components/shared/Footer/Footer'
import Header from './components/shared/Header/Header'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
	return (
		<main>
			<Router>
				{/* Header */}
				<Header />
				{/* Content */}
				<div className='content'>
					<Routes>
						{/* Home - Landing page */}
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
				{/* Footer */}
				<Footer />
			</Router>
		</main>
	)
}

export default App
