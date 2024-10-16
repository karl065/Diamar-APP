import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import TokenCaducidad from './Components/TokenCaducidad/TokenCaducidad.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<TokenCaducidad />
			<App />
		</BrowserRouter>
	</Provider>
);
