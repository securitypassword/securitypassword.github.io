import React, {useState} from 'react';
import Paths from './comps/Paths';
import Loading from './comps/Loaging';
import { Zoom } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(false);

  const cambiarEstado=()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
  }

  if(loading){
    return(
      <>
        <Loading></Loading>
      </>
    )
  }else{

    return (
      <>
          <Paths></Paths>
      </>
      )
    }
}

export default App;
