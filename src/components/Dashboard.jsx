import { useState } from "react";
import "./Dashboard.css";
import zakat from "../img/zakat.png";
import search from "../img/search.png";

function Dashboard({ onSearch }) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim()) return;
    onSearch(value.trim());
    setValue("");
  };

  return (
    <section
      className="dashboard"
      style={{ backgroundImage: `url(${zakat})` }}
    >
      <div className="overlay" />

      <div className="content">
        <h1>Weather dashboard</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Search location..."
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === "Enter" && submit()}
          />
          <button onClick={submit}>
            <img src={search} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
