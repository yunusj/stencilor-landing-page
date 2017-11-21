import React, { Component } from 'react'

export default class Newsletter extends Component {
    constructor(props) {
        super(props);
        this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        console.log('form submitted');
    }


    render() {
        return (
            <div className="newsletter">
 				<h3>Want to be notified on launch?</h3>
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="Type your email address" />
                    <input type="submit" name="submit" value="Join Waiting List" />
                </form>
            </div>
        )
    }
}

