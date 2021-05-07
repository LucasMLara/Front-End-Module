import React from 'react';
import '../pokemon.css';

import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() { 
    const { name, type, image, averageWeight, measurementUnit } = this.props
      
    return(
        <section className="pokemonz">
        <h1>{name}</h1>
        <h2>{type}</h2>
        <p>{averageWeight}{measurementUnit}</p>
        <img src = {image} alt={name}/>
        </section>
          )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string
}

export default Pokemon;