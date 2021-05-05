import React from "react";
import Profile from "./Profile/Profilecomponent";
import userImg from "./images/user.jpg";


export default function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }
  return (
    <div className="App">
      <img className="photo"
          style={{textalign: "center"  ,width: "300px", height: "300px",  }}
          src={userImg}
          alt="avatar"></img>

      <Profile
        fullName="mayssa bouoni"
        bio="Hello , my name is mayssa bouoni and i was a management student"
        profession=" now i'm aFull-Stack js student"
        handleName={handleName}></Profile>
        
        </div>
     
     );
    }