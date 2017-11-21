import React, { Component } from 'react'
import LogoSVG from '../../Assets/images/logo.svg'


export default class Logo extends Component {
    render() {
        return (
            <div className={`logo logo-${this.props.color}`}>
 				<LogoSVG />
            </div>
        )
    }
}

