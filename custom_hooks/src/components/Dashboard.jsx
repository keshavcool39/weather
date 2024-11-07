import React, { useState } from "react";

import First from "./First";
import axios from "axios";
import Second from "./Second";
import Third from "./Third";
import { ClipLoader } from "react-spinners";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState({});
  const [area, setArea] = useState({});
  const [rise, setRise] = useState({});
  const [component, setComponent] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Input Box and Buttons */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            placeholder="Enter location"
            className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={async () => {
              setComponent(false);
              try {
                if (city == "") {
                  alert("invalid");
                  setComponent(null);
                  return;
                }
                // break;
                else {
                  const response = await axios.get(
                    `https://wttr.in/${city}?format=j1`
                  );
                  setTemperature({
                    temperature: response.data.current_condition[0].FeelsLikeC,
                    pressure: response.data.current_condition[0].pressure,
                    humidity: response.data.current_condition[0].humidity,
                  });

                  setArea({
                    country: response.data.nearest_area[0].country[0].value,
                    latitude: response.data.nearest_area[0].latitude,
                    longitude: response.data.nearest_area[0].longitude,
                    region: response.data.nearest_area[0].region[0].value,
                    population: response.data.nearest_area[0].population,
                  });
                  setRise({
                    sunrise: response.data.weather[0].astronomy[0].sunrise,
                    sunset: response.data.weather[0].astronomy[0].sunset,
                  });
                  setComponent(true);
                }
              } catch (e) {
                alert("invalid area");
              }
            }}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Search
          </button>
          <button
            onClick={() => {
              setComponent(null);
            }}
            className="ml-2 p-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Reset
          </button>
        </div>

        {/* Display Components if Location Data Exists */}
        {component == null ? (
          <div></div>
        ) : component ? (
          <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto grid gap-6 lg:grid-cols-3 sm:grid-cols-1">
              <First temperature={temperature} />

              <Second area={area} />

              <Third rise={rise} />
            </div>
          </div>
        ) : (
          <div className="flex justify-center my-8">
            <ClipLoader color="#4A90E2" size={50} /> {/* Loader */}
          </div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;

// <div>
//   <h1 className="text-5xl font-bold text-center">Welcome</h1>

//   <InputBox
//     placeholder={"Enter City here"}
//     onChange={(e) => {
//       setCity(e.target.value);
//     }}
//   />
//   <div className="flex justify-center">
//     <SearchButton
//       onClick={async () => {
//         try {
//           const response = await axios.get(`https://wttr.in/${city}?format=j1`);
//           setTemperature({
//             temperature: response.data.current_condition[0].FeelsLikeC,
//             pressure: response.data.current_condition[0].pressure,
//             humidity: response.data.current_condition[0].humidity,
//           });

//           setArea({
//             country: response.data.nearest_area[0].country[0].value,
//             latitude: response.data.nearest_area[0].latitude,
//             longitude: response.data.nearest_area[0].longitude,
//             region: response.data.nearest_area[0].region[0].value,
//             population: response.data.nearest_area[0].population,
//           });
//           setRise({
//             sunrise: response.data.weather[0].astronomy[0].sunrise,
//             sunset: response.data.weather[0].astronomy[0].sunset,
//           });
//           setComponent(false);
//         } catch (e) {
//           alert("invalid area");
//         }
//       }}
//     />
//     <ResetButton
//       onClick={() => {
//         setComponent(true);
//       }}
//     />
//   </div>

// {component ? (
//   <div></div>
// ) : (
//   <div className="min-h-screen bg-gray-100 p-6">
//     <div className="container mx-auto grid gap-6 lg:grid-cols-3 sm:grid-cols-1">
//       <First temperature={temperature} />

//       <Second area={area} />

//       <Third rise={rise} />
//     </div>
//   </div>
// )}
// </div>;
