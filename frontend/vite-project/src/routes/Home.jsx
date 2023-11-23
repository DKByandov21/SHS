import React, { useRef, useEffect } from 'react';
import BannerVideo from '../assets/banner-video.mp4'
import Arrow from '../assets/arrow.png'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'



function HomePage(){

  const section1Ref = useRef(null);

  const handleScroll = () => {
    if (section1Ref.current) {
      const sectionTop = section1Ref.current.offsetTop;
      const scrollPosition = window.scrollY ;

      const threshold = 1000;

      if (scrollPosition > sectionTop - threshold) {
        console.log('Scrolled down to the section!');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const handleClick = () => {
    if (section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };
  return (
      <div style={containerStyle}>
          <>
            <NavBar></NavBar>

                <div>
                  <div className="content-banner1"></div>
                  <div className='content-banner'>
                    <video width={"1920px"} muted loop autoPlay>
                      <source src={BannerVideo} type="video/mp4" />
                    </video>
                  </div>
                    <div>
                        <img className='arrow' onClick={handleClick} src = {Arrow}></img>
                    </div>  
      
                </div>

                <section class="section" ref={section1Ref} id="section--1">
                    <div class="section__title">
                      <h2 class="section__description">Features</h2>
                      <h3 class="section__header">
                        Everything you need in a modern bank and more.
                      </h3>
                    </div>

                    <div class="features">
                      <img
                        src="img/digital-lazy.jpg"
                        data-src="img/digital.jpg"
                        alt="Computer"
                        class="features__img lazy-img"
                      />
                      <div class="features__feature">
                        <div class="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-monitor"></use>
                          </svg>
                        </div>
                        <h5 class="features__header">100% digital bank</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
                          sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
                          debitis ducimus.
                        </p>
                      </div>

                      <div class="features__feature">
                        <div class="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-trending-up"></use>
                          </svg>
                        </div>
                        <h5 class="features__header">Watch your money grow</h5>
                        <p>
                          Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
                          inventore ab? Nulla incidunt eius numquam sequi iste pariatur
                          quibusdam!
                        </p>
                      </div>
                      <img
                        src="img/grow-lazy.jpg"
                        data-src="img/grow.jpg"
                        alt="Plant"
                        class="features__img lazy-img"
                      />

                      <img
                        src="img/card-lazy.jpg"
                        data-src="img/card.jpg"
                        alt="Credit card"
                        class="features__img lazy-img"
                      />
                      <div class="features__feature">
                        <div class="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-credit-card"></use>
                          </svg>
                        </div>
                        <h5 class="features__header">Free debit card included</h5>
                        <p>
                          Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
                          eveniet consequatur odit quam quos possimus assumenda dicta fuga
                          inventore ab.
                        </p>
                      </div>
                    </div>
                    <div class="section__title">
                      <h2 class="section__description">Features</h2>
                      <h3 class="section__header">
                        Everything you need in a modern bank and more.
                      </h3>
                    </div>

                    <div class="features">
                      <img
                        src="img/digital-lazy.jpg"
                        data-src="img/digital.jpg"
                        alt="Computer"
                        class="features__img lazy-img"
                      />
                      <div class="features__feature">
                        <div class="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-monitor"></use>
                          </svg>
                        </div>
                        <h5 class="features__header">100% digital bank</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
                          sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
                          debitis ducimus.
                        </p>
                      </div>

                      <div class="features__feature">
                        <div class="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-trending-up"></use>
                          </svg>
                        </div>
                        <h5 class="features__header">Watch your money grow</h5>
                        <p>
                          Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
                          inventore ab? Nulla incidunt eius numquam sequi iste pariatur
                          quibusdam!
                        </p>
                      </div>
                      <img
                        src="img/grow-lazy.jpg"
                        data-src="img/grow.jpg"
                        alt="Plant"
                        class="features__img lazy-img"
                      />

                      <img
                        src="img/card-lazy.jpg"
                        data-src="img/card.jpg"
                        alt="Credit card"
                        class="features__img lazy-img"
                      />
                      <div class="features__feature">
                        <div class="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-credit-card"></use>
                          </svg>
                        </div>
                        <h5 class="features__header">Free debit card included</h5>
                        <p>
                          Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
                          eveniet consequatur odit quam quos possimus assumenda dicta fuga
                          inventore ab.
                        </p>
                      </div>
                    </div>
                  </section>
                
            <Footer></Footer>
        </>
      </div>
      );
};

export default HomePage;