
import './App.css';
// import DarkMode from './components/DarkMode';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from 'react';
// import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
// } from "react-router-dom";



function App()  {
  const [Mode, setMode] = useState('light') //for darkmode

  const [alert, setAlert] = useState(null)  // usestate for alert component
  const showAlert =(message,type)=>{
          setAlert({
             msg: message,
             type:type,
           })
           setTimeout(() => { //1.5 sec ke bdh alert will remove
             setAlert(null);
           }, 1500);
  }


  const toggleMode=()=>{
    if (Mode==='light'){
    setMode ('black')
    document.body.style.background='#161515eb'
    showAlert("dark mode enable" , "success")
    }
    else{
      setMode ('light')
      document.body.style.background='white'
      showAlert("light mode enable","success")

    }
  }

 


  return (
    <>    
    {/* <Router> */}
   <Navbar   titel="texture"  disable="about us" link="mylink"  mode={Mode}  toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   {/* <About/> */}

   {/* <Navbar/> */}
   {/* if we write a text form inside a div class the the box will comes in center */}
  <div className="container">
  {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          
          {/* <Route exact path="/"> */}
          <TextForm   mode={Mode}  showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
     {/* </Router> */}
  
   {/* <DarkMode/> */}
   
  </>
   );
 }

export default App;
