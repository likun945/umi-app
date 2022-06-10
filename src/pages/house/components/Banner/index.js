import AwesomeSwiper from 'react-awesome-swiper';
import React, { useState, useEffect } from 'react';

export default function (props) {
  const [config, setConfig] = useState({
    loop: true,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  useEffect(() => {}, []);

  return (
    <AwesomeSwiper className="banner" config={config}>
      <div className="swiper-wrapper">
        {props?.banner?.map((item, index) => (
          <div key={index} className="swiper-slide">
            <img
              alt="banner"
              src={
                'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'
              }
            />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  );
}
