import React from 'react';
// import Select from './Components/Select.js';
class MyClassForm extends React.Component {
	constructor(props) {
		super(props);
		MyClassForm.Stylelabl = { color: 'red' };
		MyClassForm.photos = ['photo/photo1.png','photo/photo2.jpg','photo/photo3.png'];
		this.state = {
			nom: '',
			prenom: '',
			date: '',
			description: '',
			nationalite: 'rien',
			sexe: 'R',
			lang: [],
			information: '',
			photo: '',
		};
	}

	HandleNom(e) {
		this.setState({ nom: e.target.value });
	}
	Handleprenom(e) {
		this.setState({ prenom: e.target.value });
	}
	Handledescription(e) {
		this.setState({ description: e.target.value });
	}
	HandleNationalite(e) {
		this.setState({ nationalite: e.target.value });
	}
	HandleSexe(e) {
		this.setState({ sexe: e.target.value });
	}
	Handledate(e) {
		this.setState({ date: e.target.value });
	}
	Handlephoto(e) {
		this.setState({ photo: e.target.value });
	}
	HandleLang(e) {
		e.target.checked
			? this.setState({ lang: [...this.state.lang, e.target.value] })
			: this.setState({
					lang: this.state.lang.filter((element) => element !== e.target.value),
			  });
	}
	HandleButton(e) {
		e.preventDefault();
		this.setState({
			information: `Nom :${this.state.nom}
             Prenom :${this.state.prenom}
             Description :${this.state.description} 
             Nationalite : ${this.state.nationalite}
             Sexe : ${this.state.sexe}
             Langues : ${this.state.lang}

			  img : ${(<img src={this.state.photo} width={'50px	'} alt={'alt attribut'}/>)}
			  `,
			//   ${<img src={}/>}
		});
	}

	render() {
		return (
			<div>
				<h1>Formulaire a Saisir : </h1>
				{/* <form> */}
				<form onSubmit={(e) => this.HandleButton(e)}>
					<table>
						<tr>
							<td>
								<label htmlFor="nom">Nom :</label>
							</td>
							<td>
								<input
									type="text"
									placeholder="Saisir le Nom ...."
									onChange={(e) => this.HandleNom(e)}
								/>
							</td>
							<td style={MyClassForm.Stylelabl}>
								{this.state.nom.trim() === '' ? '(*)' : ''}
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="prenom">prenom :</label>
							</td>
							<td>
								<input
									type="text"
									placeholder="Saisir le Prenom ...."
									onChange={(e) => this.Handleprenom(e)}
								/>
							</td>
							<td style={MyClassForm.Stylelabl}>
								{this.state.prenom.trim() === '' ? '(*)' : ''}
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="photo">photo :</label>
							</td>
							<td>
								<select onChange={(e) => this.Handlephoto(e)}>
									{MyClassForm.photos.map((p, index) => (
										<option value={p}>{index}</option>
									))}
								</select>
							</td>
							<td style={MyClassForm.Stylelabl}>
								{/* {this.state.photo.trim() === '' ? '(*)' : this.state.photo} */}
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="date">date :</label>
							</td>
							<td>
								<input
									type="date"
									placeholder="Saisir le date ...."
									onChange={(e) => this.Handledate(e)}
								/>
							</td>
							<td style={MyClassForm.Stylelabl}>
								{this.state.date.trim() === '' ? '(*)' : ''}
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="description">description :</label>
							</td>
							<td>
								<textarea
									placeholder="Saisir la description..."
									onChange={(e) => this.Handledescription(e)}
									cols="20"
									rows="5"
								></textarea>
							</td>
							<td style={MyClassForm.Stylelabl}>
								{this.state.description.trim() === '' ? '(*)' : ''}
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="nationalite">nationalite :</label>
							</td>
							<td>
								{/* <Select
									onChange={this.HandleNationalite}
									options={['Tanzania', 'Togo', 'Haiti', 'Mozanbi9']}
								/> */}
								<select onChange={(e) => this.HandleNationalite(e)}>
									<option value="rien">Choisir Nationalite </option>

									<option value="Marocain">Marocain</option>
									<option value="Francais">Francais</option>
									<option value="Togo">Togo</option>
								</select>
							</td>
							<td style={MyClassForm.Stylelabl}>
								{this.state.nationalite === 'rien' ? '(*)' : ''}
							</td>
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
									onChange={(e) => this.HandleSexe(e)}
								/>
								Female :
								<input
									type="radio"
									name="sexe"
									value="Female"
									onChange={(e) => this.HandleSexe(e)}
								/>
							</td>
							<td style={MyClassForm.Stylelabl}>
								{this.state.sexe === 'R' ? '(*)' : ''}
							</td>
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
									onChange={(e) => this.HandleLang(e)}
								/>
								Ang
								<input
									type="checkbox"
									value="Anglais"
									onChange={(e) => this.HandleLang(e)}
								/>
								Ar
								<input
									type="checkbox"
									value="Arabe"
									onChange={(e) => this.HandleLang(e)}
								/>
							</td>
							<td style={MyClassForm.Stylelabl}>
								{this.state.lang.length === 0 ? '(*)' : ''}
							</td>
						</tr>
						<tr>
							<td colSpan={3}>
								<button>Envoyer</button>
							</td>
						</tr>
						<tr>
							<td colSpan={3}>{this.state.information}</td>
						</tr>
					</table>
				</form>
			</div>
		);
	}
}
export default MyClassForm;
