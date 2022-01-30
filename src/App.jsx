import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Main from './pages/Main';

const App = () => {
  return(
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main/>}/>
      </Routes>
    </div>
  );
};

export default App;
