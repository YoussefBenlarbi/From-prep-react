import { useState } from 'react';
import Select from './Components/Select';

function MyForm() {
	
	function HandleNom(e) {
		setNom(e.target.value);
	}
	function Handleprenom(e) {
		setPrenom(e.target.value);
	}
	function Handledescription(e) {
		setDescription(e.target.value);
	}
	function HandleSexe(e) {
		setSexe(e.target.value);
	}
	function Handledate(e) {
		setDate(e.target.value);
	}
	
	function HandleButton(e) {
		e.preventDefault();
		setInformation(
			`Nom : ${nom}
			 Prenom :${prenom}
			 Date : ${date}
			 Description :${description}
			 Nationalite :${nationalite}
			 Sexe : ${sexe} 
			 Langues: ${lang}`
		);
	}
	function HandleLang(e) {
		e.target.checked
			? setLang([...lang, e.target.value])
			: setLang(lang.filter((element) => element !== e.target.value));
	}
	const [nom, setNom] = useState('');
	const [prenom, setPrenom] = useState('');
	const [date, setDate] = useState('');
	const [description, setDescription] = useState('');
	const [nationalite, setNationalite] = useState('rien');
	const [sexe, setSexe] = useState('R');
	const [lang, setLang] = useState([]);
	const [information, setInformation] = useState('');
	const StyleLabel = { color: 'red' };
	return (
		<div>
			<h1>Formulaire a Saisir : </h1>
			<form onSubmit={(e) => HandleButton(e)}>
				<table>
					<tr>
						<td>
							<label htmlFor="nom">Nom :</label>
						</td>
						<td>
							<input
								type="text"
								placeholder="Saisir le Nom ...."
								onChange={(e) => HandleNom(e)}
							/>
						</td>
						<td style={StyleLabel}>{nom.trim() === '' ? '(*)' : ' '}</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="prenom">prenom :</label>
						</td>
						<td>
							<input
								type="text"
								placeholder="Saisir le Prenom ...."
								onChange={(e) => Handleprenom(e)}
							/>
						</td>
						<td style={StyleLabel}>{prenom.trim() === '' ? '(*)' : ' '}</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="date">date :</label>
						</td>
						<td>
							<input
								type="date"
								placeholder="Saisir le date ...."
								onChange={(e) => Handledate(e)}
							/>
						</td>
						<td style={StyleLabel}>{date.trim() === '' ? '(*)' : ' '}</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="description">description :</label>
						</td>
						<td>
							<textarea
								placeholder="Saisir la description  ...."
								onChange={(e) => Handledescription(e)}
								cols="20"
								rows="5"
							></textarea>
						</td>
						<td style={StyleLabel}>
							{description.trim() === '' ? '(*)' : ' '}
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="nationalite">nationalite :</label>
						</td>
						<td>
							<Select
								onChange={setNationalite}
								options={['Tanzania', 'Togo', 'Haiti', 'Mozanbi9']}
							/>
						</td>
						<td style={StyleLabel}>{nationalite === 'rien' ? '(*)' : ' '}</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="sexe">Sexe :</label>
						</td>
						<td>
							Male :
							<input
								type="radio"
								name="sexe"
								value="Male"
								onChange={(e) => HandleSexe(e)}
							/>
							Female :
							<input
								type="radio"
								name="sexe"
								value="Female"
								onChange={(e) => HandleSexe(e)}
							/>
						</td>
						<td style={StyleLabel}>{sexe.trim() === 'R' ? '(*)' : ' '}</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="lang">lang :</label>
						</td>
						<td>
							Fr
							<input
								type="checkbox"
								value="Francais"
								onChange={(e) => HandleLang(e)}
							/>
							Ang
							<input
								type="checkbox"
								value="Anglais"
								onChange={(e) => HandleLang(e)}
							/>
							Ar
							<input
								type="checkbox"
								value="Arabe"
								onChange={(e) => HandleLang(e)}
							/>
						</td>
						<td style={StyleLabel}>{lang.length === 0 ? '(*)' : ' '}</td>
					</tr>
					<tr>
						<td colSpan={3}>
							<button> envoyer </button>
						</td>
					</tr>
					<tr>
						<td colSpan={3}>{information}</td>
					</tr>
				</table>
			</form>
		</div>
	);
}
export default MyForm;
