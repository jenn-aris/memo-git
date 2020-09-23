import React from 'react';
import data from '../../data/list';

const { title, thumbnail , author } = data;
console.log('debug', title, thumbnail, author);

// Un composant React est une fonction qui retourne
// un élément React (=== le résultat de React.createElement())
export default () => (
    <header className="header">
      <img
        src={thumbnail}
        alt={title}
        className="header-image"
      />
      <h1> Un petit mémo Git </h1>
      <h2>par { author } </h2>
    </header>
);
