import React, {useState } from "react";
import InputBox from "./InputBox";
import SearchButton from "./SearchButton";
import First from "./First";
import axios from "axios"
import Second from "./Second";
import Third from "./Third";
import ResetButton from "./ResetButton";


const Dashboard = () => {
  const [city, setCity] = useState("");
  const [temperature,setTemperature]=useState({});
  const [area,setArea]=useState({});
  const [rise,setRise]=useState({});
  const [component,setComponent]=useState(true);


 
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-center">Welcome</h1>
    
          <InputBox
            placeholder={"Enter City here"}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <div className="flex justify-center">
          <SearchButton  onClick={async ()=>{
          
           try{
             const response=await axios.get(`https://wttr.in/${city}?format=j1`)
             setTemperature({
              temperature:response.data.current_condition[0].FeelsLikeC,
              pressure:response.data.current_condition[0].pressure,
              humidity:response.data.current_condition[0].humidity
             })

             setArea({
              country:response.data.nearest_area[0].country[0].value,
              latitude:response.data.nearest_area[0].latitude,
              longitude:response.data.nearest_area[0].longitude,
              region:response.data.nearest_area[0].region[0].value,
              population:response.data.nearest_area[0].population

             })
             setRise({
              sunrise:response.data.weather[0].astronomy[0].sunrise,
              sunset:response.data.weather[0].astronomy[0].sunset

             })
             setComponent(false);

            }
            catch(e){
              alert('invalid area')
            }
            }
          }/>
          <ResetButton onClick={()=>{
            setComponent(true)
          }}/>
          </div>
          
          
           
     { component?(<div></div>):(<div className="grid grid-cols-3">
        <First temperature={temperature} />
        <Second area={area} />
        <Third rise={rise}/>
      </div>)}

    

          

       
      </div>
    </>
  );
};
export default Dashboard;
