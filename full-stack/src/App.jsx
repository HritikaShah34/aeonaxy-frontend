  import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DataProvider } from './components/DataContext';
import Footer from './components/Footer';
import MyCard from './components/MyCard';
import Navbar from './components/Navbar';
import Purpose from './components/Purpose';
import Signin from './components/Signin';
import Verification from './components/Verification';
import Welcome from './components/Welcome';

  function App() {

    // const [email, setEmail] = useState('hii2');

    return (
      <DataProvider>
      <div style={{width: "100vw", height:"100vh"}}>
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} /> 
            <Route path="/welcome" element={<Welcome />} /> 
            <Route path="/purpose" element={<Purpose />} /> 
            <Route path="/card" element={<MyCard />} /> 
            <Route path="/verification" element={<Verification />} /> 
            <Route path="/footer" element={<Footer />} /> 
            <Route path="/nav" element={<Navbar />} /> 
          </Routes>
        </Router>
      </div> 
      </DataProvider>
    )
  }

  export default App