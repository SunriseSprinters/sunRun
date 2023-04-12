import axios from "axios";
import { useState } from "react";
import React  from 'react';
import moment from 'moment';

// COMPONENTS
import Instructions from "./Instructions";
import Form from "./Form";
import SunDisplay from './SunDisplay';
import SideBar from "./SideBar";

// // FIREBASE
import app from '../firebase.js';
import { ref, getDatabase, push } from 'firebase/database';

const SunInfo = () => {
    // initializing state to keep track of the data we retrieve on the axios call on the sunrise-sunset api
    const [sunData, setSunData] = useState();

    // initializing state to keep track on the date input that the user wants to check.
    const [dateInput, setDateInput] = useState('');

    // initializing state to keep track if the user choose's to run on sunset or sunrise using a boolean value
    const [sunriseRun, setSunriseRun] = useState(true);

    // initializing state to keep track when the data returns from the API call
    const [dataReady, setDataReady] = useState();

    // initializing state to keep track on the user's run duration time
    const [runDuration, setRunDuration] = useState('');

    // initializing state to keep track of the date and time on each sunset and sunrise to use it on the display and push it on to firebase if the user chooses to
    const [sunsetDate, setSunsetDate] = useState(null);
    const [sunsetTime, setSunsetTime] = useState(null);
    const [sunriseDate, setSunriseDate] = useState(null);
    const [sunriseTime, setSunriseTime] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')
    const [runFaved, setRunFaved] = useState(false);
    const [disabled, setDisabled] = useState(false);

    // function used to keep track of the user input on the form
    const handleChange = (e) => {
        setDateInput(e.target.value);
    }

    const handleToggle = () => {
        setSunriseRun(!sunriseRun);
    }
    // function used to control the input value for the user time run time duration
    const sunsetRun = (e) => {
        setRunDuration(e.target.value);
    }

    // // function use to control the star save button on SunDisplay
    const handleClick = (e) => {
        const db = getDatabase(app);
        const dbRef = ref(db); 
        setRunFaved(!runFaved);
        setDisabled(true);
        push(dbRef, {
            date: sunriseRun ? sunriseDate : sunsetDate,
            startTime: sunriseRun ? sunriseTime : sunsetTime,
            sunset: sunriseRun ? "Sunrise" : "Sunset"
        })
    }

    // handle submit function to keep track of when user submit the form so that we can make the axios call to the API and retrieve the information of the Sunset and Sunrise at the Toronto coordinates
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            url: "https://api.sunrise-sunset.org/json",
            params: {
            //   Googled for Toronto's long and lat 
                lat: 43.651070,
                lng: -79.347015,
                date: dateInput,
                formatted: 0
            }
        })
        // updating the sunData state with the api data
        .then( (apiData) => {
            setErrorMessage('');
            setSunData(apiData.data);
            setDataReady(true);
            setRunDuration('');
            // declared variable to store the object we need in order to use the react-moment library to handle time manipulation and format change in order to display the departure time 
            const sunsetObj = moment(apiData.data.results.sunset);
            const sunriseObj = moment(apiData.data.results.sunrise);
            setSunsetDate(sunsetObj.format('ll'));
            setSunsetTime(sunsetObj.subtract(runDuration, 'm').format('LT'));
            setSunriseDate(sunriseObj.format('ll'));
            setSunriseTime(sunriseObj.format('LT'));
            })
            .catch(function (error) {
                setErrorMessage(error.toJSON().message);
            });
    }

    return (
        // passing the handleChange and handleSubmit functions, and other attributes to use as props so that the <Form /> component have access to it
        <div className="sunInfoPage">
            <SideBar />
            <Instructions />
            <Form 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                sunriseRun={sunriseRun} 
                handleToggle={handleToggle} 
                sunsetRun={sunsetRun}
                typedValue={runDuration}
                dateInput={dateInput}
            />

            {errorMessage.length < 1 ? dataReady && 
            // passing the handleClick and other attributes  to use as props so that the <SunDisplay /> component have access to it
            <SunDisplay 
                handleClick={handleClick}
                sunriseRun={sunriseRun} 
                sunData={sunData} 
                sunsetDate={sunsetDate} 
                sunsetTime={sunsetTime}
                sunriseDate={sunriseDate}
                sunriseTime={sunriseTime}
                disabled={disabled}
                runFaved={runFaved}
                /> : <h3 className="axiosErrorMessage">{errorMessage}</h3>}
        </div>
    )
}

export default SunInfo;
