import React from 'react';

import './styles.css';
import trash from '../../assets/trash.png';

function DevItem({ dev, onSubmit }) {
  async function handleDelDev(){
    await onSubmit(dev._id);
  }

  return (
    <li className="dev-item">
       
      <img src={trash} alt="trash" onClick={handleDelDev}/>
        
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>

      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
    </li>
  )
}

export default DevItem;