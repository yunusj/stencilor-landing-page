import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    {this.props.items.map((listValue, index)=>{
                        return <li key={index} data-item={listValue.name} className={(listValue.current)?'active':''} onClick={this.props.togglePage}>{listValue.name}</li>;
                    })}
                </ul>
            </nav>
        )
    }
}

