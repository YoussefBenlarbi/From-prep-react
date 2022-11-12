import { useState } from 'react';
import Comptes from '../data/Comptes';
import {ButtonS} from './../Components/styles/Button.styled'
function Authentification() {
	// const StyleButton = {
	// 	color: '#fff',
	// 	borderColor: 'firebrick',
	// 	padding: '5px',
	// 	width: '80px',
	// 	fontSize: '14px',
	// 	fontFamilly: 'sans-serif',
	// 	backgroundColor: 'firebrick',
	// 	borderRadius: '3px',
	// 	marginTop: '10px',
	// };
	const lblStyle = { color: 'red' };
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isLogged, setisLogged] = useState('');
	const [info, setInfo] = useState('');

	function Check(e) {
		e.preventDefault();
		const compte = Comptes.find(
			(acc) => acc.login === login && acc.password === password
		);
		if (compte != null) {
			setisLogged(true);
		} else {
			if (login.trim() !== '' || password.trim() !== '') {
				setisLogged(false);
			} else {
				// setisLogged(false);
				setInfo('Tous les champs sont obligatoires !');
			}
		}
	}

	// const isLoggedIn = compte != null ? true : false;

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<form
				onSubmit={(e) => Check(e)}
				style={{
					border: '2px solid ',
					padding: '5px',
					borderRadius: '5px',
					width: '400px',
				}}
			>
				<h2
					style={{
						margin: ' 0px ',
						paddingLeft: '100px',
						paddingBottom: '10px',
						color: 'firebrick',
					}}
				>
					Saisir les Infos !
				</h2>
				<table>
					<tr>
						<td
							style={{ fontWeight: 'bold', fontSize: '18px', color: '#383838' }}
						>
							Login :
						</td>
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
						<td
							style={{ fontWeight: 'bold', fontSize: '18px', color: '#383838' }}
						>
							password :
						</td>
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
							<span style={{ paddingLeft: '130px' }}>
								{' '}
								<ButtonS >Connect</ButtonS>{' '}
							</span>
						</td>
					</tr>
					<tr>
						<td
							colSpan={3}
							style={{
								fontWeight: 'bold',
								fontSize: '18px',
								color: '#383838',
								paddingLeft: '70px',
							}}
						>
							{isLogged === ''
								? info
								: isLogged === true
								? 'Connected'
								: 'Les infos incorrect !'}
						</td>
					</tr>
				</table>
			</form>
		</div>
	);
}
export default Authentification;
