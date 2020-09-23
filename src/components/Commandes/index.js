import React from 'react';
import data from '/home/jennaris/Bureau/html/memo-git/src/data/list';

const { commandes , outro } = data;

const outrolist = outro.map((textoutro) => 
  <li key={textoutro} className="introTexte">{textoutro}</li>
);
const commandList = commandes.map(command => (
  <li key={command.id} >    
     <div className="commande">
      <div className="gitCommand">
        {command.name}
      </div>
     <br /><div className="commandDescription">
       {command.description}</div>
     </div>
  </li>
));

export default () => (
  <>
  <div className="commandList">
    <ul>
      {commandList}
    </ul>
  </div>

  <div className="intro">
    <ul>
        {outrolist}
    </ul>
  </div>
  </>
);
