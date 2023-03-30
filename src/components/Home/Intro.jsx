import React from "react";
import slide1 from "../../srcAssets/img/slide-1.jpg";
import slide2 from "../../srcAssets/img/slide-2.jpg";
import slide3 from "../../srcAssets/img/slide-3.jpg";
import { Carousel } from "react-bootstrap";

export default function Intro() {
  const introData = [
    {
      src: slide1,
      add1: "Indore, MP",
      add2: 78345,
      add3: 204,
      add4: "Vijay",
      add5: "Nager",
      price: "rent | 12,000 Rs",
    },
    {
      src: slide2,
      add1: "Indore, MP",
      add2: 32948,
      add3: 455,
      add4: "Tilak",
      add5: "Nager",
      price: "rent | 13,000 Rs",
    },
    {
      src: slide3,
      add1: "Indore, MP",
      add2: 99568,
      add3: 234,
      add4: "Usha",
      add5: "Nager Extention",
      price: "rent | 3000 rs",
    },
  ];
  

  return (
      <Carousel className="intro">
        {introData.map((introData, index) => (
          <Carousel.Item
            key={index}
            style={{ backgroundImage: `url(${introData.src})` }}
          >
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        <p className="intro-title-top">
                          {introData.add1}
                          <br /> {introData.add2}
                        </p>
                        <h1 className="intro-title mb-4 ">
                          <span className="color-b">{introData.add3} </span> {introData.add4}
                          <br /> {introData.add5}
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="/">
                            <span className="price-a">{introData.price}</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
  );
}
