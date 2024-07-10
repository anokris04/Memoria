import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Project from './pages/Project';
import Home from './pages/Home';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/sign-in" element = {<SignIn />}/>
          <Route path="/sign-up" element = {<SignUp />}/>
          <Route path="/project" element = {<Project />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
