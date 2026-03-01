import { useEffect, useState } from "react";
import "./News.css";

const api = "457bbbf4713e477aa1fb05c7459909b7";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function News() {
  const [items, setItems] = useState([]);
  const [seed, setSeed] = useState(Math.random());

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?` +
      `language=en&pageSize=20&apiKey=${api}`
    )
      .then(res => res.json())
      .then(data => {
        if (!data.articles) return;

        const withImages = data.articles.filter(
          a => a.urlToImage && a.title
        );

        const randomNews = shuffle(withImages).slice(0, 4);
        setItems(randomNews);
      })
      .catch(console.error);
  }, [seed]);

  return (
    <section className="news">
      <h2>Interacting with our pets</h2>

      <div className="news-grid">
        {items.map((item, i) => (
          <div className="news-card" key={i}>
            <img src={item.urlToImage} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <button
        className="news-btn"
        onClick={() => setSeed(Math.random())}>
        See more
      </button>
    </section>
  );
}

export default News;
