import axios from "axios";
import { useState } from "react";
import Form from "./Form";
import SunDisplay from './SunDisplay';


const SunInfo = () => {

    const [sunData, setSunData] = useState();
    const [dateInput, setDateInput] = useState('');
    const [sunriseRun, setSunriseRun] = useState(true)
    const [dataReady, setDataReady] = useState()

    const handleChange = (e) => {
        setDateInput(e.target.value);
        console.log(e.target.value)
    }

    const handleToggle = () => {
        setSunriseRun((current) => !current);
        console.log(sunriseRun)
    }
    
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
        .then( (apiData) => {
            setSunData(apiData.data);
            setDataReady(true);
            console.log(apiData.data)
            })
    }

    return (
        <div className="sunInfoContainer">
            <Form handleChange={handleChange} handleSubmit={handleSubmit} sunriseRun={sunriseRun} handleToggle={handleToggle}/>
            {dataReady && <SunDisplay sunriseRun={sunriseRun} sunData={sunData}/>}
        </div>
    )
}

export default SunInfo;