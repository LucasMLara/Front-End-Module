import React, { Component } from 'react';
import Xablau from 'prop-types';

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
  source: Xablau.string.isRequired,
  alternativeText: Xablau.string.isRequired
}.isRequired

export default Image;