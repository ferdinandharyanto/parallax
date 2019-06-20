import React, { Component } from 'react';
import "../App.css";
let back = './img/biel-morro-259739-unsplash.jpg';
let main1 = './img/main-visual-addon-1.png';
let main2 = './img/bunga-png-9.png';

class Parallax extends Component{
    render() {
        return(
        <main className="main-container">
      <div className="gui gui-mask"></div>
      <div className="gui gui-top">
        <nav className="gui__nav nav">
          <a href="#services" className="nav__item">
            Services
          </a>
          <a href="#school" className="nav__item">
            School
          </a>
        </nav>

        <nav className="gui__secondary-nav nav">
          <a href="#home" className="nav__item">
            Home
          </a>
          <a href="#services" className="nav__item">
            Services
          </a>
          <a href="#school" className="nav__item">
            School
          </a>
        </nav>
		</div>
		<div className="gui gui-pagination">
				<a className="gui-pagination__item active" href="#home">01</a>
				<a className="gui-pagination__item" href="#services">02</a>
				<a className="gui-pagination__item" href="#school">03</a>
				<a className="gui-pagination__item gui-pagination__next-slide" href="#next-section"><span></span></a>
		</div>
		<button type="button" className="gui gui-menu-btn"><span></span></button>
			
		<div className="page-progress"><span></span></div>
		<div className="content">
		<header className="hero" id="home">
				<div className="section-progress"></div>
					<div className="hero__bg"
							 data-rellax-percentage="0.5"
							 data-rellax-speed="-2">
						<div className="image" style={{ backgroundImage: 'url(' + back + ')' }}></div>
					</div>
					
					<div className="clouds"></div>
					
					<div className="hero__addon-left" style={{  backgroundImage: 'url(' + main1 + ')'}}></div>
					<div className="hero__addon-right" style={{  backgroundImage: 'url(' + main2 + ')'}}></div>
			
					<div className="wrapper">
						<div className="textbox">
							<div className="headline section-label">
								<h3 className="subtitle">welcome</h3>
								<h1 className="title">Lorem Ipsum</h1>
							</div>

							<p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#services">
                            <button type="button" className="orange-btn orange-btn-fullwidth"><span>Show More</span></button>
                            </a>
                        </div>
					</div>
					
					<div className="section-footer progress-trigger" data-progress-color="purple">
						<img src="./img/section-footer_white.svg" alt="footer-white"/>
						
						<div className="section-progress"></div>
					</div>

			</header>
			<section className="section section-services" id="services" data-gui-state="dark">
					<div className="section-index"
							 data-rellax-percentage="0.5"
							 data-rellax-speed="-3">
						<img src="img/02.svg" alt="img2"/>
					</div>
					
					<div className="wrapper">
						<svg width="81px" 
								 height="39px" 
								 viewBox="0 0 81 39" 
								 className="services-visual-01" 
								 data-rellax-speed="-1"
								 data-rellax-percentage="0.5">
							<path d="M288.611662,1453.16328 C295.156066,1443.19928 216.938888,1402.98181 208.093655,1432.84528 C205.12378,1442.87269 273.666484,1475.91957 288.611662,1453.16328" transform="translate(-208.000000, -1422.000000)" fill="#c73262" stroke="none"></path>
						</svg>
						<svg width="36px" 
								 height="36px" 
								 viewBox="0 0 36 36" 
								 className="services-visual-02" 
								 data-rellax-speed="-1"
								 data-rellax-percentage="0.5">
							<path d="M434,1603 C434,1593.05862 425.940157,1585 416.00079,1585 C406.059843,1585 398,1593.05862 398,1603 C398,1612.94138 406.059843,1621 416.00079,1621 C425.940157,1621 434,1612.94138 434,1603" stroke="none" transform="translate(-398.000000, -1585.000000)" fill="#c73262"></path>
						</svg>
						
						<div className="animated-element textbox">
							<div className="headline section-label">
								<h4 className="subtitle">services</h4>
								<h1 className="title">We offer a wide variety top quality services for wireless industry.</h1>
							</div>

							<p className="text">We have grown and changed with the industry. Our specialty is antenna & line installation, along with troubleshooting to name a few. See our full list of services below.</p>
						</div>

						<div className="tiles">
							<div class="tiles__item tile animated-element">
								<div className="tile__icon"><img src="/img/evie-s-552973-unsplash.jpg" alt="imgsvg" /></div>
								<h4 className="tile__title title-small">Lorem Ipsum</h4>
								<p className="text-small">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>

							<div className="tiles__item tile animated-element">
								<div className="tile__icon"><img src="/img/evie-s-552979-unsplash.jpg" alt="img1" /></div>
								<h4 className="tile__title title-small">Lorem Ipsum</h4>
								<p className="text-small">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>

							<div className="tiles__item tile animated-element">
								<div className="tile__icon"><img src="/img/evie-s-552987-unsplash.jpg" alt="img2svg" /></div>
								<h4 className="tile__title title-small">Lorem Ipsum</h4>
								<p className="text-small">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>

							<div className="tiles__item tile animated-element">
								<div className="tile__icon"><img src="/img/evie-s-728405-unsplash.jpg" alt="img3svg" /></div>
								<h4 className="tile__title title-small">Lorem Ipsum</h4>
								<p className="text-small">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>

							<div className="tiles__item tile animated-element">
								<div className="tile__icon"><img src="/img/evie-s-741030-unsplash.jpg" alt="img4svg" /></div>
								<h4 className="tile__title title-small">Lorem Ipsum</h4>
								<p className="text-small">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>

							<div className="tiles__item tile animated-element">
								<div className="tile__icon"><img src="/img/evie-s-803062-unsplash.jpg" alt="img5svg" /></div>
								<h4 className="tile__title title-small">Lorem Ipsum</h4>
								<p className="text-small">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>
						</div>
					</div>
					
					<div className="section-progress"></div>
					
					<div className="section-footer progress-trigger" data-progress-color="white">
						<img src="/img/section-footer_purple.svg" alt="footer-purple" />
						<div className="section-progress"></div>
					</div>
				</section>
                <section className="section section-school background-purple" id="school" data-gui-state="">
					<div className="section-index" data-rellax-speed="-4" data-rellax-percentage="0.5">
                        <img src="./img/03.svg"/></div>
					
					<div className="wrapper">
						<svg width="143px" height="124px" viewBox="0 0 143 124" className="school-visual-01" 
								 data-rellax-speed="-2"
								 data-rellax-percentage="0.5">
							<path d="M172.059665,58.5946915 C253.280075,33.4314539 205.276963,100.711508 266.523695,110.984161 C327.770427,121.256813 300.780704,187.000202 237.457223,175.698697 C174.136415,164.399838 135.741944,69.8459437 172.059665,58.5946915" transform="translate(-158.000000, -53.000000)" fill="#c73262" stroke="none"></path>
						</svg>
						<svg width="36px" height="36px" viewBox="0 0 36 36" className="school-visual-02" 
								 data-rellax-speed="-2"
								 data-rellax-percentage="0.5">
							<path d="M434,1603 C434,1593.05862 425.940157,1585 416.00079,1585 C406.059843,1585 398,1593.05862 398,1603 C398,1612.94138 406.059843,1621 416.00079,1621 C425.940157,1621 434,1612.94138 434,1603" stroke="none" transform="translate(-398.000000, -1585.000000)" fill="#c73262"></path>
						</svg>
						
						<div className="animated-element textbox">
							<div className="headline section-label">
								<h4 className="subtitle">school</h4>
								<h1 className="title">We welcome new people to the industry!</h1>
							</div>

							<p className="text">Our unique educational program and training facility allow us train new field-ready specialists within 3-week timeframe.  Years of experience condensed in 3-week program, will give you essential information as well as a foundation to start your new career. You will learn safety, best techniques, newest technology, the tools and machinery of the industry, working with ropes, rigging, communication and more. We offer paid internships for qualified candidates, an industry standard we are proud to be at the forefront of.</p>
						</div>
					
						<img src="./img/annie-spratt-198810-unsplash.jpg" class="visual" data-rellax-percentage="0.5" data-rellax-speed="-1" />
					</div>
					
					<div className="section-progress"></div>
					
					<div className="section-footer progress-trigger" data-progress-color="purple">
						<img src="./img/section-footer_white.svg" />
						<div className="section-progress"></div>
					</div>
				</section>
		</div>
    </main>
        )
    }
}

export default Parallax;