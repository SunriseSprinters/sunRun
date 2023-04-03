import axios from "axios";
import { useState } from "react";
import Form from "./Form";


const SunInfo = () => {

    const [sunData, setSunData] = useState();
    const [dateInput, setDateInput] = useState('');

    const handleChange = (e) => {
        setDateInput(e.target.value);
        console.log(e.target.value)
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
            console.log(apiData.data)
            })
    }

    return (
        <div className="sunInfoContainer">
            <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default SunInfo;