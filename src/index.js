import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { DatePicker } from 'antd'
import Styles from "./CSS/style.scss";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import AppBlocksContainer from "./Components/AppBlocksContainer";
import Modal from "./Components/reusableComponents/Modal";

const temp = { DatePicker };
let inQueue = false;

export default class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			currentPage: 'home',
			loading: false,
		};

		this.togglePage = this.togglePage.bind(this);
	}

    togglePage(e, byPassQueue) {
    	const that = this;
    	let currentPage;

    	// get toggle caller
    	if(e.target !== undefined) {
    		currentPage = e.target.dataset.item;
    	} else {
    		currentPage = e;
    	}

        // close already open modal
        if(this.state.showModal === true
            && currentPage != 'close') {
            this.togglePage('close');
            setTimeout(()=>{
                that.togglePage(currentPage, true);
            }, 100);
            return;
        }

    	// prevent actions while on interim state
        // queue to be run again
    	if(typeof(this.state.showModal) !== "boolean") {
    		if(inQueue === false || byPassQueue === true) {
    			inQueue = true;
	    		setTimeout(()=>{
	    			that.togglePage(currentPage, true);
	    		}, 100);
	    	}
    		return false;
    	}
    	inQueue = false;


    	// set state based on toggle caller
        switch(currentPage) {
        	case 'Home':
        	case 'close':
        		if(this.state.showModal === false) { return false; }

        		this.changeModalState({
        			showModal: 'closing',
        		});
        		// wait before setting final state
        		setTimeout(()=>{
	        		that.changeModalState({
	        			showModal: false,
	        			currentPage: 'Home'
	        		});
        		}, 1000);
        	break;

        	default:
        		this.changeModalState({
        			showModal: 'opening',
        			currentPage
        		});
        		// wait before setting final state
        		setTimeout(()=>{
	        		that.changeModalState({
	        			showModal: true,
	        		});
        		}, 1000);
        	break;
        }
    }

    changeModalState(stateToChange) {
       this.setState((prevState, props)=>{
        	return {
        		...prevState,
        		...stateToChange
        	}
        });
    }

    render() {
        return (
            <div className={(this.state.showModal)?`modal-open`:null}>
                {(this.state.showModal)?<Modal togglePage={this.togglePage} currentPage={this.state.currentPage} state={this.state.showModal} />:null}
                <div className={`baseLayer`}>
     				<Header currentPage={this.state.currentPage} togglePage={this.togglePage} />
     				<LandingPage />
                    <AppBlocksContainer />
                </div>
 				
            </div>
        )
    }
}