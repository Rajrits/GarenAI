// src/App.js
import React from 'react';
// import './style.css'; // Import your external CSS file
// import ChatArea from './components/ChatArea';
import ChatArea from './components/ChatArea';
import Navbar from './components/Navbar';
import Header from './components/Header';

import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Details from './components/DetailsPage';
// import Navbar from '.components/Navbar'

function App() {
    return (
<>
<BrowserRouter>
        <div className="">
        {/* <Header/> */}
        <Navbar/>
<Routes>
           <Route  path='/' element = {<Home/>}/>
           <Route path='/about' element = {<About/>}/>
           <Route path='/detail/:id' element={<Details />}/>
           <Route path='/chat' element={<ChatArea/>}/>
           

</Routes>
        </div>
</BrowserRouter>
            
</>
    );
}

export default App;
