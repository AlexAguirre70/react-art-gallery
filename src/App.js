import './App.css';
import Gallery from './Gallery'
import ButtonBar from './ButtonBar'
import { useSelector,useDispatch } from 'react-redux';
import { darkMode,lightMode} from './features/modelSlice';
import { useState,useEffect } from 'react';

const App=()=> {
  let [data,setData]= useState({})
  let [artId,setartId] =useState(12720)
  const dispatch =useDispatch()
  const mode = useSelector((state)=>state.mode)

  const toggleMode =()=> {
    mode.darkMode ? dispatch(lightMode()): dispatch(darkMode())
  }

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
    <div className="App" style={{backgroundColor:mode.color1, color:'white'}}>
    <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
  
    <ButtonBar handleIterate={handleIterate}/>
    <button onClick={toggleMode}>{mode.darkMode ? 'Ligth Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default App;
