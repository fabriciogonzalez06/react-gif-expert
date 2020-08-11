import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    const handledInputChange = (e) => {
        setinputValue(e.target.value);
        console.log('change input change llamado')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length>2){

            setCategories((categories)=> [inputValue,...categories]);
            setinputValue('');
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                placeholder="Ingrese una categoria y presione enter"
                onChange={handledInputChange}
                value={inputValue}
                className="form-control mb-2"
                type="text"
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}

export default AddCategory;
