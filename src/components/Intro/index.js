import React from 'react';
import data from '/home/jennaris/Bureau/html/memo-git/src/data/list';

const { intro } = data

const introlist = intro.map((textIntro) => 
  <li key={textIntro} className="introTexte">{textIntro}</li>
);

export default () => (
    <div className="intro">
      <ul>
          {introlist}
      </ul>
    </div>
);