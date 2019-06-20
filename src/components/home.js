import React, { Component } from 'react';
let imgUrl = './img/background.jpg';
let main1 = './img/main-visual-addon-1.png';
let main2 = './img/main-visual-addon-2.png';
class Home extends Component{
    render() {
        return(
            <header className="hero" id="home">
				<div className="section-progress"></div>
					<div className="hero__bg"
							 data-rellax-percentage="0.5"
							 data-rellax-speed="-2">
						<div className="image" style={{  backgroundImage: 'url(' + imgUrl + ')'}}></div>
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
                            <button type="submit" class="orange-btn orange-btn-fullwidth"><span>Show More</span></button>
                        </div>
					</div>
					
					<div className="section-footer progress-trigger" data-progress-color="purple">
						<img src="img/section-footer_white.svg" />
						
						<div className="section-progress"></div>
					</div>

			</header>
        )
    }
}
export default Home;