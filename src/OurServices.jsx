import React from "react";
import ChooseUs from "./ChooseUs";
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
         <ChooseUs/>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
