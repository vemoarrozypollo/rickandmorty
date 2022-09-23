import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentItem = ({ url }) => {
  const [character, setCharacter] = useState({})
  useEffect(() => {
    axios.get(url)
      .then(res => setCharacter(res.data))
  }, [])
  console.log(character)
  return (
    <div className='list'>
      <ul>
        <header>
          <img className='imgresi' src={character.image} alt="" />
        </header>
        <body>
          <h3>{character.name}</h3>
          <h3><b>Status:</b>
            <br></br>
            {character.status}</h3>
          <h3><b>origin location:
          </b><br></br>
            {character.origin?.name}</h3>
          <h3><b>episode where it appears :</b>
            <br></br>
            #{character.episode?.length}</h3>
        </body>
      </ul>
    </div>
  );
};

export default ResidentItem;