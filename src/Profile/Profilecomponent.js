import React from "react";
import PropTypes from "prop-types";
import "./Profilecomponent.css";

export default function Profile(props) {
  return (
    
    <div className="profile">
      <div className="avatar">{props.children}</div>
      <div className="parent">
        <h1>
          <span className="test"> Name : </span>
          {props.fullName}{" "}
        </h1>
        <h2>
          {" "}
          <span className="test"> Profession : </span>
          {props.profession}{" "}
        </h2>
        <h3>
          {" "}
          <span className="test"> Bio : </span>
          {props.bio}{" "}
        </h3>

        <button  className="btn"
          onClick={() => props.handleName(props.fullName)}
         
        >
          Say Hello{" "}
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func
};

Profile.defaultProps = {
  fullName: "No Data ",
  profession: "No Data ",
  bio: "No Data ",
  handleName: () => {
    alert("There is no Props ");
  }
};