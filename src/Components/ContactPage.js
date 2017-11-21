import React, { Component } from 'react'
import { Form } from 'antd';
import Background from '../Assets/images/contact--map.png'
import ContactForm from './ContactForm'


export default class ContactPage extends Component {
    render() {

        return (
    		<section className={`section`}>
    			<div className={`section--sidebar`} style={{backgroundImage: `url(${Background})`}}>

    			</div>
    			<div className={`section--content`}>
    				<h1 className={`section__title`}>Contact us.</h1>
                 
                    <ContactForm />

    			</div>
    		</section>
        )
    }
}

