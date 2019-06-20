import React, {Component} from 'react';
class Services extends Component{
    render(){
        return(
       <section class="section section-services" id="services" data-gui-state="dark">
					<div class="section-index"
							 data-rellax-percentage="0.5"
							 data-rellax-speed="-3">
						<img src="img/02.svg" />
					</div>
					
					<div class="wrapper">
						<svg width="81px" 
								 height="39px" 
								 viewBox="0 0 81 39" 
								 class="services-visual-01" 
								 data-rellax-speed="-1"
								 data-rellax-percentage="0.5">
							<path d="M288.611662,1453.16328 C295.156066,1443.19928 216.938888,1402.98181 208.093655,1432.84528 C205.12378,1442.87269 273.666484,1475.91957 288.611662,1453.16328" transform="translate(-208.000000, -1422.000000)" fill="#3BC4F4" stroke="none"></path>
						</svg>
						<svg width="36px" 
								 height="36px" 
								 viewBox="0 0 36 36" 
								 class="services-visual-02" 
								 data-rellax-speed="-1"
								 data-rellax-percentage="0.5">
							<path d="M434,1603 C434,1593.05862 425.940157,1585 416.00079,1585 C406.059843,1585 398,1593.05862 398,1603 C398,1612.94138 406.059843,1621 416.00079,1621 C425.940157,1621 434,1612.94138 434,1603" stroke="none" transform="translate(-398.000000, -1585.000000)" fill="#FFAA00"></path>
						</svg>
						
						<div class="animated-element textbox">
							<div class="headline section-label">
								<h4 class="subtitle">services</h4>
								<h1 class="title">We offer a wide variety top quality services for wireless industry.</h1>
							</div>

							<p class="text">We have grown and changed with the industry. Our specialty is antenna & line installation, along with troubleshooting to name a few. See our full list of services below.</p>
						</div>

						<div class="tiles">
							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/0.svg" /></div>
								<h4 class="tile__title title-small">Project management</h4>
								<p class="text-small">Our fundamental service. Something that distinguishes us from the competition, and which all of our clients recognize is our project management. The engine of our company.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img1.svg" /></div>
								<h4 class="tile__title title-small">Antenna and Line installation</h4>
								<p class="text-small">The most of our experience lay here. Something we know better than most of our competitors.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/2.svg" /></div>
								<h4 class="tile__title title-small">Drone audits</h4>
								<p class="text-small">New technology? We are already there. Always finding new implementations for our clients benefit.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/3.svg" /></div>
								<h4 class="tile__title title-small">Testing & Integration</h4>
								<p class="text-small">Simple and straightforward. Precision and deep knowledge allow us to do the project right the first time.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/4.svg" /></div>
								<h4 class="tile__title title-small">Education and Training</h4>
								<p class="text-small">3 week long course built by our professionals. We introduce new people to the industry and we do it with class. In our 3 week long course, we introduce individuals to the growing industry. By giving them the skills and knowledge to build upon their career we pride ourselves in producing individuals ready to work.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/5.svg" /></div>
								<h4 class="tile__title title-small">Microwave services</h4>
								<p class="text-small">Hundreds of microwave projects successfully completed by our team allow us to confidently state - “We are the best.”</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/6.svg" /></div>
								<h4 class="tile__title title-small">Small Cell</h4>
								<p class="text-small">Small Cell is a base of on the way to 5G. We are always in vanguard; this is not an exception. The basis of 5G will be build upon the 4G infostructure. As with all aspects of Belazor Technologies Inc we pride ourselves in being in the forefront of small cell technology.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="./img/7.svg" /></div>
								<h4 class="tile__title title-small">Maintenance & Troubleshooting</h4>
								<p class="text-small">Experience, understanding and background allow us to be the first choice.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="./img/8.svg" /></div>
								<h4 class="tile__title title-small">Civil & Electrical services</h4>
								<p class="text-small">Licensed, insured and knowledgeable. Our civil crews are always accessible.</p>
							</div>
						</div>
					</div>
					
					<div class="section-progress"></div>
					
					<div class="section-footer progress-trigger" data-progress-color="white">
						<img src="/img/section-footer_purple.svg" />
						<div class="section-progress"></div>
					</div>
				</section>
        )
    }
}
export default Services;