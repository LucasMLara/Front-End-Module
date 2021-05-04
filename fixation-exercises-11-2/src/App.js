import React from 'react';
import Image from './Image.js';
import ImageFnc from './ImageFnc';

function App() {
  return (
    <div className="App">
<Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" 
alternativeText="CuteKitty"/>
<ImageFnc source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" 
alternativeText="CuteKitty"/>
    </div>
  );
}

export default App;
