import React from 'react'
import property7 from "../../srcAssets/img/property-7.jpg"
import property6 from "../../srcAssets/img/property-6.jpg"
import property8 from "../../srcAssets/img/property-8.jpg"
import property1 from "../../srcAssets/img/property-1.jpg"
import property3 from "../../srcAssets/img/property-3.jpg"
import property10 from "../../srcAssets/img/property-10.jpg"


export default function PropertyGridSingle() {
  return (
    <section className="property-grid grid">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="grid-option">
              <form>
                <select className="custom-select">
                  <option selected>All</option>
                  <option value="1">New to Old</option>
                  <option value="2">For Rent</option>
                  <option value="3">For Sale</option>
                </select>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src={property1} alt="" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="/">204 Mount
                        <br /> Olive Road Two</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src={property3} alt="" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="/">204 Mount
                        <br /> Olive Road Two</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src={property6} alt="" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="/">204 Mount
                        <br /> Olive Road Two</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src={property7} alt="" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="/">204 Mount
                        <br /> Olive Road Two</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src={property8} alt="" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="/">204 Mount
                        <br /> Olive Road Two</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src={property10} alt="" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="/">204 Mount
                        <br /> Olive Road Two</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Garages</h4>
                        <span>1</span>
                      </li>
                    </ul>
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
                  <a className="page-link" href="/">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">3</a>
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
  )
}
