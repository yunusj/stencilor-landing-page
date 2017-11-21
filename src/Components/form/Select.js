import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Select extends Component {

    render() {
        return (
    		<div className={`input input-Select`}>
                {(this.props.icon)?<FontAwesome name={this.props.icon} />:null}
                <select name={this.props.name}>
                	{this.props.options.map((item, index)=>{
			        	return (
				        	<option key={item.value} value={item.value}>{item.name}</option>
			        	)
			       	}, this)}
                </select>
            </div>
        )
    }
}

