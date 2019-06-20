import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component{
    render() {
        return(
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid class="landing-grid">
                    <Cell col={12}>
                        <img alt="avatar" className="avatar-img" 
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>

                        <p>HTML/CSS |Bootstraps| Javascript | React | React Native | NodeJS | Express |MongoDB</p>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;