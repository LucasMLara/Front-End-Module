import React, { Component } from 'react';
import PropType from 'prop-types';

class Image extends Component {
  render() {
    const { source, alternativeText } = this.props;
    return ( 
      <>
        <img src={source} alt={alternativeText} />
      </>
    )
  }
}

Image.propTypes = {
  source: PropType.string.isRequired,
  alternativeText: PropType.string.isRequired
}.isRequired

export default Image;