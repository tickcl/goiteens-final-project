import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Slider.css";

const api = "54469477-6b27c152e158c384b38ad3114";

function Slider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 10) + 1;

    fetch(
      `https://pixabay.com/api/?key=${api}` +
        `&q=nature&category=nature&image_type=photo` +
        `&orientation=horizontal&safesearch=true` +
        `&per_page=20&page=${randomPage}`
    )
      .then(res => res.json())
      .then(data => {
        if (!data.hits) return;

        setImages(data.hits.slice(0, 7));
      })
      .catch(console.error);
  }, []);

  if (!images.length) return null;

  return (
    <section className="nature">
      <h2>Beautiful nature</h2>

      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={Math.min(3, images.length - 1)}
        coverflowEffect={{
          rotate: 0,
          stretch: 120,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        className="swiper"
      >
        {images.map(img => (
          <SwiperSlide key={img.id}>
            <img src={img.largeImageURL} alt={img.tags} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;
