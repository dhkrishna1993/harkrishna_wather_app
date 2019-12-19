import React,{useState,useEffect} from 'react';

import './App.css';
import Calendar from 'react-calendar'
import WeatherDetails from"./details"
import {useSelector,useDispatch} from "react-redux"
import {fetchWeather} from "./Actions"

function App(props) {
  
    const [date,setDate] = useState(new Date())

    const weatherSelector = useSelector((state)=>state.weatherinfo)
    const dispatch = useDispatch();
    const getWeatherInfoAction=(data)=>dispatch(fetchWeather(data));

    function fetchData(date){
      setDate(date)
    }

useEffect(()=>{
    getWeatherInfoAction()

},{})

let details=""

if(weatherSelector){
   weatherSelector.list.map((item,id)=>{
   
    var wDate= date.toLocaleDateString()
    var wDate1=new Date(item.dt * 1000).toLocaleDateString()
   
  if (wDate===wDate1){

    details = <WeatherDetails
                countryId={weatherSelector.city.country}
                city={weatherSelector.city.name}
                long={weatherSelector.city.coord.lon} 
                lati={weatherSelector.city.coord.lat} 
                temp={item.temp}   
                sunset={item.sunset}   
                sunrise={item.sunrise}  
                weather={item.weather}
                speed={item.speed}
                degree={item.deg} 
                pressure={item.pressure}
                feel={item.feels_like}
                clouds={item.clouds}
                population={weatherSelector.city.population}
                timezone={weatherSelector.city.timezone}
              />  
          }
       })
       }else{
          details=<div>
            <h1>Loading...</h1>
       </div>
}
    
  return (
    <div className="App">
      <header className="App-header">
        <Calendar 
          className="App-calendar"
          calendarType="ISO 8601"
          onClickDay={(date)=>fetchData(date)}
          value={date}
        />
       <div>
 
         <h6 style={{color:"pink",fontStyle:'italic'}}>
            Note :: It is shown only five days weather report from present date
             </h6>
          
               {details ?(
                 details
               ):(
                 <h1>No Data .....</h1>
               )}

          </div>
      </header>
     
    </div>
  );
}

export default App





















