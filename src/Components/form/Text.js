import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Text extends Component {

    render() {
        return (
    		<div className={`input input-Text`}>
                {(this.props.icon)?<FontAwesome name={this.props.icon} />:null}
                <input type="text" name={this.props.name} placeholder={this.props.placeholder} />
            </div>
        )
    }
}

