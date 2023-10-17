import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//      } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light'); //Whether dark mode is enable or not 

  const toggleMode = (cls)=>{
    console.log(cls)
    
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#100c08';
      document.title = 'Textutils - Dark Mode' ;
      // setInterval(()=>{
      //   document.title = 'Textutils is good'
      // },2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = 'Textutils - Light Mode' ;
    }
  }
  return (
    <>  
  {/* <Navbar title = "Textutils" aboutText="About Textutils"/> */}
  {/* <BrowserRouter > */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      {/* <Routes> */}
        {/* <Route exact path="/About" element={<About aboutus="About Us" mode={mode}/>}></Route> */}
        <TextForm heading="Enter Your Text" mode={mode} /> 
      {/* </Routes>
    </BrowserRouter> */}
  {/* <About mode={mode}/>  */}
   </>
  );
}

export default App;
