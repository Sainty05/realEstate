import React from "react";
import poost1 from "../../srcAssets/img/post-1.jpg"
import poost2 from "../../srcAssets/img/post-2.jpg"
import poost3 from "../../srcAssets/img/post-3.jpg"
import poost4 from "../../srcAssets/img/post-4.jpg"
import poost5 from "../../srcAssets/img/post-5.jpg"
import poost6 from "../../srcAssets/img/post-6.jpg"

export default function BlogGrid() {
  return (
    <section className="news-grid grid">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={poost1} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="/" className="category-b">
                      Travel
                    </a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="blog-single.html">
                        Travel is comming
                        <br /> new
                      </a>
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">18 Sep. 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={poost2} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="blog-single.html" className="category-b">
                      Travel
                    </a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="blog-single.html">
                        Travel is comming
                        <br /> new
                      </a>
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">18 Sep. 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={poost3} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="/" className="category-b">
                      Travel
                    </a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="blog-single.html">
                        Travel is comming
                        <br /> new
                      </a>
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">18 Sep. 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={poost4} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="/" className="category-b">
                      Travel
                    </a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="blog-single.html">
                        Travel is comming
                        <br /> new
                      </a>
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">18 Sep. 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={poost5} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="/" className="category-b">
                      Travel
                    </a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="blog-single.html">
                        Travel is comming
                        <br /> new
                      </a>
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">18 Sep. 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={poost6} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="/" className="category-b">
                      Travel
                    </a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="blog-single.html">
                        Travel is comming
                        <br /> new
                      </a>
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
        <div className="row">
          <div className="col-sm-12">
            <nav className="pagination-a">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="/" tabindex="-1">
                    <span className="bi bi-chevron-left"></span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item next">
                  <a className="page-link" href="/">
                    <span className="bi bi-chevron-right"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
