import React from 'react'
import post2 from "../../srcAssets/img/post-2.jpg"
import post5 from "../../srcAssets/img/post-5.jpg"
import post7 from "../../srcAssets/img/post-7.jpg"
import post3 from "../../srcAssets/img/post-3.jpg"

export default function NewsSection() {
  return (
    <section className="section-news section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest News</h2>
              </div>
              <div className="title-link">
                <a href="blog-grid.html">All News
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="news-carousel" className="swiper">
          <div className="swiper-wrapper">

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src={post2} alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="/" className="category-b">House</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="blog-single.html">House is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src={post5} alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="/" className="category-b">Travel</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="blog-single.html">Travel is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src={post7} alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="/" className="category-b">Park</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="blog-single.html">Park is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item-c swiper-slide">
              <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                  <img src={post3} alt="" className="img-b img-fluid"/>
                </div>
                <div className="card-overlay">
                  <div className="card-header-b">
                    <div className="card-category-b">
                      <a href="/" className="category-b">Travel</a>
                    </div>
                    <div className="card-title-b">
                      <h2 className="title-2">
                        <a href="/">Travel is comming
                          <br/> new</a>
                      </h2>
                    </div>
                    <div className="card-date">
                      <span className="date-b">18 Sep. 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="news-carousel-pagination carousel-pagination"></div>
      </div>
    </section>
  )
}
