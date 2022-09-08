import './App.css';
import Gallery from './Gallery'
import ButtonBar from './ButtonBar'
import { useState,useEffect } from 'react';

const App=()=> {
  let [data,setData]= useState({})
  let [artId,setartId] =useState(12720)

  useEffect (() =>{
    document.title = 'Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response =>response.json())
    .then(resData=> setData (resData))
  },[artId] )
  const handleIterate=(e)=>{
    setartId(artId+Number(e.target.value))
  }
  return (
    <div className="App">
    <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
  
    <ButtonBar handleIterate={handleIterate}/>
    </div>
  );
}

export default App;
