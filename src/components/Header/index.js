import React from 'react';
import data from '/home/jennaris/Bureau/html/memo-git/src/data';

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
    </header>
);
