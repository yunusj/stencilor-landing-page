import React, { Component } from 'react'

export default class AppBlockBrowser extends Component {
    render() {
        return (
            <div className={`appBlockBrowser`}>

                <div className={`appBlockBrowser--topbar`}>
                    {(! this.props.simple)?<span className={`appBlockBrowser--topbar-icon`}></span> : ''}
                    {(! this.props.simple)?<span className={`appBlockBrowser--topbar-icon`}></span> : ''}
                    {(! this.props.simple)?<span className={`appBlockBrowser--topbar-icon`}></span> : ''}
                </div>
                <div className={`appBlockBrowser--addressArea`}>
                    {(! this.props.simple)?<div className={`appBlockBrowser--addressArea-url`}>http://yourWebsite.com</div> : ''}
                </div>
            </div>
        )
    }
}

