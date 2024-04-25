import React from "react";

function Banner() {
  return (
    <div>
      <section className="full-screen py-0 top-position1">
        <div className="slider-fade owl-carousel owl-theme w-100">
          <div
            className="item bg-img cover-background theme-overlay-dark-blue"
            data-overlay-dark="55"
            // data-background="/src/img/banner/slide-01.jpg"
            style={{ backgroundImage: `url(${'src/img/banner/battery-slide1.jpg'})`}}
          >
            <div className="container h-100">
              <div className="d-table w-100 h-100">
                <div className="d-table-cell align-middle">
                  <div className="row justify-content-center text-center position-relative">
                    <div className="col-md-10 col-lg-9 col-xl-8 z-index-3 position-relative main-banner-area">
                      <span className="banner-icon d-none d-lg-block animated fadeInUp">
                        <i className="flaticon-032-ecology display-8 text-white"></i>
                      </span>
                      <p className="text-secondary font-weight-800 display-29 display-lg-28 display-xl-26 mb-2 text-shadow animated fadeInUp">
                        As a world innovator in energy stockpiling.
                      </p>
                      <span className="card-border position-relative animated fadeInUp"></span>
                      <h1 className="text-white display-19 display-sm-15 display-md-13 display-lg-4 display-xxl-3 mb-4 text-shadow animated fadeInUp">
                        Biggest Producer of Wind and Solar Energy
                      </h1>
                      <a
                        href="contact.html"
                        className="btn-style2 animated fadeInUp"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item bg-img cover-background theme-overlay-dark-blue"
            data-overlay-dark="55"
            // data-background="img/banner/slide-02.jpg"
            style={{ backgroundImage: `url(${'src/img/banner/battery-slide2.jpg'})`}}
          >
            <div className="container h-100">
              <div className="d-table w-100 h-100">
                <div className="d-table-cell align-middle">
                  <div className="row justify-content-center text-center position-relative">
                    <div className="col-md-10 col-lg-9 col-xl-8 z-index-3 position-relative main-banner-area">
                      <span className="banner-icon d-none d-lg-block">
                        <i className="flaticon-032-ecology display-8 text-white"></i>
                      </span>
                      <p className="text-secondary font-weight-800 display-29 display-lg-28 display-xl-26 mb-2 text-shadow">
                        As a world innovator in energy stockpiling.
                      </p>
                      <span className="card-border position-relative"></span>
                      <h1 className="text-white display-19 display-sm-15 display-md-13 display-lg-4 display-xxl-3 mb-4 text-shadow">
                        Manageable, Reliable and Affordable Energy!
                      </h1>
                      <a href="contact.html" className="btn-style2">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item bg-img cover-background theme-overlay-dark-blue"
            data-overlay-dark="55"
            // data-background="img/banner/slide-03.jpg"
            style={{ backgroundImage: `url(${'src/img/banner/battery-slide3.jpg'})`}}
          >
            <div className="container h-100">
              <div className="d-table w-100 h-100">
                <div className="d-table-cell align-middle">
                  <div className="row justify-content-center text-center position-relative">
                    <div className="col-md-10 col-lg-9 col-xl-8 z-index-3 position-relative main-banner-area">
                      <span className="banner-icon d-none d-lg-block animated fadeInUp">
                        <i className="flaticon-047-windmill display-8 text-white"></i>
                      </span>
                      <p className="text-secondary font-weight-800 display-29 display-lg-28 display-xl-26 mb-2 text-shadow animated fadeInUp">
                        As a world innovator in energy stockpiling.
                      </p>
                      <span className="card-border position-relative fadeInUp"></span>
                      <h1 className="text-white display-19 display-sm-15 display-md-13 display-lg-4 display-xxl-3 mb-4 text-shadow animated fadeInUp">
                        Evergreen Producer of Wind Energy
                      </h1>
                      <a
                        href="contact.html"
                        className="btn-style2 animated fadeInUp"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
