import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const array = ['zuar','estudar','se desesperar', 'tentar', 'falhar']

class App extends React.Component {
  render() {
  return (
    <ul>
        {array.map((palavra) => task(palavra))}
    </ul>
  );
  }
}
export default App;
