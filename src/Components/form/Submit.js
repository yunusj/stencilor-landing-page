import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Submit extends Component {

    render() {
        return (
    		<div className={`input input-Submit`}>
                {(this.props.icon)?<FontAwesome name={this.props.icon} />:null}
                <input type="text" name={this.props.name} placeholder={this.props.placeholder} />
            </div>
        )
    }
}

