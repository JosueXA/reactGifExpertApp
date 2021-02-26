import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    
    setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 2){
      setCategories( cats => [ inputValue, ...cats] );
      setInputValue('');
    }

  }

  return (
    <form onSubmit={ handleSubmit }>
      <p>Nombre o serie que te guste</p>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
        placeholder="Buscar gif"
      />
    </form>
  )

}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
