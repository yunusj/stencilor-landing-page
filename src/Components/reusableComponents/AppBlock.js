import React, { Component } from 'react'
import { makeid } from '../../utils.js'
import AppBlockBrowser from './AppBlockBrowser'

// Import all Logo SVGs
import Brand_youtube from '../../Assets/images/brands/youtube.svg'
import Brand_amazon from '../../Assets/images/brands/amazon.svg'
import Brand_facebook from '../../Assets/images/brands/facebook.svg'
import Brand_google from '../../Assets/images/brands/google.svg'
import Brand_instagram from '../../Assets/images/brands/instagram.svg'
import Brand_linkedin from '../../Assets/images/brands/linkedin.svg'
import Brand_spotify from '../../Assets/images/brands/spotify.svg'
import Brand_twitter from '../../Assets/images/brands/twitter.svg'
import Brand_wordpress from '../../Assets/images/brands/wordpress.svg'


const AppBlockBrands = {
	Brand_youtube,
	Brand_amazon,
	Brand_facebook,
	Brand_google,
	Brand_instagram,
	Brand_linkedin,
	Brand_spotify,
	Brand_twitter,
	Brand_wordpress
}

export default class AppBlock extends Component {
	constructor(props) {
		super(props);
	}
    render() {
    	let brand = this.props.brand ? this.props.brand : '';
    	let LogoSVG = null;
    	let styles = {};

    	if(! brand) brand = 'empty';
    	else LogoSVG = AppBlockBrands['Brand_'+brand];

    	let depth = 6;

		var rows = [];
		for (var i=0; i < depth; i++) {
		    rows.push(<div key={i}></div>);
		}

        return (
            <div id={`appBlock-${brand}`} className={`appBlock appBlock-${brand} appBlock-shape-${this.props.shape}`} >
            	<div className='face'>
            		{LogoSVG ? <LogoSVG /> : ''}
            		{this.props.shape=='browser' ? <AppBlockBrowser /> : ''}
            	</div>
            	{rows}
            </div>
        )
    }
}

