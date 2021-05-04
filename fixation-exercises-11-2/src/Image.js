import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText, corno } = this.props;
    return ( 
      <>
        <img src={source} alt={alternativeText} />
        <p>{corno}</p>
      </>
    )
  }
}

export default Image;