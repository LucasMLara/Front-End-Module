import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
  
    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { shoppingList.map((item, index) => <li key={index}>{ item }</li> )}
        </ul>
      </div>
    );
  }
}

export default App;