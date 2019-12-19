import {offlineData} from "./offlineData"


export function fetchWeather(data){

    return function (dispatch){
        const api_key="348c880899f24360d8ade9d6e84acc09"
        const searchTerm= "hyderabad"
       
        const URL=`http://api.openweathermap.org/data/2.5/forecast/daily?q=${searchTerm}&type=accurate&APPID=${api_key}&cnt=5`
         
        console.log(URL)

        if(URL){
              return fetch(URL)
              .then(response =>{ return response.json()})
              .then( resJson =>{dispatch({ type:"LOAD_USERS_SUCCESS", payload:resJson })})
              .then(console.log("Message:: It is Online data "))
              .catch(err=>{console.log(err)})  
           
            }else{
              return dispatch({ type:"LOAD_USERS_SUCCESS", payload:offlineData }),console.log("Message:: It is offline data online URL is temprarly blocked")
            }

       }
}
