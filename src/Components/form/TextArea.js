import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class TextArea extends Component {

    render() {
        return (
    		<div className={`input input-TextArea`}>
                {(this.props.icon)?<FontAwesome name={this.props.icon} />:null}
                <textarea name={this.props.name} placeholder={this.props.placeholder} rows={`5`} />
            </div>
        )
    }
}

