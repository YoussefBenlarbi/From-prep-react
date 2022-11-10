function Select(props){
    function HandleNationalite(e) {
		this.props.onChange(e.target.value);
	}
    return(
        <select onChange={HandleNationalite}>
            <option value="rien">Choisir Nationalite</option>
            {props.options.map(element => <option value={element} >{element}</option>)}
        </select>
    )
}
// import React from 'react';

// // }
// class Select extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.props.state = {
			
// 			nationalite: 'rien'
// 		};
// 	}
//     render(){
//         return(
//             <select>
//                 {/* {this.props.options.map(e =><option value={e}>{e}</option> )} */}
//             </select>
//         )
//     }
//
export default Select;
