import NavBar from '../components/NavBar';
import Footer from '../components/Footer'


function MainPage(){


  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };
  return (
      <div style={containerStyle}>
          <>
            <NavBar></NavBar>
                <section className="section" id="section--1">
                    <div className="section__title">
                      <h2 className="section__description">Features</h2>
                      <h3 className="section__header">
                        Everything you need in a modern bank and more.
                      </h3>
                    </div>

                    <div className="features">
                      <img
                        src="img/digital-lazy.jpg"
                        data-src="img/digital.jpg"
                        alt="Computer"
                        className="features__img lazy-img"
                      />
                      <div className="features__feature">
                        <div className="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-monitor"></use>
                          </svg>
                        </div>
                        <h5 className="features__header">100% digital bank</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
                          sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
                          debitis ducimus.
                        </p>
                      </div>

                      <div className="features__feature">
                        <div className="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-trending-up"></use>
                          </svg>
                        </div>
                        <h5 className="features__header">Watch your money grow</h5>
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
                        className="features__img lazy-img"
                      />

                      <img
                        src="img/card-lazy.jpg"
                        data-src="img/card.jpg"
                        alt="Credit card"
                        className="features__img lazy-img"
                      />
                      <div className="features__feature">
                        <div className="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-credit-card"></use>
                          </svg>
                        </div>
                        <h5 className="features__header">Free debit card included</h5>
                        <p>
                          Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
                          eveniet consequatur odit quam quos possimus assumenda dicta fuga
                          inventore ab.
                        </p>
                      </div>
                    </div>
                    <div className="section__title">
                      <h2 className="section__description">Features</h2>
                      <h3 className="section__header">
                        Everything you need in a modern bank and more.
                      </h3>
                    </div>

                    <div className="features">
                      <img
                        src="img/digital-lazy.jpg"
                        data-src="img/digital.jpg"
                        alt="Computer"
                        className="features__img lazy-img"
                      />
                      <div className="features__feature">
                        <div className="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-monitor"></use>
                          </svg>
                        </div>
                        <h5 className="features__header">100% digital bank</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
                          sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
                          debitis ducimus.
                        </p>
                      </div>

                      <div className="features__feature">
                        <div className="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-trending-up"></use>
                          </svg>
                        </div>
                        <h5 className="features__header">Watch your money grow</h5>
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
                        className="features__img lazy-img"
                      />

                      <img
                        src="img/card-lazy.jpg"
                        data-src="img/card.jpg"
                        alt="Credit card"
                        className="features__img lazy-img"
                      />
                      <div className="features__feature">
                        <div className="features__icon">
                          <svg>
                            <use xlink:href="img/icons.svg#icon-credit-card"></use>
                          </svg>
                        </div>
                        <h5 className="features__header">Free debit card included</h5>
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
export default MainPage;