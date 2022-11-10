function Select(props){
    function HandleNationalite(e) {
		props.onChange(e.target.value);
	}
    return(
        <select onChange={HandleNationalite}>
            <option value="rien">Choisir Nationalite</option>
            {props.options.map(element => <option value={element} >{element}</option>)}
        </select>
    )
}
export default Select;