import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [city,setCity]=useState('')
  let [weather,weather2]=useState()
  let data=(e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
    .then((res)=>res.json())
    .then((finalRes)=>{
      console.log(finalRes)
      if (finalRes.cod=='404'){
        weather2 (undefined)
      }
      else{
        weather2(finalRes)
      }
    })
    e.preventDefault()
    setCity('')
  }
  return (
    <div className="App">
     <div className=''>
      <div className=''>
        <form onSubmit={data}>
          <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} className='' placeholder=''/><button>Search</button>
        </form>
        {weather !== undefined
        ?
        <div className='bgcolor'>
        <h3 className=''>{weather.name}
          <h2 className='temp'>{weather.main.temp} C</h2>
        </h3>
        <p>{weather.weather[0].description}</p>
      </div>
      :
        <div className='bgcolor'>No Data</div>
        }
      </div>
     </div>
    </div>
  );
}

export default App;
