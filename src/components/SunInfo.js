import axios from "axios";
import { useState } from "react";
import Form from "./Form";


const SunInfo = () => {
    // initializing state to keep track of the data we retrieve on the axios call on the sunrise-sunset api
    const [sunData, setSunData] = useState();
    // initializing state to keep track on the date input that the user wants to check
    const [dateInput, setDateInput] = useState('');

    // function used to keep track of the user input on the form
    const handleChange = (e) => {
        setDateInput(e.target.value);
        console.log(e.target.value)
    }
    console.log(dateInput)
    // handle submit function to keep track of when user submit the form
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