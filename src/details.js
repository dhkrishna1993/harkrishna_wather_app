import React from"react"
import './App.css';

export default function Details(props){
 
    return(
        <div className="Details">
            <div className="Details-Area" style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    
            <h6 style={{color:'yellow'}}>Contry ID : {props.countryId}</h6>
            <h5 style={{textDecorationLine:'underline',marginTop:-20,color:'red'}}>Temparature</h5>
            <h6 style={{marginTop:-20}}>Day : {props.temp.day}</h6>
            <h6 style={{marginTop:-20}}>Night : {props.temp.night}</h6>
            <h6 style={{marginTop:-20}}>Minimum : {props.temp.min}</h6>
            <h6 style={{marginTop:-20}}>Maximum : {props.temp.max}</h6>
            <h6 style={{marginTop:-20}}>Evening : {props.temp.eve}</h6>
            <h6 style={{marginTop:-20}}>Morning : {props.temp.morn}</h6>

                </div>
                <div>
            <h6 style={{color:'yellow'}}>City : {props.city}</h6>
            
                </div>
                <div>
            <h6 style={{color:'yellow'}}>Latitude : {props.lati}</h6>
            <h5 style={{textDecorationLine:'underline',marginTop:-20,color:'red'}}>Weather</h5>
                {props.weather.map((weather)=>(
                    <div>
                    <h6 style={{marginTop:-20}}>Main : {weather.main}</h6>
                    <h6 style={{marginTop:-20}}>Description : {weather.description}</h6>
                    <h6 style={{marginTop:-20}}>Icon: {weather.icon}</h6>
                      </div>
                       ))}

            
                </div>
                <div>
            <h6 style={{color:'yellow'}}>Longitude : {props.long}</h6>
            <h5 style={{textDecorationLine:'underline',marginTop:-20,color:'red'}}>Feels Like</h5>
            <h6 style={{marginTop:-20}}>Day : {props.feel.day}</h6>
            <h6 style={{marginTop:-20}}>Night : {props.feel.night}</h6>
            <h6 style={{marginTop:-20}}>Evening : {props.feel.eve}</h6>
            <h6 style={{marginTop:-20}}>Morning : {props.feel.morn}</h6>
         
                </div>
                <div>
            <h6 style={{color:'yellow'}}>Timezone : {props.timezone}</h6>
           
                </div>
                <div>
            <h6 style={{color:'yellow'}}>Population : {props.population}</h6>
            <h5 style={{textDecorationLine:'underline',marginTop:-20,color:'red'}}>Others</h5>
            <h6 style={{marginTop:-20}}>Pressure : {props.pressure}</h6>
            <h6 style={{marginTop:-20}}>Speed : {props.speed}</h6>
            <h6 style={{marginTop:-20}}>Degree : {props.degree}</h6>
            <h6 style={{marginTop:-20}}>Clouds : {props.clouds}</h6>
             
                </div>
            </div>
            </div>
    )
}

