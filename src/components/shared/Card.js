import "./Card.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Card({props})  {
  const { img, title, description, path } = props;
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card__body">
        <img src={img} className="card__image" />
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
      <button onClick={() => navigate(path)} className="card__btn">
        Pick ME!
      </button>
    </div>
  );
}

export default Card;
