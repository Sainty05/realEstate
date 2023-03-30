import React from "react";
import slide1 from "../../srcAssets/img/slide-1.jpg";
import slide2 from "../../srcAssets/img/slide-2.jpg";
import slide3 from "../../srcAssets/img/slide-3.jpg";

export default function Intro() {
  return (
    <div class="intro intro-carousel swiper position-relative">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide carousel-item-a intro-item bg-image"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <div class="overlay overlay-a"></div>
          <div class="intro-content display-table">
            <div class="table-cell">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="intro-body">
                      <p class="intro-title-top">
                        Doral, Florida
                        <br /> 78345
                      </p>
                      <h1 class="intro-title mb-4 ">
                        <span class="color-b">204 </span> Mount
                        <br /> Olive Road Two
                      </h1>
                      <p class="intro-subtitle intro-price">
                        <a href="/">
                          <span class="price-a">rent | $ 12.000</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="swiper-slide carousel-item-a intro-item bg-image"
          style={{ backgroundImage: `url(${slide2})` }}
        >
          <div class="overlay overlay-a"></div>
          <div class="intro-content display-table">
            <div class="table-cell">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="intro-body">
                      <p class="intro-title-top">
                        Doral, Florida
                        <br /> 78345
                      </p>
                      <h1 class="intro-title mb-4">
                        <span class="color-b">204 </span> Rino
                        <br /> Venda Road Five
                      </h1>
                      <p class="intro-subtitle intro-price">
                        <a href="/">
                          <span class="price-a">rent | $ 12.000</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="swiper-slide carousel-item-a intro-item bg-image"
          style={{ backgroundImage: `url(${slide3})` }}
        >
          <div class="overlay overlay-a"></div>
          <div class="intro-content display-table">
            <div class="table-cell">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="intro-body">
                      <p class="intro-title-top">
                        Doral, Florida
                        <br /> 78345
                      </p>
                      <h1 class="intro-title mb-4">
                        <span class="color-b">204 </span> Alira
                        <br /> Roan Road One
                      </h1>
                      <p class="intro-subtitle intro-price">
                        <a href="/">
                          <span class="price-a">rent | $ 12.000</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  );
}
