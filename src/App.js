import React from "react";
import "./App.css";
let imgUrl = './img/background.jpg';
let main1 = './img/main-visual-addon-1.png';
let main2 = './img/main-visual-addon-2.png';
function App() {
  return (
	<main className="main-container">
		<div class="topbar">
				<div className="topbar__logo">
					<svg viewBox="80 60 920 320" class="main-logo">
						<g className="main-logo__text">
							<g>
								<path fill="white" d="M582.9,169.9v21.9c3.4-4.2,8-6.3,13.8-6.3c5.8,0,10.4,2.1,13.7,6.3c3.3,4.2,5,9.6,5,16.1
									c0,7-1.8,12.7-5.4,17c-3.6,4.3-8.3,6.5-14,6.5c-6,0-10.6-2.2-13.7-6.7l-2.8,5.5h-8.6v-60.3H582.9z M592.9,194.7
									c-3.2,0-5.8,1.2-7.7,3.6c-1.9,2.4-2.8,5.7-2.8,9.8c0,4.2,0.9,7.6,2.8,10c1.9,2.4,4.4,3.6,7.7,3.6c3.1,0,5.6-1.2,7.5-3.7
									c1.9-2.5,2.8-5.8,2.8-10c0-4-0.9-7.2-2.8-9.7C598.5,195.9,596,194.7,592.9,194.7z"/>
								<path fill="white" d="M680.9,169.9v60.3h-12v-60.3H680.9z"/>
								<path fill="white" d="M729.7,230.2h-12.2c-0.4-1.1-0.7-2.5-0.8-4.2c-3.7,3.7-8.4,5.5-14.1,5.5c-4.9,0-8.7-1.2-11.4-3.5
									c-2.8-2.3-4.1-5.6-4.1-9.7c0-1.9,0.2-3.5,0.7-4.9c0.5-1.4,1.3-2.6,2.4-3.6c1.1-1,2.1-1.7,3.1-2.4c1-0.6,2.4-1.1,4.1-1.5
									c1.7-0.4,3.2-0.7,4.2-0.9c1.1-0.2,2.6-0.4,4.5-0.6c4.2-0.6,7.1-1.2,8.5-1.8c1.4-0.6,2.2-1.8,2.2-3.5c0-3.9-2.6-5.8-7.9-5.8
									c-2.8,0-4.8,0.5-6.1,1.5c-1.3,1-2.1,2.7-2.5,5.2h-11.3c0.7-9.8,7.4-14.7,20.2-14.7c12.7,0,19.1,4.7,19.1,14.2v18.9
									C728.2,223.8,728.7,227.8,729.7,230.2z M716.6,208.9c-1.4,0.8-4.2,1.6-8.5,2.3c-3.6,0.6-5.9,1.3-6.9,2.1
									c-1.2,1.1-1.9,2.5-1.9,4.4c0,1.8,0.6,3.2,1.7,4.3c1.2,1,2.8,1.6,4.9,1.6c3.2,0,5.8-0.9,7.7-2.6c1.9-1.7,2.9-4.1,2.9-7.2V208.9z"
									/>
								<path fill="white" d="M772.4,186.5v8.7l-23,25.5h24.5v9.5h-40.2V221l23.1-25.3h-21.3v-9.2H772.4z"/>
								<path fill="white" d="M799.5,185.2c6.7,0,12.1,2.1,16.2,6.3c4.1,4.2,6.1,9.8,6.1,16.8c0,7-2,12.6-6.1,16.8
									c-4.1,4.2-9.6,6.3-16.4,6.3c-6.8,0-12.3-2.1-16.4-6.3c-4.1-4.2-6.2-9.8-6.2-16.8c0-6.9,2.1-12.5,6.3-16.8
									C787.2,187.3,792.7,185.2,799.5,185.2z M799.2,194.3c-3.2,0-5.8,1.2-7.6,3.7c-1.9,2.5-2.8,5.9-2.8,10.2c0,4.5,0.9,7.9,2.8,10.4
									c1.9,2.5,4.5,3.7,7.8,3.7c3.3,0,5.9-1.3,7.7-3.8s2.8-6,2.8-10.5c0-4.3-0.9-7.7-2.8-10.2C805.1,195.6,802.5,194.3,799.2,194.3z"/>
								<path fill="white" d="M856.4,185.7v11.1c-1.7-0.3-3.2-0.5-4.7-0.5c-4,0-6.9,1.3-8.7,3.8c-1.9,2.5-2.8,5.9-2.8,10.1v20h-12
									v-43.7h11.4v8c2.9-6,7.6-9.1,14.1-9.1C854.3,185.5,855.2,185.5,856.4,185.7z"/>
								<path fill="white" d="M585.1,266.4v4.3h-9v27.6c0,1.5,0,2.5,0.1,3.1c0.1,0.6,0.2,1.3,0.5,2.1c0.3,0.8,0.9,1.4,1.6,1.6
									c0.8,0.3,1.9,0.4,3.2,0.4c0.8,0,1.9-0.1,3.5-0.3v4.6c-1.8,0.2-3.3,0.3-4.7,0.3c-5.2,0-8.3-1.7-9.1-5c-0.3-1.4-0.5-4.6-0.5-9.6
									v-25v-4.3v-13.3h5.2v13.3H585.1z"/>
								<path fill="white" d="M667.7,294.4c-0.7,5.1-2.7,9.2-5.9,12.2c-3.2,3.1-7.4,4.6-12.5,4.6c-6.1,0-11-2.1-14.6-6.2
									c-3.7-4.1-5.5-9.6-5.5-16.4c0-7.1,1.8-12.8,5.5-17.1c3.7-4.3,8.6-6.4,14.8-6.4c5,0,9.1,1.3,12.2,4c3.1,2.7,5,6.3,5.6,11h-5.4
									c-1.4-7.1-5.5-10.6-12.4-10.6c-4.6,0-8.2,1.7-10.9,5c-2.7,3.4-4,7.9-4,13.6c0,5.7,1.3,10.2,3.9,13.6c2.6,3.4,6.1,5,10.5,5
									c3.7,0,6.7-1.1,9-3.3c2.3-2.2,3.8-5.2,4.3-9.2H667.7z"/>
								<path fill="white" d="M678.3,249.7c0,14.4,0,22.8-0.1,25c3.1-6.2,8.1-9.3,15.1-9.3c5,0,8.8,1.4,11.4,4.1
									c2.6,2.7,3.8,6.6,3.8,11.7V310h-5.3v-28.1c0-8-3.7-12-11.2-12c-4.7,0-8.1,1.6-10.4,4.8c-2.2,3.2-3.3,7.3-3.3,12.4V310H673v-60.3
									H678.3z"/>
								<path fill="white" d="M721.3,266.4v8.2c1.8-3.2,3.9-5.6,6.3-7.1c2.4-1.5,5.4-2.3,9.1-2.3c4.5,0,8.2,1.2,10.9,3.7
									c2.8,2.5,4.1,6.3,4.1,11.3V310h-5.3V282c0-8.1-3.7-12.1-11.1-12.1c-4.2,0-7.5,1.4-10,4.2c-2.5,2.8-3.7,6.9-3.7,12.3V310h-5.3
									v-43.5H721.3z"/>
								<path fill="white" d="M778.1,265.2c6.3,0,11.2,2.1,14.9,6.3c3.7,4.2,5.5,9.8,5.5,16.9c0,7.1-1.8,12.6-5.5,16.7
									c-3.7,4.1-8.7,6.1-15,6.1c-6.3,0-11.4-2.1-15.1-6.2c-3.8-4.1-5.6-9.8-5.6-16.8c0-7,1.9-12.6,5.6-16.8
									C766.8,267.3,771.8,265.2,778.1,265.2z M789.1,274.7c-2.8-3.4-6.5-5-11.1-5s-8.3,1.7-11.1,5c-2.8,3.4-4.1,7.9-4.1,13.5
									c0,5.8,1.4,10.3,4.1,13.6c2.7,3.3,6.5,5,11.3,5c4.6,0,8.3-1.7,11-5c2.7-3.3,4.1-7.8,4.1-13.5
									C793.3,282.6,791.9,278.1,789.1,274.7z"/>
								<path fill="white" d="M809.9,249.7V310h-5.2v-60.3H809.9z"/>
								<path fill="white" d="M836.6,265.2c6.3,0,11.2,2.1,14.9,6.3c3.7,4.2,5.5,9.8,5.5,16.9c0,7.1-1.8,12.6-5.5,16.7
									c-3.7,4.1-8.7,6.1-15,6.1s-11.4-2.1-15.1-6.2c-3.8-4.1-5.6-9.8-5.6-16.8c0-7,1.9-12.6,5.6-16.8
									C825.3,267.3,830.3,265.2,836.6,265.2z M847.6,274.7c-2.8-3.4-6.5-5-11.1-5c-4.6,0-8.3,1.7-11.1,5c-2.8,3.4-4.1,7.9-4.1,13.5
									c0,5.8,1.4,10.3,4.1,13.6c2.7,3.3,6.5,5,11.3,5c4.6,0,8.3-1.7,11-5c2.7-3.3,4.1-7.8,4.1-13.5
									C851.8,282.6,850.4,278.1,847.6,274.7z"/>
								<path fill="white" d="M900,266.4v41.1c0,13-6.5,19.5-19.5,19.5c-5.3,0-9.5-1.1-12.6-3.4c-3.1-2.3-4.8-5.5-5.1-9.7h5.3
									c0.8,6,5.1,9,12.6,9c5.1,0,8.8-1.3,11-4c2.2-2.7,3.3-6.6,3.3-11.8v-7.3c-2.9,6.4-8,9.6-15.1,9.6c-5.8,0-10.3-2-13.8-5.9
									c-3.4-3.9-5.1-9.2-5.1-15.7c0-6.8,1.8-12.3,5.3-16.4c3.5-4.1,8.2-6.2,14-6.2c6.9,0,11.8,3.1,14.8,9.4v-8.2H900z M891,274.4
									c-2.6-3.1-6.1-4.6-10.4-4.6c-4.3,0-7.8,1.6-10.4,4.7c-2.6,3.2-3.9,7.5-3.9,12.9c0,5.3,1.3,9.5,3.8,12.7c2.5,3.2,6,4.7,10.2,4.7
									c4.5,0,8-1.6,10.6-4.9c2.6-3.2,3.9-7.6,3.9-13.2C894.9,281.6,893.6,277.5,891,274.4z"/>
								<path fill="white" d="M913.3,249.4v8.7H908v-8.7H913.3z M913.3,266.4V310H908v-43.5H913.3z"/>
								<path fill="white" d="M995.1,279.1h-5.2c-0.5-6.3-4.4-9.5-11.8-9.5c-3.1,0-5.6,0.6-7.4,1.9c-1.8,1.3-2.7,3-2.7,5.2
									c0,1.1,0.2,2,0.6,2.8c0.4,0.8,0.8,1.4,1.4,1.9c0.5,0.5,1.4,0.9,2.7,1.4c1.3,0.5,2.4,0.8,3.3,1.1c0.9,0.3,2.4,0.6,4.5,1.1
									c1.9,0.5,3.4,0.8,4.5,1.1c1.1,0.3,2.5,0.8,4.2,1.5c1.7,0.7,3,1.5,3.9,2.3c1,0.8,1.8,1.9,2.5,3.3c0.7,1.4,1.1,3,1.1,4.7
									c0,4-1.6,7.2-4.8,9.7c-3.2,2.5-7.4,3.7-12.5,3.7c-5.6,0-9.9-1.4-13-4.1c-3.1-2.7-4.7-6.5-4.8-11.5h5.2c0,3.6,1.1,6.4,3.4,8.3
									c2.3,1.9,5.4,2.9,9.5,2.9c3.6,0,6.4-0.8,8.6-2.3c2.2-1.5,3.3-3.6,3.3-6.1c0-1.4-0.4-2.5-1.1-3.6c-0.7-1-1.7-1.8-2.8-2.4
									c-1.2-0.6-2.4-1.1-3.5-1.4c-1.2-0.4-2.4-0.7-3.7-1c-0.4-0.1-0.7-0.1-0.8-0.2c-0.4-0.1-1.3-0.3-2.7-0.6c-1.4-0.3-2.4-0.5-3-0.7
									c-0.6-0.1-1.5-0.4-2.7-0.8s-2.1-0.8-2.7-1.1c-0.6-0.3-1.3-0.8-2.2-1.4c-0.9-0.6-1.5-1.3-1.9-2c-0.4-0.7-0.8-1.5-1.1-2.5
									c-0.3-1-0.5-2-0.5-3.2c0-3.8,1.4-6.8,4.3-9c2.8-2.2,6.8-3.3,11.7-3.3c5,0,8.9,1.2,11.9,3.6C993.6,271.2,995.1,274.6,995.1,279.1z
									"/>
								<path fill="white" d="M651.5,217.4c-3.7,3.4-5.4,5.6-9.6,5.6c-3.2,0-5.7-1-7.5-3c-1.8-2-2.7-4.9-2.7-8.6H663v-1.2
									c0-7.7-1.9-13.8-5.8-18.2c-3.9-4.5-9.1-6.7-15.7-6.7c-6.4,0-11.6,2.2-15.7,6.6c-4.1,4.4-6.2,10-6.2,16.8c0,6.9,2,12.4,6.1,16.6
									c4.1,4.2,9.5,6.3,16.2,6.3c5,0,9.4-1.3,13-3.9c1.4-1,2.5-2.2,3.6-3.4L651.5,217.4z M634.8,196.6c1.7-1.7,3.9-2.6,6.6-2.6
									c2.8,0,5,0.9,6.6,2.7c1.6,1.8,2.5,4.2,2.8,7.1h-19.1C632,200.7,633,198.3,634.8,196.6z"/>
								<path fill="white" d="M953.5,296.5c-1.1,2.1-2.3,3.9-3.4,5.6c-2.3,3.4-5.9,5.1-10.7,5.1c-4.9,0-8.6-1.7-11-5
									c-2.5-3.4-3.7-7.5-3.7-12.6h33.6v-1.5c0-6.4-1.7-11.8-5-16.2c-3.3-4.3-8-6.5-14.2-6.5c-5.9,0-10.7,2.2-14.4,6.6s-5.5,10-5.5,16.9
									c0,6.9,1.8,12.4,5.5,16.5c3.6,4.1,8.5,6.2,14.5,6.2c5,0,9.1-1.4,12.4-4.2c2.3-2,3.8-4.8,5.1-7.6L953.5,296.5z M928.9,274
									c2.3-2.9,5.6-4.3,10-4.3c4.1,0,7.3,1.4,9.8,4.1c2.5,2.7,3.9,6.5,4.1,11.4h-28.3C925.2,280.6,926.6,276.9,928.9,274z"/>
								<path fill="white" d="M620.8,296.5c-1.1,2.1-2.3,3.9-3.4,5.6c-2.3,3.4-5.9,5.1-10.7,5.1c-4.9,0-8.6-1.7-11-5
									c-2.5-3.4-3.7-7.5-3.7-12.6h33.6v-1.5c0-6.4-1.7-11.8-5-16.2c-3.3-4.3-8-6.5-14.2-6.5c-5.9,0-10.7,2.2-14.4,6.6s-5.5,10-5.5,16.9
									c0,6.9,1.8,12.4,5.5,16.5c3.6,4.1,8.5,6.2,14.5,6.2c5,0,9.1-1.4,12.4-4.2c2.3-2,3.8-4.8,5.1-7.6L620.8,296.5z M596.2,274
									c2.3-2.9,5.6-4.3,10-4.3c4.1,0,7.3,1.4,9.8,4.1c2.5,2.7,3.9,6.5,4.1,11.4h-28.3C592.5,280.6,593.9,276.9,596.2,274z"/>
							</g>
							<g>
								<path fill="white" d="M571.4,338.1h2.7l3.9,16.3l4.4-16.3h2.8l4.3,16.3l4-16.3h2.6l-5.2,19.5h-2.7l-4.5-16.3l-4.5,16.3h-2.7
									L571.4,338.1z"/>
								<path fill="white" d="M604.5,338.1v19.5H602v-19.5H604.5z"/>
								<path fill="white" d="M612.2,338.1h8.6c4.4,0,6.5,1.8,6.5,5.4c0,1.1-0.3,2.1-0.9,3c-0.6,0.9-1.4,1.4-2.4,1.7
									c0.7,0.1,1.2,0.4,1.6,0.6c0.4,0.3,0.7,0.7,0.9,1.2c0.2,0.5,0.3,0.9,0.4,1.3c0.1,0.4,0.1,0.9,0.1,1.7c0,0.1,0,0.3,0,0.5
									c0,0.3,0,0.5,0,0.6c0,0.1,0,0.3,0,0.5c0,0.3,0.1,0.4,0.1,0.6c0,0.1,0,0.3,0.1,0.5s0.1,0.4,0.1,0.5c0.1,0.1,0.1,0.3,0.2,0.5
									c0.1,0.2,0.2,0.3,0.2,0.5c0.1,0.1,0.2,0.3,0.3,0.4h-3c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.3-0.1-0.6-0.2-1c0-0.4-0.1-0.7-0.1-0.9
									c0-0.2,0-0.6-0.1-1c0-0.4,0-0.7,0-0.7c-0.1-1.7-0.4-2.8-1-3.3c-0.6-0.5-1.8-0.8-3.5-0.8h-5.1v8.4h-2.6V338.1z M614.8,340.3v6.8
									h4.8c0.6,0,1.1,0,1.5-0.1c0.4,0,0.9-0.1,1.4-0.2c0.5-0.1,0.9-0.3,1.2-0.5c0.3-0.2,0.6-0.6,0.8-1c0.2-0.4,0.3-1,0.3-1.6
									c0-1.3-0.4-2.2-1.2-2.7c-0.8-0.5-1.9-0.7-3.2-0.7H614.8z"/>
								<path fill="white" d="M647.9,338.1v2.2H637v6.1h10.2v2.2H637v6.7h11v2.2h-13.6v-19.5H647.9z"/>
								<path fill="white" d="M667.3,355.4v2.2h-12.9v-19.5h2.6v17.2H667.3z"/>
								<path fill="white" d="M686.5,338.1v2.2h-10.9v6.1h10.2v2.2h-10.2v6.7h11v2.2H673v-19.5H686.5z"/>
								<path fill="white" d="M706.6,343.8h-2.5c-0.3-2.6-1.9-4-4.8-4c-1.4,0-2.5,0.3-3.3,0.8c-0.8,0.6-1.1,1.4-1.1,2.4
									c0,0.4,0.1,0.7,0.2,1c0.1,0.3,0.3,0.5,0.6,0.7c0.3,0.2,0.5,0.4,0.8,0.5c0.2,0.1,0.6,0.3,1.1,0.4c0.5,0.1,0.9,0.3,1.2,0.3
									c0.3,0.1,0.8,0.2,1.4,0.3c0.8,0.2,1.5,0.3,2,0.5c0.5,0.1,1.2,0.4,1.9,0.7c0.7,0.3,1.3,0.7,1.7,1c0.4,0.4,0.8,0.9,1.1,1.5
									c0.3,0.6,0.5,1.3,0.5,2.1c0,1.4-0.4,2.5-1.1,3.4c-0.8,0.9-1.7,1.6-2.8,1.9c-1.1,0.4-2.3,0.5-3.6,0.5c-2.4,0-4.4-0.6-5.9-1.7
									c-1.5-1.2-2.2-2.9-2.2-5.1h2.5c0.1,1.7,0.6,2.9,1.7,3.6c1.1,0.8,2.4,1.1,4.1,1.1c1.3,0,2.5-0.3,3.4-0.8c0.9-0.6,1.4-1.5,1.4-2.7
									c0-0.6-0.1-1.1-0.4-1.5c-0.3-0.4-0.7-0.7-1.2-1c-0.5-0.3-1.1-0.5-1.6-0.6c-0.5-0.2-1.3-0.3-2.2-0.5c-0.1,0-0.2,0-0.3-0.1
									c-2-0.5-3.3-0.8-3.9-1.1c-1.9-0.8-2.8-2.2-2.8-4.2c0-1.9,0.7-3.2,2.1-4.2c1.4-0.9,3-1.4,5-1.4c2.1,0,3.8,0.5,5.1,1.5
									C705.9,340.3,706.6,341.8,706.6,343.8z"/>
								<path fill="white" d="M727.9,343.8h-2.5c-0.3-2.6-1.9-4-4.8-4c-1.4,0-2.5,0.3-3.3,0.8c-0.8,0.6-1.1,1.4-1.1,2.4
									c0,0.4,0.1,0.7,0.2,1c0.1,0.3,0.3,0.5,0.6,0.7c0.3,0.2,0.5,0.4,0.8,0.5c0.2,0.1,0.6,0.3,1.1,0.4c0.5,0.1,0.9,0.3,1.2,0.3
									c0.3,0.1,0.8,0.2,1.4,0.3c0.8,0.2,1.5,0.3,2,0.5c0.5,0.1,1.2,0.4,1.9,0.7c0.7,0.3,1.3,0.7,1.7,1c0.4,0.4,0.8,0.9,1.1,1.5
									c0.3,0.6,0.5,1.3,0.5,2.1c0,1.4-0.4,2.5-1.1,3.4c-0.8,0.9-1.7,1.6-2.8,1.9c-1.1,0.4-2.3,0.5-3.6,0.5c-2.4,0-4.4-0.6-5.9-1.7
									c-1.5-1.2-2.2-2.9-2.2-5.1h2.5c0.1,1.7,0.6,2.9,1.7,3.6c1.1,0.8,2.4,1.1,4.1,1.1c1.3,0,2.5-0.3,3.4-0.8c0.9-0.6,1.4-1.5,1.4-2.7
									c0-0.6-0.1-1.1-0.4-1.5c-0.3-0.4-0.7-0.7-1.2-1c-0.5-0.3-1.1-0.5-1.6-0.6c-0.5-0.2-1.3-0.3-2.2-0.5c-0.1,0-0.2,0-0.3-0.1
									c-2-0.5-3.3-0.8-3.9-1.1c-1.9-0.8-2.8-2.2-2.8-4.2c0-1.9,0.7-3.2,2.1-4.2c1.4-0.9,3-1.4,5-1.4c2.1,0,3.8,0.5,5.1,1.5
									C727.2,340.3,727.9,341.8,727.9,343.8z"/>
								<path fill="white" d="M764.6,350.3c-0.2,2.5-1.1,4.4-2.6,5.8c-1.5,1.4-3.4,2.1-5.9,2.1c-2.8,0-5-0.9-6.6-2.7
									c-1.6-1.8-2.4-4.3-2.4-7.4c0-2.9,0.8-5.3,2.4-7.3c1.6-1.9,3.9-2.9,6.8-2.9c2.1,0,3.9,0.6,5.4,1.7c1.6,1.1,2.4,2.7,2.6,4.6h-2.6
									c-0.3-1.3-0.9-2.3-1.9-3c-1-0.7-2.2-1.1-3.6-1.1c-2.2,0-3.8,0.8-4.9,2.3c-1.1,1.5-1.7,3.4-1.7,5.7c0,2.5,0.6,4.4,1.8,5.9
									c1.2,1.4,2.8,2.1,4.8,2.1c1.7,0,3-0.5,4-1.4c1-1,1.6-2.3,1.8-4.2H764.6z"/>
								<path fill="white" d="M779.5,337.7c3,0,5.3,0.9,6.9,2.8c1.6,1.9,2.5,4.3,2.5,7.3c0,3-0.8,5.5-2.4,7.4c-1.6,2-3.9,2.9-6.9,2.9
									c-1.5,0-2.9-0.3-4.1-0.8c-1.2-0.5-2.2-1.3-2.9-2.3c-0.8-1-1.3-2.1-1.7-3.3c-0.4-1.2-0.6-2.6-0.6-4c0-3,0.8-5.5,2.5-7.3
									C774.4,338.6,776.6,337.7,779.5,337.7z M779.5,339.9c-2.2,0-3.8,0.8-5,2.3c-1.2,1.5-1.7,3.4-1.7,5.6c0,2.4,0.6,4.4,1.8,5.8
									c1.2,1.4,2.9,2.2,4.9,2.2c2,0,3.7-0.7,4.9-2.2c1.2-1.5,1.8-3.4,1.8-5.8c0-2.4-0.6-4.3-1.8-5.8
									C783.2,340.6,781.5,339.9,779.5,339.9z"/>
								<path fill="white" d="M795.4,338.1h2.8l10.3,15.8v-15.8h2.5v19.5h-2.9L797.9,342v15.6h-2.5V338.1z"/>
								<path fill="white" d="M832.5,343.9H830c-0.3-2.6-1.9-4-4.8-4c-1.4,0-2.5,0.3-3.3,0.8c-0.8,0.6-1.1,1.4-1.1,2.4
									c0,0.4,0.1,0.7,0.2,1c0.1,0.3,0.3,0.5,0.6,0.7c0.3,0.2,0.5,0.4,0.8,0.5c0.2,0.1,0.6,0.3,1.1,0.4c0.5,0.1,0.9,0.3,1.2,0.3
									c0.3,0.1,0.8,0.2,1.4,0.3c0.8,0.2,1.5,0.3,2,0.5c0.5,0.1,1.2,0.4,1.9,0.7c0.7,0.3,1.3,0.7,1.7,1c0.4,0.4,0.8,0.9,1.1,1.5
									c0.3,0.6,0.5,1.3,0.5,2.1c0,1.4-0.4,2.5-1.1,3.4c-0.8,0.9-1.7,1.6-2.8,1.9c-1.1,0.4-2.3,0.5-3.6,0.5c-2.4,0-4.4-0.6-5.9-1.7
									c-1.5-1.2-2.2-2.9-2.2-5.1h2.5c0.1,1.7,0.6,2.9,1.7,3.6c1.1,0.8,2.4,1.1,4.1,1.1c1.3,0,2.5-0.3,3.4-0.8c0.9-0.6,1.4-1.5,1.4-2.7
									c0-0.6-0.1-1.1-0.4-1.5c-0.3-0.4-0.7-0.7-1.2-1c-0.5-0.3-1.1-0.5-1.6-0.6c-0.5-0.2-1.3-0.3-2.2-0.5c-0.1,0-0.2,0-0.3-0.1
									c-2-0.5-3.3-0.8-3.9-1.1c-1.9-0.8-2.8-2.2-2.8-4.2c0-1.9,0.7-3.2,2.1-4.2c1.4-0.9,3-1.4,5-1.4c2.1,0,3.8,0.5,5.1,1.5
									C831.7,340.3,832.4,341.8,832.5,343.9z"/>
								<path fill="white" d="M853.2,338.1v2.2h-6.5v17.2h-2.6v-17.2h-6.5v-2.2H853.2z"/>
								<path fill="white" d="M858.9,338.1h8.6c4.4,0,6.5,1.8,6.5,5.4c0,1.1-0.3,2.1-0.9,3c-0.6,0.9-1.4,1.4-2.4,1.7
									c0.7,0.1,1.2,0.4,1.6,0.6c0.4,0.3,0.7,0.7,0.9,1.2c0.2,0.5,0.3,0.9,0.4,1.3c0.1,0.4,0.1,0.9,0.1,1.7c0,0.1,0,0.3,0,0.5
									c0,0.3,0,0.5,0,0.6c0,0.1,0,0.3,0,0.5c0,0.3,0.1,0.4,0.1,0.6c0,0.1,0,0.3,0.1,0.5c0,0.2,0.1,0.4,0.1,0.5c0.1,0.1,0.1,0.3,0.2,0.5
									s0.2,0.3,0.2,0.5c0.1,0.1,0.2,0.3,0.3,0.4h-3c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.3-0.1-0.6-0.2-1c0-0.4-0.1-0.7-0.1-0.9
									c0-0.2,0-0.6-0.1-1c0-0.4,0-0.7,0-0.7c-0.1-1.7-0.4-2.8-1-3.3c-0.6-0.5-1.8-0.8-3.5-0.8h-5.1v8.4h-2.6V338.1z M861.5,340.3v6.8
									h4.8c0.6,0,1.1,0,1.5-0.1c0.4,0,0.9-0.1,1.4-0.2c0.5-0.1,0.9-0.3,1.2-0.5c0.3-0.2,0.6-0.6,0.8-1c0.2-0.4,0.3-1,0.3-1.6
									c0-1.3-0.4-2.2-1.2-2.7c-0.8-0.5-1.9-0.7-3.2-0.7H861.5z"/>
								<path fill="white" d="M880.8,338.1h2.6v12.3c0,1.9,0.4,3.3,1.2,4.2c0.8,0.9,2.2,1.3,4,1.3c1.9,0,3.3-0.4,4.1-1.3
									c0.8-0.9,1.2-2.3,1.2-4.1v-12.3h2.6v11.6c0,2.8-0.6,4.9-1.8,6.3c-1.2,1.3-3.2,2-6.1,2c-2.8,0-4.8-0.7-6-2
									c-1.2-1.3-1.8-3.3-1.8-6.1V338.1z"/>
								<path fill="white" d="M920.6,350.3c-0.2,2.5-1.1,4.4-2.6,5.8c-1.5,1.4-3.4,2.1-5.9,2.1c-2.8,0-5-0.9-6.6-2.7
									c-1.6-1.8-2.4-4.3-2.4-7.4c0-2.9,0.8-5.3,2.4-7.3s3.9-2.9,6.8-2.9c2.1,0,3.9,0.6,5.4,1.7c1.6,1.1,2.4,2.7,2.6,4.6h-2.6
									c-0.3-1.3-0.9-2.3-1.9-3c-1-0.7-2.2-1.1-3.6-1.1c-2.2,0-3.8,0.8-4.9,2.3c-1.1,1.5-1.7,3.4-1.7,5.7c0,2.5,0.6,4.4,1.8,5.9
									c1.2,1.4,2.8,2.1,4.8,2.1c1.7,0,3-0.5,4-1.4c1-1,1.6-2.3,1.8-4.2H920.6z"/>
								<path fill="white" d="M940.7,338.1v2.2h-6.5v17.2h-2.6v-17.2H925v-2.2H940.7z"/>
								<path fill="white" d="M949,338.1v19.5h-2.6v-19.5H949z"/>
								<path fill="white" d="M965,337.7c3,0,5.3,0.9,6.9,2.8c1.6,1.9,2.5,4.3,2.5,7.3c0,3-0.8,5.5-2.4,7.4c-1.6,2-3.9,2.9-6.9,2.9
									c-1.5,0-2.9-0.3-4.1-0.8c-1.2-0.5-2.2-1.3-2.9-2.3c-0.8-1-1.3-2.1-1.7-3.3c-0.4-1.2-0.6-2.6-0.6-4c0-3,0.8-5.5,2.5-7.3
									C959.9,338.6,962.2,337.7,965,337.7z M965,339.9c-2.2,0-3.8,0.8-5,2.3c-1.2,1.5-1.7,3.4-1.7,5.6c0,2.4,0.6,4.4,1.8,5.8
									c1.2,1.4,2.9,2.2,4.9,2.2c2,0,3.7-0.7,4.9-2.2c1.2-1.5,1.8-3.4,1.8-5.8c0-2.4-0.6-4.3-1.8-5.8C968.7,340.6,967.1,339.9,965,339.9
									z"/>
								<path fill="white" d="M981,338.1h2.8l10.3,15.8v-15.8h2.5v19.5h-2.9L983.4,342v15.6H981V338.1z"/>
							</g>
						</g>
						<g>
							<path fill="#FF0843" d="M284.5,208l-50.6,79.6c-8.7-7.7-15.4-17.3-20.4-25.9C202.4,242.5,110,62.4,110,62.4
								C179.2,62.4,247.8,151.8,284.5,208z"/>
							<path fill="#3B0640" d="M404.6,304.3C404.6,304.3,404.6,304.3,404.6,304.3c-41.3-1.2-69.6,23.4-108.3,17.2
								c-17.5-2.8-37.1-12-61.1-32.7l0,0c-0.3-0.3-0.7-0.6-1-0.9h0c-0.1-0.1-0.2-0.1-0.2-0.2l50.6-79.6c15.2,23.4,25,41.1,26.9,44.1
								C342,301.6,404.6,304.3,404.6,304.3z"/>
							<path fill="#3BC4F4" d="M515,301.8v2.5H404.6c0,0-62.5-2.8-93.2-52.2c-1.9-3.1-11.7-20.7-26.9-44.1l96-151
								C512.9,95.8,287.3,292,378,287.6c33.2-1.6,43.8-8.6,56.7-11.5C463.8,269.5,515,301.8,515,301.8z"/>
							<path fill="#FFAA00" d="M296.3,321.5C220.1,309.4,91,336.9,91,336.9l-7.1-7.1l150.2-41.9c0,0,0,0,0.1,0h0c0.3,0.3,0.7,0.6,1,0.9
								l0,0C259.1,309.5,278.8,318.7,296.3,321.5z"/>
						</g>
					</svg>
				</div>
			</div>
      <div className="gui gui-mask"></div>
      <div className="gui gui-top">
        <nav className="gui__nav nav">
          <a href="#services" className="nav__item">
            Services
          </a>
          <a href="#school" className="nav__item">
            School
          </a>
          <a href="#about" className="nav__item">
            About Us
          </a>
          <a href="#partners" className="nav__item">
            Partners
          </a>
          <a href="#career" className="nav__item">
            Career
          </a>
          <a href="#contacts" className="nav__item">
            Contact Us
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
          <a href="#about" className="nav__item">
            About Us
          </a>
          <a href="#partners" className="nav__item">
            Partners
          </a>
          <a href="#career" className="nav__item">
            Career
          </a>
          <a href="#contacts" className="nav__item">
            Contact Us
          </a>
        </nav>
		</div>
		<div className="gui gui-pagination">
				<a className="gui-pagination__item active" href="#home">01</a>
				<a className="gui-pagination__item" href="#services">02</a>
				<a className="gui-pagination__item" href="#school">03</a>
				<a className="gui-pagination__item" href="#about">04</a>
				<a className="gui-pagination__item" href="#partners">05</a>
				<a className="gui-pagination__item" href="#career">06</a>
				<a className="gui-pagination__item" href="#contacts">07</a>
				<a className="gui-pagination__item gui-pagination__next-slide" href="#next-section"><span></span></a>
		</div>
		<button type="button" className="gui gui-menu-btn"><span></span></button>
			
		<div className="page-progress"><span></span></div>
		<div class="content">
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
						<img src="./img/section-footer_white.svg" alt="footer-white"/>
						
						<div className="section-progress"></div>
					</div>

			</header>
			<section class="section section-services" id="services" data-gui-state="dark">
					<div class="section-index"
							 data-rellax-percentage="0.5"
							 data-rellax-speed="-3">
						<img src="img/02.svg" alt="img2"/>
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
								<div class="tile__icon"><img src="/img/0.svg" alt="imgsvg" /></div>
								<h4 class="tile__title title-small">Project management</h4>
								<p class="text-small">Our fundamental service. Something that distinguishes us from the competition, and which all of our clients recognize is our project management. The engine of our company.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img1.svg" alt="img1" /></div>
								<h4 class="tile__title title-small">Antenna and Line installation</h4>
								<p class="text-small">The most of our experience lay here. Something we know better than most of our competitors.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/2.svg" alt="img2svg" /></div>
								<h4 class="tile__title title-small">Drone audits</h4>
								<p class="text-small">New technology? We are already there. Always finding new implementations for our clients benefit.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/3.svg" alt="img3svg" /></div>
								<h4 class="tile__title title-small">Testing & Integration</h4>
								<p class="text-small">Simple and straightforward. Precision and deep knowledge allow us to do the project right the first time.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/4.svg" alt="img4svg" /></div>
								<h4 class="tile__title title-small">Education and Training</h4>
								<p class="text-small">3 week long course built by our professionals. We introduce new people to the industry and we do it with class. In our 3 week long course, we introduce individuals to the growing industry. By giving them the skills and knowledge to build upon their career we pride ourselves in producing individuals ready to work.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/5.svg" alt="img5svg" /></div>
								<h4 class="tile__title title-small">Microwave services</h4>
								<p class="text-small">Hundreds of microwave projects successfully completed by our team allow us to confidently state - “We are the best.”</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="/img/6.svg" alt="img6svg" /></div>
								<h4 class="tile__title title-small">Small Cell</h4>
								<p class="text-small">Small Cell is a base of on the way to 5G. We are always in vanguard; this is not an exception. The basis of 5G will be build upon the 4G infostructure. As with all aspects of Belazor Technologies Inc we pride ourselves in being in the forefront of small cell technology.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="./img/7.svg" alt="img7svg" /></div>
								<h4 class="tile__title title-small">Maintenance & Troubleshooting</h4>
								<p class="text-small">Experience, understanding and background allow us to be the first choice.</p>
							</div>

							<div class="tiles__item tile animated-element">
								<div class="tile__icon"><img src="./img/8.svg" alt="img8svg" /></div>
								<h4 class="tile__title title-small">Civil & Electrical services</h4>
								<p class="text-small">Licensed, insured and knowledgeable. Our civil crews are always accessible.</p>
							</div>
						</div>
					</div>
					
					<div class="section-progress"></div>
					
					<div class="section-footer progress-trigger" data-progress-color="white">
						<img src="/img/section-footer_purple.svg" alt="footer-purple" />
						<div class="section-progress"></div>
					</div>
				</section>
		</div>
    </main>
  );
}

export default App;
