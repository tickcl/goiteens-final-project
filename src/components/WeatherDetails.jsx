import "./WeatherDetails.css";
import temp from "../img/temp.png";
import humidity from "../img/humidity.png";
import pressure from "../img/pressure.png";
import wind from "../img/wind.png";
import visibility from "../img/visibility.png";

function WeatherDetails({ data }) {
  return (
    <div className="details-panel">
      <div className="details-grid">
        <div className="box">
          <p>Feels like</p>
          <h3>{data.main.feels_like}°C</h3>
          <img src={temp} alt="" />
        </div>

        <div className="box">
          <p>Min℃</p>
          <h3>
            {data.main.temp_min}°C
          </h3>
          <p>Max℃</p>
          <h3>
            {data.main.temp_max}°C
          </h3>
        </div>

        <div className="box">
          <p>Humidity</p>
          <h3>{data.main.humidity}%</h3>
          <img src={humidity} alt="" />
        </div>

        <div className="box">
          <p>Pressure</p>
          <h3>{data.main.pressure} Pa</h3>
          <img src={pressure} alt="" />
        </div>

        <div className="box">
          <p>Wind speed</p>
          <h3>{data.wind.speed} m/s</h3>
          <img src={wind} alt="" />
        </div>

        <div className="box">
          <p>Visibility</p>
          <h3>
            {data.visibility ? data.visibility / 1000 + " km" : "Unlimited"}
          </h3>
          <img src={visibility} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
