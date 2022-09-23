import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentItem from './ResidentItem';

const ListLocation = () => {
  const [locations, setLocations] = useState({})
  const [LocId, setLocId] = useState("")

  useEffect(() => {
    const randomid = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${randomid}`)
      .then(res => setLocations(res.data))
  }, [])
  console.log(locations)
  const searchId = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${LocId}`)
      .then(res => setLocations(res.data))
  }

  return (
    <div className="menu">
      <input 
      placeholder='SEARCH'
      type="text"
        value={LocId}
        onChange={e => setLocId(e.target.value)} />
      <button onClick={searchId}>search</button>
      <h1 className='title'>{locations.name}</h1>
      <div className='bannertitle'>
      
      <li> 
      <h2><b>Type:</b><br></br>{locations.type}</h2>
      </li>
      <li>
      <h2><b>Dimension:</b><br></br>{locations.dimension}</h2>
      </li>
      <li>
      <h2><b>residents:</b><br></br>{locations.residents?.length}</h2>
      </li>
      </div>
      {locations.residents?.map(resident => (
        <ResidentItem key={resident} url={resident} />
      ))}


    </div>
  );
};

export default ListLocation;