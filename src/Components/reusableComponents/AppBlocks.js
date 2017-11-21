import React, { Component } from 'react'
import { makeid } from '../../utils.js'
// import AppBlocksSVG from '../../Assets/images/appBlocks-arranged.svg'

import Brand_youtube from '../../Assets/images/brands/youtube.svg'
import Brand_amazon from '../../Assets/images/brands/amazon.svg'
import Brand_facebook from '../../Assets/images/brands/facebook.svg'
import Brand_google from '../../Assets/images/brands/google.svg'
import Brand_instagram from '../../Assets/images/brands/instagram.svg'
import Brand_linkedin from '../../Assets/images/brands/linkedin.svg'
import Brand_spitify from '../../Assets/images/brands/spotify.svg'
import Brand_twitter from '../../Assets/images/brands/twitter.svg'
import Brand_wordpress from '../../Assets/images/brands/wordpress.svg'

let styles = {

}



export default class AppBlocks extends Component {
    render() {

		let classes = `appBlocks`;

    	this.props.branded ? classes += ' appBlocksBranded' : null;

    	console.log('classes', classes);

        return (
            <div className={classes} style={{...styles}} >
				 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 734.7 428.3" enableBackground="new 0 0 734.7 428.3" xmlSpace="preserve">
				<defs>
					<filter  filterUnits="objectBoundingBox" id="AI_Shadow_1">
						<feGaussianBlur  stdDeviation="2" result="blur" in="SourceAlpha"></feGaussianBlur>
						<feOffset  dy="2" dx="-2" result="offsetBlurredAlpha" in="blur"></feOffset>
						<feMerge>
							<feMergeNode  in="offsetBlurredAlpha"></feMergeNode>
							<feMergeNode  in="SourceGraphic"></feMergeNode>
						</feMerge>
					</filter>
				</defs>
				<g id="vRect">
					<g>
						<g>
							<use id="arrow-shadow" xlinkHref="#polygon-vRect" filter="url(#AI_Shadow_1)"></use>
							<path id="polygon-vRect" className="side_right" fill="#3D1756" d="M495.6,208.3c-3.7-1.9-176.2-101-176.2-101l-8.3-4.5c0,0-0.8-0.8-2.5-0.7c-0.7,0-1.6,0.2-2.6,0.7
								c-3.5,1.6-89,41.4-89,41.4s-3.2,1.6,0,3.2c3.2,1.6,183.7,105.3,183.7,105.3s1.5,1,3.8,0.9c1,0,2.1-0.3,3.4-0.9
								c5.6-2.7,87.7-40.6,87.7-40.6S499.4,210.1,495.6,208.3z"/>
						</g>
					</g>
					<polygon className="side_left" fill="#2A0E3A" points="215.6,142.6 215.6,145.8 220.2,145.9 	"/>
					<polygon className="side_right" fill="#3D1756" points="497.3,210.1 497.3,206.8 492.7,206.8 	"/>
					<path className="side_left" fill="#2A0E3A" d="M404.6,253.6l0.2-0.1l7.4-50.5L308.7,102c-0.7,0-1.6,0.2-2.6,0.7c-3.5,1.6-89,41.4-89,41.4s-3.2,1.6,0,3.2
						c3.2,1.6,183.7,105.3,183.7,105.3S402.2,253.7,404.6,253.6z"/>
					<path className="side_top" fill="#4E1768" d="M319.5,104l-8.3-4.5c0,0-2.2-1.5-5.1,0c-3.5,1.6-89,41.4-89,41.4s-3.2,1.6,0,3.2
						c3.2,1.6,183.7,105.3,183.7,105.3s3.1,2,7.2,0c5.6-2.7,87.7-40.6,87.7-40.6s3.7-1.9,0-3.8S319.5,104,319.5,104z"/>
				</g>
				<g id="bigSquare">
					<g>
						<g>
							<use id="arrow-shadow" xlinkHref="#polygon-bigSquare" filter="url(#AI_Shadow_1)"></use>
							<path id="polygon-bigSquare" className="side_right" fill="#3D1756" d="M495.7,325.3c-3.7-1.9-176.2-101-176.2-101l-8.3-4.5c0,0-0.8-0.8-2.5-0.7c-0.7,0-1.6,0.2-2.6,0.7
								c-3.5,1.6-183.7,85.6-183.7,85.6s-3.2,1.6,0,3.2c3.2,1.6,183.7,105.3,183.7,105.3s1.5,1,3.8,0.9c1,0,2.1-0.3,3.4-0.9
								c5.6-2.7,182.3-84.8,182.3-84.8S499.4,327.2,495.7,325.3z"/>
						</g>
					</g>
					<polygon className="side_left" fill="#2A0E3A" points="121,303.7 121,307 125.6,307.1 	"/>
					<polygon className="side_right" fill="#3D1756" points="497.3,327.2 497.3,323.9 492.7,323.8 	"/>
					<path className="side_left" fill="#2A0E3A" d="M309.9,414.7l0.2-0.1l7.4-50.5L308.7,219c-0.7,0-1.6,0.2-2.6,0.7c-3.5,1.6-183.7,85.6-183.7,85.6
						s-3.2,1.6,0,3.2c3.2,1.6,183.7,105.3,183.7,105.3S307.6,414.8,309.9,414.7z"/>
					<path className="side_top" fill="#4E1768" d="M319.5,221.1l-8.3-4.5c0,0-2.2-1.5-5.1,0c-3.5,1.6-183.7,85.6-183.7,85.6s-3.2,1.6,0,3.2
						s183.7,105.3,183.7,105.3s3.1,2,7.2,0c5.6-2.7,182.3-84.8,182.3-84.8s3.7-1.9,0-3.8S319.5,221.1,319.5,221.1z"/>
				</g>
				<g id="hRect">
					<g>
						<g>
							<use id="arrow-shadow" xlinkHref="#polygon-hRect" filter="url(#AI_Shadow_1)"></use>
							<path  id="polygon-hRect" className="side_right" fill="#3D1756" d="M600.8,57.6c-3.7-1.9-80.7-46.5-80.7-46.5l-8.3-4.5c0,0-0.8-0.8-2.5-0.7c-0.7,0-1.6,0.2-2.6,0.7
								C503.2,8.2,323,92.1,323,92.1s-3.2,1.6,0,3.2c3.2,1.6,88.2,50.8,88.2,50.8s1.5,1,3.8,0.9c1,0,2.1-0.3,3.4-0.9
								c5.6-2.7,182.3-84.8,182.3-84.8S604.6,59.5,600.8,57.6z"/>
						</g>
					</g>
					<polygon className="side_left" fill="#2A0E3A" points="321.6,90.6 321.6,93.8 326.2,93.9 	"/>
					<polygon className="side_right" fill="#3D1756" points="602.5,59.5 602.5,56.2 597.9,56.1 	"/>
					<path className="side_left" fill="#2A0E3A" d="M415.1,147l0.2-0.1l1.8-25.6L509.3,5.9c-0.7,0-1.6,0.2-2.6,0.7C503.2,8.2,323,92.1,323,92.1s-3.2,1.6,0,3.2
						c3.2,1.6,88.2,50.8,88.2,50.8S412.8,147.1,415.1,147z"/>
					<path className="side_top" fill="#4E1768" d="M520.1,7.9l-8.3-4.5c0,0-2.2-1.5-5.1,0C503.2,5,323,88.9,323,88.9s-3.2,1.6,0,3.2
						c3.2,1.6,88.2,50.8,88.2,50.8s3.1,2,7.2,0c5.6-2.7,182.3-84.8,182.3-84.8s3.7-1.9,0-3.8C597.1,52.6,520.1,7.9,520.1,7.9z"/>
					<g id="image" opacity="0.15">
						<ellipse cx="493" cy="38.9" rx="12.3" ry="7.7"/>
						<path d="M507.3,87.8l-95.8-17.2l3.5,73.3c1,0,2.2-0.3,3.5-0.9c5.6-2.7,182.3-84.8,182.3-84.8l-90.3-7.7L507.3,87.8z"/>
					</g>
				</g>
				<g id="square-1">
					<g>
						<g>
							<use id="arrow-shadow" xlinkHref="#polygon-square-1" filter="url(#AI_Shadow_1)"></use>
							<path id="polygon-square-1" className="side_right" fill="#3D1756" d="M295.5,205.4c-3.8-1.9-82.8-47.2-82.8-47.2l-8.4-4.6c0,0-0.8-0.8-2.5-0.7
							c-0.7,0-1.6,0.2-2.6,0.7c-3.5,1.6-90.4,42.1-90.4,42.1s-3.3,1.6,0,3.3c3.3,1.6,90.4,51.6,90.4,51.6s1.5,1,3.9,0.9
							c1-0.1,2.2-0.3,3.4-0.9c5.7-2.7,89-41.3,89-41.3S299.2,207.3,295.5,205.4z"/>
						</g>
					</g>
					<polygon className="side_left" fill="#2A0E3A" points="107.2,194 107.2,197.3 111.9,197.4 	"/>
					<polygon className="side_right" fill="#3D1756" points="297.1,207.2 297.1,203.9 292.4,203.8 	"/>
					<path className="side_left" fill="#2A0E3A" d="M202.9,251.3l0.2-0.1l-1.4-98.5c-0.7,0-1.6,0.2-2.6,0.7c-3.5,1.6-90.4,42.1-90.4,42.1
						s-3.3,1.6,0,3.3c3.3,1.6,90.4,51.6,90.4,51.6S200.6,251.4,202.9,251.3z"/>
					<path className="side_top" fill="#4E1768" d="M212.6,154.9l-8.4-4.6c0,0-2.2-1.5-5.1,0c-3.5,1.6-90.4,42.1-90.4,42.1s-3.3,1.6,0,3.3
						s90.4,51.6,90.4,51.6s3.1,2,7.3,0c5.7-2.7,89-41.3,89-41.3s3.8-2,0-3.8C291.6,200.2,212.6,154.9,212.6,154.9z"/>
				</g>
				<g id="square-2">
					<g>
						<use id="arrow-shadow" xlinkHref="#polygon-square-2" filter="url(#AI_Shadow_1)"></use>
						<path id="polygon-square-2" className="side_right" fill="#3D1756" d="M616,165.6c-3.8-1.9-82.8-47.2-82.8-47.2l-8.4-4.6c0,0-0.8-0.8-2.5-0.7c-0.7,0-1.6,0.2-2.6,0.7
								c-3.5,1.6-90.4,42.1-90.4,42.1s-3.3,1.6,0,3.3s90.4,51.6,90.4,51.6s1.5,1,3.9,0.9c1-0.1,2.2-0.3,3.4-0.9c5.7-2.7,89-41.3,89-41.3
								S619.8,167.5,616,165.6z"/>
					</g>
					<polygon className="side_left" fill="#2A0E3A" points="427.7,154.2 427.7,157.6 432.5,157.7 	"/>
					<polygon className="side_right" fill="#3D1756" points="617.7,167.4 617.7,164.2 613,164.1 	"/>
					<path className="side_left" fill="#2A0E3A" d="M523.5,211.6l0.2-0.1l-1.4-98.5c-0.7,0-1.6,0.2-2.6,0.7c-3.5,1.6-90.4,42.1-90.4,42.1
						s-3.3,1.6,0,3.3s90.4,51.6,90.4,51.6S521.1,211.6,523.5,211.6z"/>
					<path className="side_top" fill="#4E1768" d="M533.2,115.1l-8.4-4.6c0,0-2.2-1.5-5.1,0c-3.5,1.6-90.4,42.1-90.4,42.1s-3.3,1.6,0,3.3
						c3.3,1.6,90.4,51.6,90.4,51.6s3.1,2,7.3,0c5.7-2.7,89-41.3,89-41.3s3.8-2,0-3.8S533.2,115.1,533.2,115.1z"/>
				</g>
				<g id="square-3">
					<g>
							<use id="arrow-shadow" xlinkHref="#polygon_square-3" filter="url(#AI_Shadow_1)"></use>
							<path id="polygon_square-3" className="side_right" fill="#3D1756" d="M721.7,115.8c-3.8-1.9-82.8-47.2-82.8-47.2l-8.4-4.6c0,0-0.8-0.8-2.5-0.7c-0.7,0-1.6,0.2-2.6,0.7
								C621.9,65.5,535,106,535,106s-3.3,1.6,0,3.3s90.4,51.6,90.4,51.6s1.5,1,3.9,0.9c1-0.1,2.2-0.3,3.4-0.9c5.7-2.7,89-41.3,89-41.3
								S725.5,117.6,721.7,115.8z"/>
					</g>
					<polygon className="side_left" fill="#2A0E3A" points="533.4,104.4 533.4,107.7 538.2,107.8 	"/>
					<polygon className="side_right" fill="#3D1756" points="723.4,117.6 723.4,114.3 718.7,114.2 	"/>
					<path className="side_left" fill="#2A0E3A" d="M629.2,161.7l0.2-0.1L628,63.2c-0.7,0-1.6,0.2-2.6,0.7C621.9,65.5,535,106,535,106
						s-3.3,1.6,0,3.3s90.4,51.6,90.4,51.6S626.8,161.8,629.2,161.7z"/>
					<path className="side_top" fill="#4E1768" d="M638.9,65.3l-8.4-4.6c0,0-2.2-1.5-5.1,0c-3.5,1.6-90.4,42.1-90.4,42.1s-3.3,1.6,0,3.3
						c3.3,1.6,90.4,51.6,90.4,51.6s3.1,2,7.3,0c5.7-2.7,89-41.3,89-41.3s3.8-2,0-3.8C717.9,110.6,638.9,65.3,638.9,65.3z"/>
				</g>
				</svg>
            </div>
        )
    }
}

