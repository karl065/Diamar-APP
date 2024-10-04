import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Layout } from './Views/index.jsx';

const App = () => {
	return (
		<div id="app-container">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
