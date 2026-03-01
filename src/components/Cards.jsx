import { useState } from "react";
import Card from "./Card";
import WeatherDetails from "./WeatherDetails";

function Cards({ cities, onDelete }) {
  const [selectedData, setSelectedData] = useState(null);

  const handleSelect = data => {
    if (selectedData?.id === data.id) {
      setSelectedData(null);
    } else {
      setSelectedData(data);
    }
  };

  return (
    <>
      <div className="cards">
        {cities.map(city => (
          <Card
            key={city}
            city={city}
            onDelete={() => onDelete(city)}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {selectedData && (
        <div className="details-wrapper">
          <WeatherDetails data={selectedData} />
        </div>
      )}
    </>
  );
}

export default Cards;