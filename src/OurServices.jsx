import React from "react";

function OurServices() {
  return (
    <div>
      <section className="bg-light" id="service">
        <div className="container">
          <div
            className="sec-title text-center wow fadeIn"
            data-wow-delay="200ms"
          >
            <span>Our Services</span>
            <h2 className="h1 mb-0 z-index-2 position-relative">
              Few Reasons to Choose Us
            </h2>
          </div>
          <div className="row mt-n7 gx-xxl-5">
            <div
              className="col-md-6 col-lg-4 mt-15 wow fadeIn"
              data-wow-delay="200ms"
            >
              <div
                className="card card-style1 border-0 bg-img rounded-0 cover-background overflow-visible"
                data-background="img/service/services-1.jpg"
              >
                <div className="text-center card-body p-1-9 z-index-3 position-relative">
                  <div className="card-icon">
                    <i className="flaticon-042-solar-panel display-8 text-white"></i>
                  </div>
                  <h3 className="mb-3 h4">
                    <a href="solar-solutions.html">Solar Solutions</a>
                  </h3>
                  <span className="card-border position-relative"></span>
                  <p className="mt-7">
                    An ideal mix of involvement and skill to further our focus
                    on technology. advancement.
                  </p>
                </div>
                <div className="card-footer justify-content-between align-items-center d-flex px-1-9 py-3 rounded-0 z-index-3 position-relative">
                  <a href="solar-solutions.html">Read more</a>
                  <a href="solar-solutions.html">
                    <i className="ti-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mt-15 wow fadeIn"
              data-wow-delay="400ms"
            >
              <div
                className="card card-style1 border-0 bg-img rounded-0 cover-background overflow-visible"
                data-background="img/service/services-2.jpg"
              >
                <div className="text-center card-body p-1-9 z-index-3 position-relative">
                  <div className="card-icon">
                    <i className="flaticon-034-growth display-8 text-white"></i>
                  </div>
                  <h3 className="mb-3 h4">
                    <a href="global-optimization.html">Global Optimization</a>
                  </h3>
                  <span className="card-border position-relative"></span>
                  <p className="mt-7">
                    An ideal mix of involvement and skill to further our focus
                    on technology. advancement.
                  </p>
                </div>
                <div className="card-footer justify-content-between align-items-center d-flex px-1-9 py-3 rounded-0 z-index-3 position-relative">
                  <a href="global-optimization.html">Read more</a>
                  <a href="global-optimization.html">
                    <i className="ti-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mt-15 wow fadeIn"
              data-wow-delay="600ms"
            >
              <div
                className="card card-style1 border-0 bg-img rounded-0 cover-background overflow-visible"
                data-background="img/service/services-3.jpg"
              >
                <div className="text-center card-body p-1-9 z-index-3 position-relative">
                  <div className="card-icon">
                    <i className="flaticon-044-light display-8 text-white"></i>
                  </div>
                  <h3 className="mb-3 h4">
                    <a href="renewable-energy.html">Renewable Energy</a>
                  </h3>
                  <span className="card-border position-relative"></span>
                  <p className="mt-7">
                    An ideal mix of involvement and skill to further our focus
                    on technology. advancement.
                  </p>
                </div>
                <div className="card-footer justify-content-between align-items-center d-flex px-1-9 py-3 rounded-0 z-index-3 position-relative">
                  <a href="renewable-energy.html">Read more</a>
                  <a href="renewable-energy.html">
                    <i className="ti-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
