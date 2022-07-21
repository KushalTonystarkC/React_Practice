import React, { useState,useRef } from 'react';
//import SimpleForm from './SimpleForm';
import UserOnboarding from 'react-user-onboarding';
import 'react-user-onboarding/dist/index.css';
import SpeechSynthesis from './SpeechSynthesis';
import './App.css';

const App = (props) => {
  let [isVisible, setIsVisible] = useState(true);
  let [showChat,setShowChat] = useState(false);
  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }
  const elem1 = useRef(),
  elem2 = useRef(),
  elem3 = useRef(),
  elem4 = useRef();
const story = [
  {
    component: 'modal',
    intro: true,
    children: (
      // Html component for initial modal goes here
      <div>
      <p>
          Welcome to the official Fanpage Website of Real Madrid Fans.
          </p>
          <p>
          Do you want to a Quick Tour ?
          </p>
          </div>
    )
  },
  {
    component: 'tooltip',
    ref:elem1,
    children: (
      // Html component for tooltip goes here
      <p>This is the Header Section </p>
    )
  },
  {
    component: 'tooltip',
    ref:elem2,
    children: (
      // Html component for speech-bubble goes here
      <div>
      <p>This is the Dashboard</p>
      <p>You will Get all the links in this section</p>
      </div>
    )
  },
  {
    component: 'tooltip',
    ref:elem3,
    children: (
      // Html component for speech-bubble goes here
      <div>
      <p>This is the Content Page</p>
      <p>You will Get all the Content in this section</p>
      </div>
    )
  },
  {
    component: 'tooltip',
    highlight: true,
    ref:elem4,
    children: (
      // Html component for speech-bubble goes here
      <div>
      <p>This is the ChatBot</p>
      <p>You can Talk to bot</p>
      </div>
    )
  },
  {
    component: 'modal',
    tooltipID: "#getStarted",
      verticalPosition: "center",
      horizontalPosition: "center",
    intro: false,
    children: (
      <p>We come to an end</p>
    )
  }
];

    return (
      <>
      
      <div className = "header" ref={elem1}>
        <h2>Real Madrid Fan Club !!!</h2>
        <button onClick={() => setIsVisible(true)}>
            Quick Tour
          </button>    
      </div>
      
      <div className = "main" >
        <div className ="nav" ref={elem2}>
          <h3>Dashboard</h3>
        </div>
        <div className ="content" ref={elem3}>
          <div style = {{padding:"20px"}}>
            <h1>Hala Madrid!! Y Nada Mas</h1>
            <p>Real Madrid Club de Fútbol, commonly referred to as Real Madrid or simply Real, is a Spanish professional football club based in Madrid. Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit since its inception.</p>
            <p>This is the official website of Madridista. Join us if you are a True Madrid Fan!!</p>
          </div>
        </div>
      </div>
      <div className = "footer">Footer</div>
      <div className = "bot" ref = {elem4}>
        <div style ={{display: showChat ? "" : "none"}}>
          <SpeechSynthesis/>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat 
            ? <button className="btn" onClick={() => startChat()}>click to chat... </button> 
            : <button className="btn" onClick={() => hideChat()}>click to hide... </button>}
        </div>
      </div>
      <UserOnboarding 
        story={story} 
        isVisible={isVisible}
        onClose={() => setIsVisible(false)} 
      />    
      
      </>
    )
}

export default App;