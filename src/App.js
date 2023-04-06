import './sass/App.scss';
import 'animate.css';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SunInfo from './components/SunInfo';
import Error from './components/Error';
import SavedRuns from './components/SavedRuns';


import { Route, Routes } from 'react-router-dom';


// App.js hold the routes of SunRun. The <Home /> component will be our default home page and <SunInfo /> will be our main app component where the <Form /> and <Display /> component will live

function App() {
  return (
    <div className="App">
      <Header />
      <SavedRuns />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sunApp' element={<SunInfo />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



// Pseudo Code:

// On page load, the user sees...
// Form with two input fields, the first allows them to select the date. The second asks if their run is at sunset or sunrise.


// What does the user do?
// Select date and sunrise or sunset.
// IF sunset, enter duration of run.



// App.js
// Header.js
// SunInfo.js
  // useState to save API data
  // useState for date
  // useState for sunRiseRun
    // IF False, then assume it's a sunset run and...
      // render new input for runDuration, and save sate
  // Form.js
    // set onChange for sunRiseRun state
    // date input presented in dropdown, save user response with onChange function to save new date state
      // If date chosen is before today's date, show Error message.
  // SunDisplay.js
    // Render returned API data, using form inputs as parameters.
    // IF displaying sunset times, show sunset time - userRunTime = departureTime
// Footer.js


// save user entered date as a state
// set one state for both sunset and sunrise (ex. if sunrise = false then they must be running at sunset)
    // Needs an onChange to detect if they change to sunset so we can ask the duration before they submit!
    // IF sunset is selected as time of run, render another input to get duration of run from user.
// On submit, the app will send an axios request to the API, and then display sunrise/set data.
    // Sunrise or sunset selection could be passed into the URL if routing is used. Then we can use this to change the end point.

// Error handling:
// API provides "status" we can test this to check if it can help error handling.
// Any date before "today's date" are disabled.