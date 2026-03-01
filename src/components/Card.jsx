import { useEffect, useState } from "react";
import "./Cards.css";
import refresh from "../img/refresh.png";
import heart from "../img/heart.png";
import delet from "../img/delet.png";
import sun from "../img/sun.png";

const api = "5b4a1be1278a2a44a4474dde01d4221b";

function Card({ city, onDelete, onSelect }) {
  const [data, setData] = useState(null);

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
    )
      .then(r => r.json())
      .then(setData);
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  if (!data) return null;

  return (
    <div className="card">
      <div className="card-top">
        <span>{data.name}</span>
        <span>{data.sys.country}</span>
      </div>

      <div className="time">14:00</div>

      <div className="icon">
        <img src={sun} alt="" />
      </div>

      <div className="temp">{Math.round(data.main.temp)}°C</div>

      <div className="card-bottom">
        <span className="icon-btn" onClick={fetchWeather}>
          <img src={refresh} alt="" />
        </span>

        <span className="icon-btn">
          <img src={heart} alt="" />
        </span>

        <button
          className="see-more"
          onClick={() => onSelect(data)}
        >
          See more
        </button>

        <span className="icon-btn" onClick={onDelete}>
          <img src={delet} alt="" />
        </span>
      </div>
    </div>
  );
}

export default Card;
