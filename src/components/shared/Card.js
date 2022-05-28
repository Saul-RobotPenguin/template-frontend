import "./Card.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BaseIMGTemplate1 from "../images/Template_1_img.jpg";
import BaseIMGTemplate2 from "../images/Template_2_img.jpg";
import BaseIMGTemplate3 from "../images/Template_3_img.jpg";
import cover1 from "../images/Cover Letter 1.png";

function Card(props) {
  const navigate = useNavigate();

  function checkIfBaseTemplate(id) {
    if (id == process.env.REACT_APP_NO1) {
      return <img src={BaseIMGTemplate1} className="card__image" />;
    }
    if (id == process.env.REACT_APP_NO2) {
      return <img src={BaseIMGTemplate2} className="card__image" />;
    }
    if (id == process.env.REACT_APP_NO3) {
      return <img src={BaseIMGTemplate3} className="card__image" />;
    }
    return <img src={cover1} className="card__image" />;
  }

  return (
    <div className="card">
      <div className="card__body">
        {checkIfBaseTemplate(props.id)}
        {/* <img src={props.img} className="card__image" /> */}
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button onClick={() => navigate(props.path)} className="card__btn">
        Pick Me!
      </button>
    </div>
  );
}

export default Card;
