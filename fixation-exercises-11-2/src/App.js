import React from 'react';
import Image from './Image.js';
import ImageFnc from './ImageFnc';

function App() {
  return (
    <div className="App">
<Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="CuteKitty"/>
<ImageFnc source="https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp" 
alternativeText="Pedroso"/>
    </div>
  );
}

export default App;
