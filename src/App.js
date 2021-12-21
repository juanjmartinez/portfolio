import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    getResumeData();
  }, []);

  const getResumeData = () => {
    return axios.get('assets/data/resumeData.json')
      .then(res => res.data)
      .then(data => {
        console.log('data', data);
        let info = data;
        setResumeData(info);
        console.log('state', resumeData);
      });

  }

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About />
    </div>
  );
}

export default App;
