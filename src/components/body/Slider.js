import React from "react";
//components
import { Parallax } from "react-parallax";
//photos
import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';
import slide4 from '../../assets/img/slide4.jpg';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  color: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const Slider = () => {
  return(
  <>
  <div className='text-center mb-4 display-6'>Digital marketing agency driven by results.</div>
  <div style={styles}>
    <Parallax bgImage={slide1} strength={500}>
      <div style={{ height: '97vh' }}>
        <div style={insideStyles}>
            <p>Online Web Experience for a legendary high-end audio equipment manufacturer</p>
            <p>Creative Design to Development on Sitecore Enterprise CMS</p>
            <button className="btn btn-outline-light">See Case Study</button>
        </div>
      </div>
    </Parallax>
    <Parallax bgImage={slide2} strength={500}>
      <div style={{ height: '117vh' }}>
        <div style={insideStyles}>
            <p>A multi-language Magento eCommerce website for a luxury interiors brand</p>
            <p>Digital Design, UX Development, Magento eCommerce Development</p>
            <button className="btn btn-outline-light">See Case Study</button>
        </div>
      </div>
    </Parallax>
    <Parallax bgImage={slide3} strength={500}>
      <div style={{ height: '97vh' }}>
        <div style={insideStyles}>
        <p>A multi-language Magento eCommerce website for a luxury interiors brand</p>
        <p>Digital Design, UX Development, Magento eCommerce Development</p>
        <button className="btn btn-outline-light">See Case Study</button>
        </div>
      </div>
    </Parallax>
    <Parallax bgImage={slide4} strength={500}>
      <div style={{ height: '97vh' }}>
        <div style={insideStyles}>
        <p>Designed and developed an award winning app according to Mashable</p>
        <p>Digital Design, Mobile App, Platform Development, Marketing Research, UI/Design, UX/Development</p>
        <button className="btn btn-outline-light">See Case Study</button>
        </div>
      </div>
    </Parallax>    
  </div>
  </>
)};
export default Slider;