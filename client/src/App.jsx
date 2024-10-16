import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Layout, Login, Usuarios } from './Views/index.jsx';

const App = () => {
	return (
		<div id="app-container">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Admin/Usuarios" element={<Usuarios />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
