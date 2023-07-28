

import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import About from './Components/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been Enabled...", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled...", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (

    <>
      <BrowserRouter>
        <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/" element={ <TextForm heading="Enter the text here te Analyze" mode={mode} showAlert={showAlert}/>}>
            </Route>
            <Route exact path="/about" element={<About/>}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
