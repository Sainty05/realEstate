import React from "react";
import slideAbout1 from "../../srcAssets/img/slide-about-1.jpg"
import about2 from '../../srcAssets/img/about-2.jpg'

export default function AboutSection() {
  return (
    <section className="section-about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 position-relative">
            <div className="about-img-box">
              <img
                src={slideAbout1}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="sinse-box">
              <h3 className="sinse-title">
                EstateAgency
                <span></span>
                <br /> Sinse 2017
              </h3>
              <p>Art & Creative</p>
            </div>
          </div>
          <div className="col-md-12 section-t8 position-relative">
            <div className="row">
              <div className="col-md-6 col-lg-5">
                <img src={about2} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2  d-none d-lg-block position-relative">
                <div className="title-vertical d-flex justify-content-start">
                  <span>EstateAgency Exclusive Property</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 section-md-t3">
                <div className="title-box-d">
                  <h3 className="title-d">
                    Sed
                    <span className="color-d">porttitor</span> lectus
                    <br /> nibh.
                  </h3>
                </div>
                <p className="color-text-a">
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Vivamus magna justo, lacinia eget consectetur sed, convallis
                  at tellus. Praesent sapien massa, convallis a pellentesque
                  nec, egestas non nisi. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                  velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
                  ligula.
                </p>
                <p className="color-text-a">
                  Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
                  consectetur sed, convallis at tellus. Mauris blandit aliquet
                  elit, eget tincidunt nibh pulvinar a. Vivamus magna justo,
                  lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
