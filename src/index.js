import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// import Authentification from './S9/Authentification';
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
// const [value,setValue] =useState(false);

root.render(
	<React.StrictMode>
    <h2 style={{color:"firebrick"}}>Saisir les Infos !</h2>
		<App  />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
