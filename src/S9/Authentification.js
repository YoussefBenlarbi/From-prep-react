import { useState } from 'react';
import Comptes from '../data/Comptes';
function Authentification() {
	// const StyleButton = {
	// 	color: '#fff',
	// 	borderColor: ' #5c5cff',
	// 	padding: '5px',
	// 	width: '120px',
	// 	fontSize: '16px',
	// 	fontFamilly: 'sans-serif',
	// 	backgroundColor: '#5c5cff',
	// 	borderRadius: '5px',
	// };
	const lblStyle = { color: 'red' };
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isLogged, setisLogged] = useState(false);

	function Check(e) {
		e.preventDefault();
		const compte = Comptes.find(
			(acc) => acc.login === login && acc.password === password
		);
		if (compte != null) {
			setisLogged(true);
		} else {
			setisLogged(false);
		}
	}

	// const isLoggedIn = compte != null ? true : false;

	return (
		<div>
			<form onSubmit={(e) => Check(e)}>
				<table>
					<tr>
						<td>Login</td>
						<td>
							<input
								type="text"
								onChange={(e) => setLogin(e.target.value)}
								placeholder="Saisir Login ..."
							/>
						</td>
						<td style={lblStyle}>{login.trim() === '' ? '(*)' : ''}</td>
					</tr>
					<tr>
						<td>password</td>
						<td>
							<input
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Saisir password ..."
							/>
						</td>
						<td style={lblStyle}>{password.trim() === '' ? '(*)' : ''}</td>
					</tr>

					<tr>
						<td colSpan={3}>
							<button>Connect</button>{' '}
						</td>
					</tr>
					<tr>
						<td colSpan={3}>{isLogged === false ? '' : 'Connected !'}</td>
					</tr>
				</table>
			</form>
		</div>
	);
}
export default Authentification;
