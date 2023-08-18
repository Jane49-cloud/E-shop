import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import "./news.css";
import data from "../Data/Hero";

function Hero() {
  const [adverts, setadverts] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = adverts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, adverts]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section2 h-screen">
      <div className="section-centered">
        {adverts.map((item: any, itemIndex: any) => {
          const { id, image, text, color } = item;

          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === adverts.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={`${position} px-2  `} key={id}>
              <img
                src={image}
                alt={text}
                className="item-img  rounded  "
                style={{ backgroundColor: color }}
              />
              <h4 className="title text-white animate-pulse">{text}</h4>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <ChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Hero;
