import axios from "axios";
import { useState } from "react";
import Form from "./Form";
import SunDisplay from './SunDisplay';


const SunInfo = () => {
    // initializing state to keep track of the data we retrieve on the axios call on the sunrise-sunset api
    const [sunData, setSunData] = useState();
    // initializing state to keep track on the date input that the user wants to check
    const [dateInput, setDateInput] = useState('');
    const [sunriseRun, setSunriseRun] = useState(true);
    const [dataReady, setDataReady] = useState();

    // function used to keep track of the user input on the form
    const handleChange = (e) => {
        setDateInput(e.target.value);
        console.log(e.target.value)

    }

    const handleToggle = () => {
        setSunriseRun(!sunriseRun);

    }
    // handle submit function to keep track of when user submit the form so that we can make the axios call to the API and retrieve the information of the Sunset and Sunrise at the Toronto coordinates
    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            url: "https://api.sunrise-sunset.org/json",
            params: {
              // Googled for Toronto's long and lat 
                lat: 43.651070,
                lng: -79.347015,
                date: dateInput
            }
        })
        // updating the sunData state with the api data
        .then( (apiData) => {
            setSunData(apiData.data);
            setDataReady(true);
            console.log(apiData.data)
            })
    }

    return (
        // passing the handleChange and handleSubmit functions as props so that the <Form /> component have access to it
        <div className="sunInfoPage">
            <Form 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                sunriseRun={sunriseRun} 
                handleToggle={handleToggle} 
            />

            {dataReady && <SunDisplay sunriseRun={sunriseRun} sunData={sunData}/>}
        </div>
    )
}

export default SunInfo;
