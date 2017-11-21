import React, { Component } from 'react'
import Newsletter from "./Newsletter";

export default class LandingPage extends Component {
    render() {
        return (
            <section className="LandingPage format-branding">
                <h1>Reinventing the Web.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <Newsletter />
            </section>
        )
    }
}

