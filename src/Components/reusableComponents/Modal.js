import React, { Component } from 'react'
import CareerPage from '../../Components/CareerPage.js'
import ContactPage from '../../Components/ContactPage.js'

const pages = {
	CareerPage,
	ContactPage
}

export default class Modal extends Component {
	constructor(props) {
		super(props);

		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.handleEscapeKey = this.handleEscapeKey.bind(this);
	}


    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener("keydown", this.handleEscapeKey, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener("keydown", this.handleEscapeKey, false);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if(event.target.classList.contains('modal')) {
            this.props.togglePage('close');
        }

        // if (this.wrapperRef) {
        //     let divRect = this.wrapperRef.getBoundingClientRect();
        //     if (event.clientX >= divRect.left && event.clientX <= divRect.right &&
        //         event.clientY >= divRect.top && event.clientY <= divRect.bottom) {
        //         // Mouse is inside element.
        //     } else {
        //         // Mouse is outside element.
        //         this.props.togglePage('close');
        //     }
        // }
    }

	handleEscapeKey(event) {
		if(event.keyCode === 27) {
			this.props.togglePage('close');
		}
	}

    render() {
    	let PageComp = pages[`${this.props.currentPage}Page`];
    	let modalState = this.props.state;

        return (
            <div id={`modal-${this.props.currentPage}`} ref={this.setWrapperRef} className={`modal modal--state--${modalState}`}>
            	<div className={`modal--container`}>
            		<span data-item={'close'} onClick={this.props.togglePage} className="modal--close"></span>
            		
            		<PageComp togglePage={this.props.togglePage} />

            	</div>
            </div>
        )
    }
}

