import React, { Component } from 'react'

export default class LoaderSuccess extends Component {

    render() {
        return (
			<div className="loaderSuccess">
			  <svg className="circular">
			     <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2"  strokeMiterlimit="10"/>
				 
			  </svg>
			  <svg className="suc">
			  	<path className="checkmark__check" fill="none" d="M10.7,20.4l5.3,5.3l12.4-12.5"></path>
			  </svg>
			</div>
        )
    }
}

